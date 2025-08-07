import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';

// Treatment data
const treatmentsData = {
  'hair-transplant-indore': {
    title: 'Hair Transplant in Indore | FUE Hair Restoration',
    description: 'Advanced FUE hair transplant in Indore by Dr. Manu Kataria. Natural-looking results with minimal downtime. Book consultation today.',
    keywords: 'hair transplant indore, FUE hair transplant indore, hair restoration indore, baldness treatment indore, Dr. Manu Kataria hair transplant',
    content: {
      title: 'Hair Transplant (FUE) in Indore',
      subtitle: 'Advanced Follicular Unit Extraction for Natural Hair Restoration',
      image: 'https://images.pexels.com/photos/7755263/pexels-photo-7755263.jpeg?auto=compress&cs=tinysrgb&w=800',
      overview: 'Hair transplant using FUE (Follicular Unit Extraction) technique is the most advanced method for hair restoration. Dr. Manu Kataria specializes in this minimally invasive procedure that provides natural-looking results with minimal scarring and faster recovery.',
      benefits: [
        'Natural-looking hairline design',
        'Minimal scarring and downtime',
        'Permanent hair restoration solution',
        'No linear scar like traditional methods',
        'Quick recovery time',
        'High success rate with experienced surgeon'
      ],
      procedure: [
        'Initial consultation and hair analysis',
        'Donor area preparation and local anesthesia',
        'Individual follicle extraction using micro punches',
        'Recipient site preparation and design',
        'Precise implantation of hair follicles',
        'Post-procedure care instructions'
      ],
      faqs: [
        {
          question: 'How long does the hair transplant procedure take?',
          answer: 'The FUE hair transplant procedure typically takes 6-8 hours depending on the number of grafts required. It is performed as a day procedure.'
        },
        {
          question: 'When will I see the final results?',
          answer: 'Initial growth starts at 3-4 months, with significant improvement visible at 6 months. Final results are typically seen at 12-15 months post-procedure.'
        },
        {
          question: 'Is the procedure painful?',
          answer: 'The procedure is performed under local anesthesia, so you will not feel pain during the surgery. Some mild discomfort may occur post-procedure, which is manageable with prescribed medications.'
        },
        {
          question: 'What is the success rate of hair transplant?',
          answer: 'With Dr. Kataria\'s expertise and advanced FUE technique, the success rate is over 95%. The transplanted hair is permanent and will grow naturally.'
        }
      ]
    }
  },
  'acne-treatment-indore': {
    title: 'Acne Treatment in Indore | Clear Skin Solutions',
    description: 'Effective acne treatment in Indore by Dr. Manu Kataria. Advanced therapies for all types of acne. Get clear, healthy skin. Book consultation.',
    keywords: 'acne treatment indore, pimple treatment indore, acne scar treatment indore, clear skin treatment, dermatologist acne indore',
    content: {
      title: 'Acne Treatment in Indore',
      subtitle: 'Comprehensive Solutions for Clear, Healthy Skin',
      image: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=800',
      overview: 'Acne is one of the most common skin conditions affecting people of all ages. Dr. Manu Kataria provides comprehensive acne treatment using advanced therapies tailored to your specific skin type and acne severity.',
      benefits: [
        'Customized treatment plans for all acne types',
        'Advanced therapies including laser and chemical peels',
        'Reduction in active acne and prevention of new breakouts',
        'Improvement in skin texture and tone',
        'Minimal side effects with professional care',
        'Long-term skin health maintenance'
      ],
      procedure: [
        'Detailed skin analysis and acne assessment',
        'Customized treatment plan development',
        'Topical and/or oral medication prescription',
        'Advanced procedures like chemical peels or laser therapy',
        'Regular follow-up and treatment adjustments',
        'Skincare routine guidance and maintenance'
      ],
      faqs: [
        {
          question: 'How long does it take to see results from acne treatment?',
          answer: 'Most patients start seeing improvement within 4-6 weeks of starting treatment. Significant results are typically visible within 3-4 months.'
        },
        {
          question: 'Are there any side effects of acne treatment?',
          answer: 'With professional treatment, side effects are minimal and temporary. Some patients may experience mild dryness or redness initially, which subsides as the skin adjusts.'
        },
        {
          question: 'Can acne scars be treated along with active acne?',
          answer: 'Yes, Dr. Kataria provides comprehensive treatment that addresses both active acne and existing scars using advanced techniques like laser therapy and chemical peels.'
        },
        {
          question: 'Is the treatment suitable for all skin types?',
          answer: 'Yes, treatment plans are customized based on your skin type, acne severity, and individual needs to ensure safe and effective results.'
        }
      ]
    }
  },
  'psoriasis-treatment-indore': {
    title: 'Psoriasis Treatment in Indore | Expert Skin Care',
    description: 'Comprehensive psoriasis treatment in Indore by Dr. Manu Kataria. Advanced therapies for psoriasis management. Book consultation today.',
    keywords: 'psoriasis treatment indore, psoriasis doctor indore, skin disease treatment indore, autoimmune skin condition treatment',
    content: {
      title: 'Psoriasis Treatment in Indore',
      subtitle: 'Expert Management of Autoimmune Skin Conditions',
      image: 'https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=800',
      overview: 'Psoriasis is a chronic autoimmune skin condition that requires expert management. Dr. Manu Kataria provides comprehensive psoriasis treatment using the latest therapies to control symptoms and improve quality of life.',
      benefits: [
        'Significant reduction in psoriasis plaques',
        'Relief from itching and discomfort',
        'Prevention of flare-ups with proper management',
        'Improved skin appearance and texture',
        'Enhanced quality of life and confidence',
        'Long-term disease management strategies'
      ],
      procedure: [
        'Comprehensive psoriasis assessment and staging',
        'Personalized treatment plan development',
        'Topical therapies and systemic medications',
        'Phototherapy and advanced light treatments',
        'Lifestyle and dietary guidance',
        'Regular monitoring and treatment adjustments'
      ],
      faqs: [
        {
          question: 'Can psoriasis be completely cured?',
          answer: 'While psoriasis cannot be completely cured, it can be effectively managed with proper treatment. Many patients achieve long periods of clear skin with appropriate therapy.'
        },
        {
          question: 'How long does psoriasis treatment take to show results?',
          answer: 'Most patients see improvement within 4-8 weeks of starting treatment. Significant clearing typically occurs within 3-6 months with consistent therapy.'
        },
        {
          question: 'Are there any lifestyle changes needed for psoriasis management?',
          answer: 'Yes, lifestyle modifications including stress management, proper diet, avoiding triggers, and maintaining skin hydration can significantly help in psoriasis management.'
        },
        {
          question: 'Is psoriasis treatment safe for long-term use?',
          answer: 'Dr. Kataria carefully monitors all treatments to ensure safety. Modern psoriasis therapies are designed for long-term use with regular monitoring to prevent side effects.'
        }
      ]
    }
  },
  'hair-loss-treatment-indore': {
    title: 'Hair Loss Treatment in Indore | Stop Hair Fall',
    description: 'Effective hair loss treatment in Indore by Dr. Manu Kataria. Advanced solutions for hair fall, thinning hair, and baldness. Book consultation.',
    keywords: 'hair loss treatment indore, hair fall treatment indore, baldness treatment indore, thinning hair treatment, hair regrowth treatment indore',
    content: {
      title: 'Hair Loss Treatment in Indore',
      subtitle: 'Comprehensive Solutions for Hair Fall and Thinning Hair',
      image: 'https://images.pexels.com/photos/7755263/pexels-photo-7755263.jpeg?auto=compress&cs=tinysrgb&w=800',
      overview: 'Hair loss affects both men and women and can significantly impact self-confidence. Dr. Manu Kataria offers comprehensive evaluation and treatment options for various types of hair loss, from genetic pattern baldness to stress-induced hair fall.',
      benefits: [
        'Significant reduction in hair fall',
        'Stimulation of new hair growth',
        'Improved hair density and thickness',
        'Prevention of further hair loss',
        'Boosted confidence and self-esteem',
        'Customized treatment for different hair loss types'
      ],
      procedure: [
        'Comprehensive hair and scalp analysis',
        'Identification of hair loss causes',
        'Customized treatment plan development',
        'Medical therapy and topical treatments',
        'Advanced procedures like PRP therapy',
        'Regular monitoring and treatment adjustments'
      ],
      faqs: [
        {
          question: 'What causes hair loss in men and women?',
          answer: 'Hair loss can be caused by genetics, hormonal changes, stress, nutritional deficiencies, medical conditions, or certain medications. Dr. Kataria will identify the specific cause during consultation.'
        },
        {
          question: 'How soon can I expect to see results from hair loss treatment?',
          answer: 'Most patients notice reduced hair fall within 6-8 weeks. New hair growth typically becomes visible after 3-4 months of consistent treatment.'
        },
        {
          question: 'Are hair loss treatments safe?',
          answer: 'Yes, when performed by an experienced dermatologist like Dr. Kataria, hair loss treatments are safe with minimal side effects. All treatments are FDA-approved and clinically proven.'
        },
        {
          question: 'Can hair loss be completely stopped?',
          answer: 'With early intervention and proper treatment, hair loss can be significantly slowed or stopped in most cases. The success depends on the type and stage of hair loss.'
        }
      ]
    }
  },
  'pigmentation-treatment-indore': {
    title: 'Pigmentation Treatment in Indore | Dark Spot Removal',
    description: 'Advanced pigmentation treatment in Indore by Dr. Manu Kataria. Effective solutions for dark spots, melasma, and uneven skin tone.',
    keywords: 'pigmentation treatment indore, dark spots treatment indore, melasma treatment indore, skin whitening treatment indore, uneven skin tone treatment',
    content: {
      title: 'Pigmentation Treatment in Indore',
      subtitle: 'Advanced Solutions for Dark Spots and Uneven Skin Tone',
      image: 'https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=800',
      overview: 'Hyperpigmentation is a common skin concern that can affect people of all skin types. Dr. Manu Kataria specializes in diagnosing and treating various forms of pigmentation disorders using the latest technology and proven treatment methods.',
      benefits: [
        'Significant reduction in dark spots and patches',
        'Even skin tone and improved complexion',
        'Reduced appearance of melasma and age spots',
        'Enhanced skin radiance and glow',
        'Boosted confidence with clearer skin',
        'Prevention of future pigmentation issues'
      ],
      procedure: [
        'Detailed skin analysis and pigmentation assessment',
        'Identification of pigmentation type and causes',
        'Customized treatment plan development',
        'Advanced laser therapy or chemical peels',
        'Topical lightening agents and sun protection',
        'Regular follow-up and maintenance treatments'
      ],
      faqs: [
        {
          question: 'What causes skin pigmentation?',
          answer: 'Pigmentation can be caused by sun exposure, hormonal changes, aging, acne scars, or genetic factors. Dr. Kataria will identify the specific cause during your consultation.'
        },
        {
          question: 'How long does pigmentation treatment take to show results?',
          answer: 'Most patients see improvement within 4-6 weeks of starting treatment. Significant results are typically visible within 3-6 months depending on the severity.'
        },
        {
          question: 'Are pigmentation treatments safe for all skin types?',
          answer: 'Yes, Dr. Kataria customizes treatments based on your skin type and pigmentation severity to ensure safe and effective results for all skin types.'
        },
        {
          question: 'Can pigmentation return after treatment?',
          answer: 'With proper sun protection and maintenance care, treated pigmentation typically does not return. Dr. Kataria provides comprehensive aftercare guidance to prevent recurrence.'
        }
      ]
    }
  },
  'anti-aging-treatment-indore': {
    title: 'Anti-Aging Treatment in Indore | Skin Rejuvenation',
    description: 'Advanced anti-aging treatments in Indore by Dr. Manu Kataria. Reduce wrinkles, fine lines, and restore youthful skin. Book consultation.',
    keywords: 'anti aging treatment indore, wrinkle treatment indore, skin rejuvenation indore, botox indore, dermal fillers indore, face lift indore',
    content: {
      title: 'Anti-Aging Treatment in Indore',
      subtitle: 'Advanced Skin Rejuvenation for Youthful Appearance',
      image: 'https://images.pexels.com/photos/3845456/pexels-photo-3845456.jpeg?auto=compress&cs=tinysrgb&w=800',
      overview: 'Aging is a natural process, but with advanced dermatological treatments, we can significantly slow down and reverse many signs of aging. Dr. Manu Kataria offers comprehensive anti-aging programs designed to restore youthful vitality to your skin.',
      benefits: [
        'Significant reduction in wrinkles and fine lines',
        'Improved skin firmness and elasticity',
        'Enhanced skin texture and radiance',
        'Restored facial volume and contours',
        'Boosted confidence with youthful appearance',
        'Long-lasting natural-looking results'
      ],
      procedure: [
        'Comprehensive skin aging assessment',
        'Personalized anti-aging treatment plan',
        'Advanced procedures like Botox or dermal fillers',
        'Laser treatments for skin resurfacing',
        'Medical-grade skincare regimen',
        'Regular maintenance and follow-up treatments'
      ],
      faqs: [
        {
          question: 'At what age should I start anti-aging treatments?',
          answer: 'Prevention is key. Many people start with preventive treatments in their late 20s or early 30s. However, it\'s never too late to start, and treatments can be effective at any age.'
        },
        {
          question: 'Are anti-aging treatments safe?',
          answer: 'Yes, when performed by an experienced dermatologist like Dr. Kataria, anti-aging treatments are safe with minimal side effects. All procedures use FDA-approved products and techniques.'
        },
        {
          question: 'How long do anti-aging treatment results last?',
          answer: 'Results vary by treatment type. Botox typically lasts 3-6 months, dermal fillers 6-18 months, and laser treatments can provide long-lasting improvements with proper maintenance.'
        },
        {
          question: 'Will I look natural after anti-aging treatments?',
          answer: 'Dr. Kataria focuses on natural-looking results that enhance your features rather than changing them dramatically. The goal is to look like a refreshed, younger version of yourself.'
        }
      ]
    }
  }
};

