export const siteConfig = {
  name: 'Elixir Skin and Hair Clinic',
  description: 'Leading dermatology and hair clinic in Indore with Dr. Manu Kataria. Expert treatment for skin conditions, hair loss, psoriasis, acne, and cosmetic procedures.',
  url: 'https://elixirskinhair.com',
  ogImage: '/images/og-image.jpg',
  doctor: {
    name: 'Dr. Manu Kataria',
    credentials: 'MBBS, MD DVL, Gold Medalist',
    specialization: 'Dermatologist & Hair Transplant Surgeon'
  },
  contact: {
    phones: ['+91-9893014535', '+91-9893788187', '+91-6265676769'],
    address: 'Mangalam Pearl Building, 202 (2nd Floor), 633-B, New Palasia, Indore, MP 452002',
    city: 'Indore',
    state: 'Madhya Pradesh',
    pincode: '452002'
  }
};

export const generateSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  noindex = false
}) => ({
  title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
  description: description || siteConfig.description,
  keywords: keywords || 'dermatologist indore, skin specialist indore, hair transplant indore, psoriasis treatment, acne treatment',
  canonical: canonical || siteConfig.url,
  ogImage: ogImage || siteConfig.ogImage,
  noindex
});

export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phones,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mangalam Pearl Building, 202 (2nd Floor), 633-B, New Palasia',
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.state,
      postalCode: siteConfig.contact.pincode,
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '22.7196',
      longitude: '75.8577'
    },
    openingHours: 'Mo-Sa 10:00-19:00',
    priceRange: '₹₹',
    medicalSpecialty: ['Dermatology', 'Hair Transplantation', 'Cosmetic Dermatology']
  },
  doctor: {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: siteConfig.doctor.name,
    jobTitle: siteConfig.doctor.specialization,
    worksFor: {
      '@type': 'MedicalClinic',
      name: siteConfig.name
    },
    medicalSpecialty: ['Dermatology', 'Hair Transplantation'],
    alumniOf: 'Medical College',
    award: 'Gold Medalist'
  }
};