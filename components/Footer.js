import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Elixir Skin & Hair Clinic</h3>
                <p className="text-gray-400">Dr. Manu Kataria</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading dermatology and hair clinic in Indore providing expert treatment for all skin and hair conditions with state-of-the-art technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/elixirskinhair"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.315 0-.612-.123-.833-.344-.221-.221-.344-.518-.344-.833 0-.315.123-.612.344-.833.221-.221.518-.344.833-.344s.612.123.833.344c.221.221.344.518.344.833 0 .315-.123.612-.344.833-.221.221-.518.344-.833.344z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com/elixirskinhair"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About Dr. Kataria</Link></li>
              <li><Link href="/treatments" className="text-gray-300 hover:text-white transition-colors duration-200">Our Treatments</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-white transition-colors duration-200">Before & After</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors duration-200">Health Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-300 text-sm">Phone Numbers:</p>
                <a href="tel:+919893014535" className="text-white hover:text-amber-400 transition-colors duration-200">+91-9893014535</a><br />
                <a href="tel:+919893788187" className="text-white hover:text-amber-400 transition-colors duration-200">+91-9893788187</a><br />
                <a href="tel:+916265676769" className="text-white hover:text-amber-400 transition-colors duration-200">+91-6265676769</a>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Address:</p>
                <p className="text-white text-sm">
                  Mangalam Pearl Building, 202 (2nd Floor),<br />
                  633-B, New Palasia, Indore, MP 452002
                </p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Hours:</p>
                <p className="text-white text-sm">Mon-Sat: 10:00 AM - 7:00 PM</p>
                <p className="text-white text-sm">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="aspect-w-16 aspect-h-9 lg:aspect-h-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.0977!2d75.8577!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzEwLjYiTiA3NcKwNTEnMjcuNyJF!5e0!3m2!1sen!2sin!4v1642000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elixir Skin & Hair Clinic Location"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Elixir Skin & Hair Clinic. All rights reserved. | 
            <span className="ml-1">Designed for excellence in dermatological care.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;