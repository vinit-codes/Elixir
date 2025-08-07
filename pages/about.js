import Image from 'next/image';
import SEOHead from '../components/SEOHead';
import { structuredData } from '../lib/seo';

export default function About() {
  const achievements = [
    {
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Gold Medalist',
      description: 'Achieved gold medal in MD DVL with academic excellence'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '15+ Years Experience',
      description: 'Extensive experience in dermatology and hair transplantation'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: '5000+ Happy Patients',
      description: 'Successfully treated thousands of patients across Indore'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Advanced Technology',
      description: 'Latest equipment and modern treatment techniques'
    }
  ];

  const values = [
    {
      title: 'Patient-Centered Care',
      description: 'Every treatment plan is customized to meet individual needs, ensuring the best possible outcomes for each patient.'
    },
    {
      title: 'Excellence in Treatment',
      description: 'We maintain the highest standards of medical care with continuous learning and state-of-the-art equipment.'
    },
    {
      title: 'Ethical Practice',
      description: 'We believe in transparent communication and honest treatment recommendations for all our patients.'
    },
    {
      title: 'Innovation & Research',
      description: 'Staying at the forefront of dermatological advances to offer the latest and most effective treatments.'
    }
  ];

  return (
    <>
      <SEOHead
        title="About Dr. Manu Kataria | Best Dermatologist in Indore"
        description="Meet Dr. Manu Kataria (MBBS, MD DVL, Gold Medalist), leading dermatologist in Indore with 15+ years experience. Learn about our mission, values, and commitment to excellence."
        keywords="Dr. Manu Kataria, dermatologist indore, skin specialist indore, hair specialist indore, about dermatologist, clinic mission"
        canonical="https://elixirskinhair.com/about"
        structuredData={structuredData.doctor}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Dr. Manu Kataria & Elixir Skin & Hair Clinic
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded with a vision to provide world-class dermatological care in Indore, 
              our clinic has been transforming lives through expert treatment, compassionate care, 
              and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Meet Dr. Manu Kataria
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Dr. Manu Kataria is a renowned dermatologist and hair transplant surgeon with over 15 years 
                  of experience in treating complex skin and hair conditions. He completed his MBBS and 
                  specialized in dermatology (MD DVL) with a gold medal for academic excellence.
                </p>
                <p>
                  Dr. Kataria has treated thousands of patients with conditions ranging from common acne to 
                  complex autoimmune skin disorders. He is particularly known for his expertise in:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Advanced acne and acne scar treatments</li>
                  <li>Hair transplantation and restoration procedures (FUE technique)</li>
                  <li>Psoriasis and eczema management</li>
                  <li>Pigmentation disorders and melasma treatment</li>
                  <li>Anti-aging and cosmetic dermatology</li>
                  <li>Laser treatments and chemical peels</li>
                </ul>
                <p>
                  His approach combines evidence-based medicine with personalized care, ensuring each patient 
                  receives the most effective treatment for their unique condition. Dr. Kataria believes in 
                  educating patients about their conditions and involving them in treatment decisions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 shadow-xl">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt="Dr. Manu Kataria - Best Dermatologist in Indore"
                    width={500}
                    height={600}
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900">Dr. Manu Kataria</h3>
                  <p className="text-amber-600 font-semibold">MBBS, MD DVL, Gold Medalist</p>
                  <p className="text-gray-600">Dermatologist & Hair Transplant Surgeon</p>
                  <p className="text-gray-600 text-sm mt-2">15+ Years Experience | 5000+ Happy Patients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements & Recognition
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Years of dedication and commitment to excellence have earned us recognition and trust from thousands of patients in Indore.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Images Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our State-of-the-Art Facility
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience comfort and luxury in our modern clinic designed with your wellbeing in mind.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Reception & Waiting Area',
                image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=500',
                description: 'Comfortable and welcoming space for patients'
              },
              {
                title: 'Treatment Room',
                image: 'https://images.pexels.com/photos/4386328/pexels-photo-4386328.jpeg?auto=compress&cs=tinysrgb&w=500',
                description: 'Advanced equipment for all procedures'
              },
              {
                title: 'Consultation Chamber',
                image: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=500',
                description: 'Private space for detailed consultations'
              }
            ].map((image, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <Image
                  src={image.image}
                  alt={image.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{image.title}</h3>
                  <p className="text-gray-600">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 italic">
              Note: More clinic images will be added soon. The facility includes latest laser equipment, 
              sterilization units, and comfortable patient areas.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission & Values</h2>
            <p className="text-amber-100 text-lg max-w-3xl mx-auto">
              At Elixir Skin & Hair Clinic, our mission is to provide exceptional dermatological care that 
              enhances both health and confidence. We are committed to excellence, innovation, and compassionate service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold text-amber-100 mb-3">{value.title}</h3>
                <p className="text-white/90">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Journey to Healthy Skin & Hair?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation with Dr. Manu Kataria to discuss your concerns and 
            create a personalized treatment plan that delivers real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
            >
              Book Consultation
            </a>
            <a
              href="tel:+919893014535"
              className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Call Now: +91-9893014535
            </a>
          </div>
        </div>
      </section>
    </>
  );
}