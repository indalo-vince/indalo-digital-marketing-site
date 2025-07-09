"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import { useForm, ValidationError } from "@formspree/react";

// Define form schema using Zod for validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  companyName: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  // Initialize FormSpree with the provided form ID
  const [formState, handleFormspreeSubmit] = useForm("mvgrjndp");
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    companyName: "",
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: ContactFormData) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev: Partial<Record<keyof ContactFormData, string>>) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setErrors({});
    
    try {
      // Validate form data with Zod before submitting to FormSpree
      const validatedData = contactFormSchema.parse(formData);
      
      // Submit to FormSpree
      await handleFormspreeSubmit(validatedData);
      
      // If we get here without errors, reset the form
      if (formState.succeeded) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          companyName: "",
        });
      }
      
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        // Convert Zod errors to a more usable format
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err: z.ZodIssue) => {
          const field = err.path[0] as keyof ContactFormData;
          fieldErrors[field] = err.message;
        });
        setErrors(fieldErrors);
      } else {
        setSubmitError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/">
                <Image 
                  src="/Indalo-digital-logo.svg" 
                  alt="Indalo Digital Logo" 
                  width={180} 
                  height={50}
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/#solutions" className="font-medium nav-link">Solutions</Link>
              <Link href="/#services" className="font-medium nav-link">Services</Link>
              <Link href="/contact" className="font-medium nav-link">Contact</Link>
            </div>
            <div className="md:hidden">
              <button aria-label="Menu" className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Contact Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary-custom">Get in Touch</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
              Have questions about our services or want to discuss how we can help your removals business? 
              We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-primary-custom">Send Us a Message</h2>
              
              {formState.succeeded && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-md">
                  Thank you for your message! We&apos;ll get back to you as soon as possible.
                </div>
              )}
              
              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">
                  {submitError}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-secondary focus:outline-none ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="John Smith"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-secondary focus:outline-none ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:outline-none"
                    placeholder="+44 1234 567890"
                  />
                </div>
                
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name (optional)
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:outline-none"
                    placeholder="Your Company Ltd"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-secondary focus:outline-none ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="How can we help you?"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting || formState.submitting}
                    className="w-full btn-primary flex justify-center items-center"
                  >
                    {isSubmitting || formState.submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                  {/* FormSpree validation errors */}
                  <ValidationError errors={formState.errors} />
                </div>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="flex flex-col">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary-custom">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+443306337040" className="hover:text-secondary transition-colors">
                          +44 0330 633 7040
                        </a>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Monday to Friday, 9am to 5pm GMT
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@indalodigital.com" className="hover:text-secondary transition-colors">
                          info@indalodigital.com
                        </a>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        We aim to respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* FAQ Section */}
              <div className="mt-12 bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-primary-custom">How quickly can you start working with us?</h4>
                    <p className="text-gray-600 mt-1">We can typically begin an initial consultation within 1-2 weeks of your first contact.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary-custom">Do you work with removals companies of all sizes?</h4>
                    <p className="text-gray-600 mt-1">Yes, we work with businesses ranging from small family operations to large national companies.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary-custom">What areas do you cover?</h4>
                    <p className="text-gray-600 mt-1">We work with removals companies throughout the UK and can provide remote consultations internationally.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
