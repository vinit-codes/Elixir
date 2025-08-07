import { useState, useEffect } from 'react';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Indore',
      text: 'Dr. Kataria completely transformed my skin. The acne treatment was gentle yet highly effective. I finally have clear, confident skin!',
      rating: 5,
      treatment: 'Acne Treatment'
    },
    {
      name: 'Rahul Patel',
      location: 'Indore',
      text: 'Amazing results for my hair transplant. Dr. Kataria\'s expertise and the clinic\'s advanced technology gave me natural-looking hair.',
      rating: 5,
      treatment: 'Hair Transplant'
    },
    {
      name: 'Sneha Gupta',
      location: 'Indore',
      text: 'Professional staff and excellent treatment for my pigmentation issues. The results exceeded my expectations. Highly recommended!',
      rating: 5,
      treatment: 'Pigmentation Treatment'
    },
    {
      name: 'Amit Kumar',
      location: 'Indore',
      text: 'Dr. Kataria\'s psoriasis treatment changed my life. The personalized care and effective treatment plan made all the difference.',
      rating: 5,
      treatment: 'Psoriasis Treatment'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real stories from real patients who trusted us with their skin and hair concerns.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl lg:text-2xl text-gray-700 italic mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Patient Info */}
              <div className="space-y-2">
                <p className="font-semibold text-gray-900 text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentIndex].location} • {testimonials[currentIndex].treatment}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-amber-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => goToSlide(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => goToSlide(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;