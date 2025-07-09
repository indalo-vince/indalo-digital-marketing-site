import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Indalo Digital',
  description: 'Privacy Policy for Indalo Digital - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          Last Updated: July 8, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            Welcome to Indalo Digital Ltd (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting your personal data. 
            This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-4">We may collect several types of information from and about users of our website, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when filling out forms on our website.
            </li>
            <li>
              <strong>Usage Information:</strong> How you interact with our website, including pages visited, time spent on pages, and other analytics data.
            </li>
            <li>
              <strong>Technical Information:</strong> IP address, browser type, device information, and operating system.
            </li>
            <li>
              <strong>Cookies and Similar Technologies:</strong> Information collected through cookies and similar tracking technologies to enhance your browsing experience.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect for various purposes, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Providing and improving our services</li>
            <li>Responding to your inquiries and requests</li>
            <li>Sending you updates, newsletters, and marketing communications (if you&apos;ve opted in)</li>
            <li>Analyzing website usage to improve user experience</li>
            <li>Ensuring the security and integrity of our website</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Share Your Information</h2>
          <p className="mb-4">We do not sell your personal information. We may share your information with:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Service Providers:</strong> Third-party vendors who help us operate our website and provide our services.
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law or to protect our rights or the rights of others.
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Privacy Rights</h2>
          <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>The right to access your personal information</li>
            <li>The right to correct inaccurate information</li>
            <li>The right to request deletion of your information</li>
            <li>The right to restrict or object to processing</li>
            <li>The right to data portability</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided in the &quot;Contact Us&quot; section below.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
          <p className="mb-4">
            We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small files that a website places on your device to remember information about your visit.
          </p>
          <p className="mb-4">
            You can set your browser to refuse all or some browser cookies or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p>
            We have implemented appropriate security measures to protect your personal information from accidental loss, unauthorized access, use, alteration, and disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
          <p>
            Our website is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to Our Privacy Policy</h2>
          <p>
            We may update our privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this privacy policy periodically for any changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions or concerns about our privacy policy or practices, please contact us at:
          </p>
          <div className="mt-4">
            <p><strong>Indalo Digital Ltd</strong></p>
            <p>Email: <a href="mailto:info@indalodigital.com" className="text-blue-600 hover:underline">info@indalodigital.com</a></p>
            <p>Phone: <a href="tel:+443306337040" className="text-blue-600 hover:underline">+44 0330 633 7040</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}
