import SEOHead from '../components/SEOHead';
import ContactForm from '../components/ContactForm';
import { structuredData } from '../lib/seo';

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact Us | Book Appointment | Elixir Skin & Hair Clinic Indore"
        description="Contact Elixir Skin & Hair Clinic in Indore. Book appointment with Dr. Manu Kataria. Call +91-9893014535 or visit us at New Palasia, Indore."
        keywords="contact dermatologist indore, book appointment skin doctor indore, elixir clinic contact, Dr. Manu Kataria appointment, dermatology consultation indore"
        canonical="https://elixirskinhair.com/contact"
        structuredData={structuredData.organization}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contact Elixir Skin & Hair Clinic
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Ready to start your journey to healthier skin and hair? Get in touch with us to 
              schedule your consultation with Dr. Manu Kataria.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-6 inline-block">
              <p className="text-gray-900 font-semibold">
                📞 Call Now: +91-9893014535 | 📍 New Palasia, Indore
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We're here to help you achieve your skin and hair goals. Contact us through 
                  any of the methods below or fill out the form to schedule your consultation.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Phone Numbers */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                    <div className="space-y-1">
                      <a href="tel:+919893014535" className="block text-amber-600 hover:text-amber-700 transition-colors">
                        +91-9893014535 (Primary)
                      </a>
                      <a href="tel:+919893788187" className="block text-amber-600 hover:text-amber-700 transition-colors">
                        +91-9893788187
                      </a>
                      <a href="tel:+916265676769" className="block text-amber-600 hover:text-amber-700 transition-colors">
                        +91-6265676769
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Clinic Address</h3>
                    <p className="text-gray-600">
                      Mangalam Pearl Building, 202 (2nd Floor)<br />
                      633-B, New Palasia, Indore, MP 452002<br />
                      India
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Opening Hours</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p className="text-amber-600 text-sm">Emergency consultations available</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:info@elixirskinhair.com" className="text-amber-600 hover:text-amber-700 transition-colors">
                      info@elixirskinhair.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/elixirskinhair"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white hover:bg-amber-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.315 0-.612-.123-.833-.344-.221-.221-.344-.518-.344-.833 0-.315.123-.612.344-.833.221-.221.518-.344.833-.344s.612.123.833.344c.221.221.344.518.344.833 0 .315-.123.612-.344.833-.221.221-.518.344-.833.344z"/>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com/elixirskinhair"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white hover:bg-amber-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Find Us on Map
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Located in the heart of New Palasia, Indore, our clinic is easily accessible 
              with ample parking facilities.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 lg:aspect-h-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.0977!2d75.8577!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzEwLjYiTiA3NcKwNTEnMjcuNyJF!5e0!3m2!1sen!2sin!4v1642000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elixir Skin & Hair Clinic Location - New Palasia, Indore"
              ></iframe>
            </div>
            <div className="p-6 bg-amber-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">Elixir Skin & Hair Clinic</h3>
                  <p className="text-gray-600 text-sm">New Palasia, Indore, MP 452002</p>
                </div>
                <a
                  href="https://maps.google.com/?q=22.7196,75.8577"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Urgent Care?
            </h2>
            <p className="text-amber-100 text-lg mb-8 leading-relaxed">
              For urgent skin or hair concerns, don't hesitate to contact us. 
              Dr. Manu Kataria provides emergency consultations for serious conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919893014535"
                className="bg-white text-amber-900 hover:bg-amber-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
              >
                Emergency Call: +91-9893014535
              </a>
              <a
                href="https://wa.me/919893014535"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-amber-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                WhatsApp: +91-9893014535
              </a>
            </div>
            <p className="text-amber-200 text-sm mt-6">
              Available for emergency consultations outside regular hours
            </p>
          </div>
        </div>
      </section>
    </>
  );
}