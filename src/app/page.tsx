import Image from "next/image";
import { AnimatedTagline } from "../components/AnimatedTagline";
import { ServiceCard } from "../components/ServiceCard";
import { Menu, Shield, Graph, Money, Lightbulb, Web, Book, Calendar, Lightning, Growth, Exit, Shipping } from "../icons";
import { ShimmeringBorderCard } from "../components/ShimmeringBorderCard";
import { TransformCTA } from "../components/TransformCTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
              <Image 
                src="/Indalo-digital-logo.svg" 
                alt="Indalo Digital Logo" 
                width={180} 
                height={50}
                priority
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#solutions" className="font-medium nav-link">Solutions</a>
              <a href="#services" className="font-medium nav-link">Services</a>
              <a href="/contact" className="font-medium nav-link">Contact</a>
            </div>
            <div className="md:hidden">
              <button aria-label="Menu" className="p-2">
                <Menu />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/indalo-hero.webp"
            alt="Indalo Digital Background"
            fill
            priority
            className="object-cover w-full h-full opacity-80"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/50"></div>
          {/* Bottom gradient for smooth transition */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" 
            style={{ 
              background: 'linear-gradient(to top, white, transparent)',
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedTagline 
                staticText="We help removals companies"
                taglines={[
                  "reduce stress.",
                  "navigate the future.",
                  "to grow and expand.",
                  "to build professional websites.",
                  "to find the best customers.",
                  "to thrive in the AI age."
                ]}
                taglineColors={[
                  'var(--complementary)',
                  'var(--primary)',
                  'var(--secondary)',
                  'var(--highlight)',
                  'var(--accent)',
                  'var(--complementary)'
                ]}
                className="text-2xl md:text-4xl lg:text-4xl xl:text-5xl mb-12 font-bold"
                style={{ fontFamily: 'var(--font-montserrat)', lineHeight: '1.3' }}
                fullWidth={true}
            />
          <div className="flex flex-col md:flex-row items-center">
              <div className="lg:w-3/4 xl:w-2/3 md:pr-12">
                <p className="text-lg md:text-xl mb-8">
                  We use our extensive experience in the removals and cutting-edge tech industries to take your removals business to the next level.
                </p>
                <p className="text-lg md:text-xl mb-8">
                  For a free, no obligation consultation, use the button below to get in touch.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/contact" className="btn-primary text-center">
                    Get in Touch
                  </a>
                  <a href="#services" className="btn-secondary text-center">
                    Our Services
                  </a>
                </div>
            </div>
            <div className="md:w-1/4 lg:w-1/2 mt-10 md:mt-0">
              {/* Content area for the right side if needed */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section id="solutions" className="pt-10 pb-20 relative" style={{ backgroundColor: 'white' }}>
        {/* Subtle gradient overlay at the top */}
        <div 
          className="absolute top-0 left-0 right-0 h-40 pointer-events-none" 

        />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Three Pillars</h2>
            <p className="text-lg max-w-4xl mx-auto">These are our three pillars to how we can help your removals or storage business achieve its&nbsp;goals.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ShimmeringBorderCard borderColor="var(--primary)" index={0} totalCards={3}>
              <div className="rounded-full w-14 h-14 flex items-center justify-center mb-6 bg-primary-custom">
                <div className="w-8 h-8 text-white-custom">
                  <Shield />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Technology Modernization</h3>
              <p>Implement modern, efficient systems that streamline your operations and improve customer experience.</p>
            </ShimmeringBorderCard>

            <ShimmeringBorderCard borderColor="var(--highlight)" index={1} totalCards={3}>
              <div className="rounded-full w-14 h-14 flex items-center justify-center mb-6 bg-highlight-custom">
                <div className="w-8 h-8 text-primary-custom">
                  <Money />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Business Planning</h3>
              <p>Strategic guidance for growth, succession planning, and preparing your business for a profitable exit.</p>
            </ShimmeringBorderCard>
            
            <ShimmeringBorderCard borderColor="var(--secondary)" index={2} totalCards={3}>
              <div className="rounded-full w-14 h-14 flex items-center justify-center mb-6 bg-secondary-custom">
                <div className="w-8 h-8 text-white-custom">
                  <Graph />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Operational Efficiency</h3>
              <p>Optimize your workflows and processes to reduce costs, minimize waste, and maximize productivity.</p>
            </ShimmeringBorderCard>

          </div>
        </div>
      </section>
      
      {/* CTA Section after Three Pillars */}
      <TransformCTA className="bg-gray-50" />
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg max-w-3xl mx-auto">Our unique blend of experience in technology and the removals & storage industry allows us to offer a range of services to help you grow and run your business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Technology Modernization Column */}
            <div className="space-y-8 p-6 rounded-lg" style={{ background: 'linear-gradient(to bottom, rgba(var(--primary-custom-rgb), 0.5), rgba(var(--primary-custom-rgb), 0))' }}>
              <div className="flex justify-center mb-6">
                <h3 className="text-lg font-medium text-white bg-primary/80 py-2 px-4 rounded-md shadow-inner inline-block">
                  Technology Modernization
                </h3>
              </div>
              <ServiceCard
                title="Technology Review & Strategy"
                description="Comprehensive assessment of your current technology stack and strategic recommendations for improvement."
                solutionType="technology"
                solutionTitle="Technology Modernization"
                icon={
                  <div className="w-8 h-8">
                    <Lightbulb />
                  </div>
                }
                solutionIcon={<Shield />}
              />
              
              <ServiceCard
                title="Website Design, Build, and SEO"
                description="Custom website development with industry-specific features and search engine optimization to attract more customers."
                solutionType="technology"
                solutionTitle="Technology Modernization"
                icon={
                  <div className="w-8 h-8">
                    <Web />
                  </div>
                }
                solutionIcon={<Shield />}
              />

              <ServiceCard
                title="AI Training"
                description="Teaching you and your team how to use and leverage the latest AI technologies to improve your business."
                solutionType="technology"
                solutionTitle="Technology Modernization"
                icon={
                  <div className="w-8 h-8">
                    <Book />
                  </div>
                }
                solutionIcon={<Shield />}
              />
            </div>
            
            {/* Business Planning Column */}
            <div className="space-y-8 p-6 rounded-lg md:mt-10" style={{ background: 'linear-gradient(to bottom, rgba(var(--highlight-custom-rgb), 0.5), rgba(var(--highlight-custom-rgb), 0))' }}>
              <div className="flex justify-center mb-6">
                <h3 className="text-lg font-medium text-gray-800 bg-highlight/80 py-2 px-4 rounded-md shadow-inner inline-block">
                  Business Planning
                </h3>
              </div>
              <ServiceCard
                title="Marketing Analysis"
                description="Data-driven insights into your marketing efforts and strategies to improve lead generation and conversion rates."
                solutionType="business"
                solutionTitle="Business Planning"
                icon={
                  <div className="w-8 h-8">
                    <Graph />
                  </div>
                }
                solutionIcon={<Money />}
              />
              
              <ServiceCard
                title="Growth Strategy"
                description="Tailored plans to help your removals business expand into new markets, services, or customer segments."
                solutionType="business"
                solutionTitle="Business Planning"
                icon={
                  <div className="w-8 h-8">
                    <Growth />
                  </div>
                }
                solutionIcon={<Money />}
              />
              
              <ServiceCard
                title="Owner Exit Strategy & Succession Planning"
                description="Strategic planning for business owners looking to transition ownership or prepare for retirement."
                solutionType="business"
                solutionTitle="Business Planning"
                icon={
                  <div className="w-8 h-8">
                    <Exit />
                  </div>
                }
                solutionIcon={<Money />}
              />
            </div>
            
            {/* Operational Efficiency Column */}
            <div className="space-y-8 p-6 rounded-lg md:-mt-5" style={{ background: 'linear-gradient(to bottom, rgba(var(--secondary-custom-rgb), 0.5), rgba(var(--secondary-custom-rgb), 0))' }}>
              <div className="flex justify-center mb-6">
                <h3 className="text-lg font-medium text-white bg-secondary/80 py-2 px-4 rounded-md shadow-inner inline-block">
                  Operational Efficiency
                </h3>
              </div>
              <ServiceCard
                title="Operational Analysis"
                description="In-depth review of your business operations to identify bottlenecks and areas for improvement."
                solutionType="operational"
                solutionTitle="Operational Efficiency"
                icon={
                  <div className="w-8 h-8">
                    <Calendar />
                  </div>
                }
                solutionIcon={<Graph />}
              />
              
              <ServiceCard
                title="Process Optimisation"
                description="Streamlining your business processes to increase efficiency, reduce costs, and improve customer satisfaction."
                solutionType="operational"
                solutionTitle="Operational Efficiency"
                icon={
                  <div className="w-8 h-8">
                    <Lightning />
                  </div>
                }
                solutionIcon={<Graph />}
              />

              <ServiceCard
                title="Export and Customs"
                description="Opening new markets through international expansion with proper customs documentation and compliance."
                solutionType="operational"
                solutionTitle="Operational Efficiency"
                icon={
                  <div className="w-8 h-8">
                    <Shipping />
                  </div>
                }
                solutionIcon={<Graph />}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section after Services */}
      <TransformCTA />
    </div>)
}