export default function TreatmentDetail() {
  const router = useRouter();
  const { slug } = router.query;
  
  if (!slug || !treatmentsData[slug]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Treatment Not Found</h1>
          <Link href="/treatments" className="text-amber-600 hover:text-amber-700">
            ← Back to Treatments
          </Link>
        </div>
      </div>
    );
  }

  const treatment = treatmentsData[slug];
  const content = treatment.content;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: content.title,
    description: content.overview,
    performer: {
      '@type': 'Physician',
      name: 'Dr. Manu Kataria',
      medicalSpecialty: 'Dermatology'
    },
    location: {
      '@type': 'MedicalClinic',
      name: 'Elixir Skin & Hair Clinic',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Mangalam Pearl Building, 202 (2nd Floor), 633-B, New Palasia',
        addressLocality: 'Indore',
        addressRegion: 'Madhya Pradesh',
        postalCode: '452002',
        addressCountry: 'IN'
      }
    }
  };

  return (
    <>
      <SEOHead
        title={treatment.title}
        description={treatment.description}
        keywords={treatment.keywords}
        canonical={`https://elixirskinhair.com/treatments/${slug}`}
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/treatments"
              className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Treatments
            </Link>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              {content.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {content.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Overview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Image
                src={content.image}
                alt={content.title}
                width={600}
                height={400}
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                About This Treatment
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {content.overview}
              </p>
              <div className="bg-amber-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold text-gray-900">Treatment by Expert</span>
                </div>
                <p className="text-gray-700">
                  All treatments are performed by Dr. Manu Kataria (MBBS, MD DVL, Gold Medalist) 
                  with 15+ years of experience in dermatology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Procedure */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Treatment Benefits</h3>
              <div className="space-y-4">
                {content.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 ml-3">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Procedure */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Treatment Process</h3>
              <div className="space-y-4">
                {content.procedure.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-semibold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 ml-3">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            {content.faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Ready to Start Your Treatment?
            </h3>
            <p className="text-amber-100 text-lg mb-8">
              Schedule a consultation with Dr. Manu Kataria to discuss your concerns and 
              create a personalized treatment plan that delivers real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-amber-900 hover:bg-amber-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
              >
                Book Consultation
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

export async function getStaticPaths() {
  const paths = Object.keys(treatmentsData).map((slug) => ({
    params: { slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug
    }
  };
}