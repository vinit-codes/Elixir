import { useState } from 'react';
import Image from 'next/image';

const GalleryGrid = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const defaultImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=500',
      alt: 'Acne treatment before and after results',
      category: 'Acne Treatment',
      type: 'before-after'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/7755263/pexels-photo-7755263.jpeg?auto=compress&cs=tinysrgb&w=500',
      alt: 'Hair transplant results showing natural hairline',
      category: 'Hair Transplant',
      type: 'before-after'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=500',
      alt: 'Pigmentation treatment results',
      category: 'Pigmentation',
      type: 'before-after'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=500',
      alt: 'Modern clinic interior with advanced equipment',
      category: 'Clinic',
      type: 'facility'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/4386328/pexels-photo-4386328.jpeg?auto=compress&cs=tinysrgb&w=500',
      alt: 'Treatment room with laser equipment',
      category: 'Clinic',
      type: 'facility'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=500',
      alt: 'Consultation room setup',
      category: 'Clinic',
      type: 'facility'
    }
  ];

  const galleryImages = images || defaultImages;

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="group cursor-pointer"
            onClick={() => openModal(image)}
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-semibold">{image.category}</p>
                <p className="text-gray-200 text-sm">{image.type === 'before-after' ? 'Before & After' : 'Clinic Facility'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Close modal"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-white text-xl font-semibold">{selectedImage.category}</h3>
              <p className="text-gray-200">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;