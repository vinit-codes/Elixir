import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ title, description, image, href, icon }) => {
  return (
    <Link href={href} className="group">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
        <div className="relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={400}
            height={250}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          {icon && (
            <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
              {icon}
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center text-amber-600 font-medium group-hover:text-amber-700">
            Learn More
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;