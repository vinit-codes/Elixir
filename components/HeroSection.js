import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Trusted
                <span className="block text-amber-600">Dermatologist</span>
                <span className="block">in Indore</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Expert skin and hair treatments by Dr. Manu Kataria (MBBS, MD DVL, Gold Medalist)
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span className="text-gray-700">15+ Years of Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span className="text-gray-700">5000+ Happy Patients</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span className="text-gray-700">Advanced Treatment Technology</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-center transition-colors duration-200 shadow-lg"
              >
                Book Appointment
              </Link>
              <a
                href="tel:+919893014535"
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-center transition-colors duration-200"
              >
                Call Now
              </a>
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-500">
                📍 New Palasia, Indore | 📞 +91-9893014535 | ⏰ Mon-Sat: 10AM-7PM
              </p>
            </div>
          </div>

          {/* Doctor Image */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dr. Manu Kataria - Best Dermatologist in Indore"
                width={600}
                height={700}
                className="w-full h-96 lg:h-[500px] object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-xl font-bold">Dr. Manu Kataria</h3>
                <p className="text-amber-200">MBBS, MD DVL, Gold Medalist</p>
                <p className="text-gray-200 text-sm">Dermatologist & Hair Transplant Surgeon</p>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Gold Medalist
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              15+ Years Exp
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;