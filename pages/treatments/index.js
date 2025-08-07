import SEOHead from '../../components/SEOHead';
import ServiceCard from '../../components/ServiceCard';

export default function Treatments() {
  const treatmentCategories = [
    {
      title: 'Hair Treatments',
      treatments: [
        {
          title: 'Hair Transplant (FUE)',
          description: 'Advanced Follicular Unit Extraction for natural-looking hair restoration',
          image: 'https://images.pexels.com/photos/7755263/pexels-photo-7755263.jpeg?auto=compress&cs=tinysrgb&w=400',
          href: '/treatments/hair-transplant-indore'
        },
        {
          title: 'Hair Loss Treatment',
          description: 'Comprehensive solutions for hair fall and thinning hair',
          image: 'https://images.pexels.com/photos/7755263/pexels-photo-7755263.jpeg?auto=compress&cs=tinysrgb&w=400',
          href: '/treatments/hair-loss-treatment-indore'
        }
      ]
    },
    {
      title: 'Skin Treatments',
      treatments: [
        {
          title: 'Acne Treatment',
          description: 'Comprehensive acne management for clear, healthy skin',
          image: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=400',
          href: '/treatments/acne-treatment-indore'
        },
        {
          title: 'Psoriasis Treatment',
          description: 'Expert psoriasis management and treatment plans',
          image: 'https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=400',
          href: '/treatments/psoriasis-treatment-indore'
        },
        {
          title: 'Pigmentation Treatment',
          description: 'Advanced treatments for dark spots and uneven skin tone',
          image: 'https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=400',
          href: '/treatments/pigmentation-treatment-indore'
        },
        {
          title: 'Anti-Aging Treatment',
          description: 'Rejuvenating treatments for youthful, glowing skin',
          image: 'https://images.pexels.com/photos/3845456/pexels-photo-3845456.jpeg?auto=compress&cs=tinysrgb&w=400',
          href: '/treatments/anti-aging-treatment-indore'
        }
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Skin & Hair Treatments in Indore | Complete Dermatology Services"
        description="Comprehensive skin and hair treatments in Indore including acne treatment, hair transplant, psoriasis treatment, pigmentation removal, and anti-aging procedures by Dr. Manu Kataria."
        keywords="skin treatments indore, hair treatments indore, acne treatment indore, hair transplant indore, psoriasis treatment indore, dermatology services indore"
        canonical="https://elixirskinhair.com/treatments"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Dermatology & Hair Care Services in Indore
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Discover our comprehensive range of advanced skin and hair treatments designed to address 
              all your dermatological needs with precision, safety, and outstanding results.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-6 inline-block">
              <p className="text-gray-900 font-semibold">
                All treatments are performed by Dr. Manu Kataria using state-of-the-art equipment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Sections */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {treatmentCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.treatments.map((treatment, index) => (
                  <ServiceCard key={index} {...treatment} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Treatment Journey?
            </h2>
            <p className="text-amber-100 text-lg mb-8 leading-relaxed">
              Dr. Manu Kataria will assess your unique needs and recommend the most effective 
              treatment plan tailored specifically for you. Book your consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-amber-900 hover:bg-amber-50 px-8 py-4 rounded-lg font-semibold text-center transition-colors duration-200 shadow-lg"
              >
                Book Consultation
              </a>
              <a
                href="tel:+919893014535"
                className="border-2 border-white text-white hover:bg-white hover:text-amber-900 px-8 py-4 rounded-lg font-semibold text-center transition-colors duration-200"
              >
                Call Now: +91-9893014535
              </a>
            </div>
            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-amber-100 mb-3">Treatment Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-medium text-amber-200">Step 1:</span>
                  <p>Detailed consultation and skin/hair analysis</p>
                </div>
                <div>
                  <span className="font-medium text-amber-200">Step 2:</span>
                  <p>Customized treatment plan creation</p>
                </div>
                <div>
                  <span className="font-medium text-amber-200">Step 3:</span>
                  <p>Professional treatment with follow-up care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}