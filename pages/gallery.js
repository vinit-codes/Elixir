import SEOHead from '../components/SEOHead';
import GalleryGrid from '../components/GalleryGrid';

export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=500',
      alt: 'Acne treatment before and after results showing clear skin transformation',
      category: 'Acne Treatment',
      type: 'before-after'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/7755263/pexels-photo-7755263.jpeg?auto=compress&cs=tinysrgb&w=500',
      alt: 'Hair transplant results showing natural hairline restoration',
      category: 'Hair Transplant',
      type: 'before-after'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=500',
      alt: 'Pigmentation treatment results showing even skin tone',
      category: 'Pigmentation Treatment',
      type: 'before-after'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/3845456/pexels-photo-3845456.jpeg?auto=compress&cs=tinysrgb&w=500',
      alt: 'Anti-aging treatment results showing reduced wrinkles',
      category: 'Anti-Aging Treatment',
      type: 'before-after'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=500',
      alt: 'Modern clinic reception and waiting area with comfortable seating',
      category: 'Clinic Facility',
      type: 'facility'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/4386328/pexels-photo-4386328.jpeg?auto=compress&cs=tinysrgb&w=500',
      alt: 'Advanced treatment room with laser equipment and modern technology',
      category: 'Treatment Room',
      type: 'facility'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=500',
      alt: 'Private consultation chamber for patient discussions',
      category: 'Consultation Room',
      type: 'facility'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=500',
      alt: 'Dr. Manu Kataria consulting with patient about treatment options',
      category: 'Doctor Consultation',
      type: 'facility'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=500',
      alt: 'Psoriasis treatment before and after showing significant improvement',
      category: 'Psoriasis Treatment',
      type: 'before-after'
    }
  ];

  return (
    <>
      <SEOHead
        title="Gallery | Before & After Results | Elixir Skin & Hair Clinic"
        description="View before and after photos of skin and hair treatments by Dr. Manu Kataria. See real results from acne treatment, hair transplant, pigmentation treatment, and more."
        keywords="before after photos indore, skin treatment results indore, hair transplant results indore, acne treatment results, dermatology gallery indore"
        canonical="https://elixirskinhair.com/gallery"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Treatment Results Gallery
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              See the amazing transformations achieved by our patients through expert care and 
              advanced treatments by Dr. Manu Kataria at Elixir Skin & Hair Clinic.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-6 inline-block">
              <p className="text-gray-900 font-semibold">
                Real patients, real results - All photos are with patient consent
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Before & After Transformations
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Witness the life-changing results achieved through our advanced treatments and 
              Dr. Kataria's expertise in dermatology and hair restoration.
            </p>
          </div>
          
          <GalleryGrid images={galleryImages} />
          
          <div className="text-center mt-12">
            <p className="text-gray-600 italic mb-6">
              Note: Individual results may vary. More patient photos will be added with consent. 
              All treatments are performed by Dr. Manu Kataria using advanced medical equipment.
            </p>
            <div className="bg-amber-50 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy & Consent</h3>
              <p className="text-gray-700 text-sm">
                All before and after photos are shared with explicit patient consent. 
                We respect patient privacy and only showcase results with proper authorization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Categories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Treatment Categories
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore results from our various specialized treatments
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: 'Hair Transplant', count: '50+ Cases' },
              { name: 'Acne Treatment', count: '200+ Cases' },
              { name: 'Pigmentation', count: '150+ Cases' },
              { name: 'Psoriasis', count: '100+ Cases' },
              { name: 'Anti-Aging', count: '80+ Cases' }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-amber-600 text-sm">{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready for Your Transformation?
            </h2>
            <p className="text-amber-100 text-lg mb-8 leading-relaxed">
              Join thousands of satisfied patients who have achieved amazing results with 
              Dr. Manu Kataria's expert care. Your transformation story could be next!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-amber-900 hover:bg-amber-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
              >
                Book Your Consultation
              </a>
              <a
                href="tel:+919893014535"
                className="border-2 border-white text-white hover:bg-white hover:text-amber-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                Call Now: +91-9893014535
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}