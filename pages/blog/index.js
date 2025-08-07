import Link from 'next/link';
import Image from 'next/image';
import SEOHead from '../../components/SEOHead';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Treat Hair Loss in Indore: Complete Guide 2025',
      excerpt: 'Comprehensive guide to understanding and treating hair loss with modern techniques available in Indore. Learn about causes, treatments, and prevention.',
      image: 'https://images.pexels.com/photos/7755263/pexels-photo-7755263.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: 'how-to-treat-hair-loss-indore-complete-guide',
      category: 'Hair Care',
      readTime: '8 min read',
      publishDate: 'January 25, 2025'
    },
    {
      id: 2,
      title: 'Best Acne Treatment Options in Indore: Expert Advice',
      excerpt: 'Dr. Manu Kataria shares expert insights on the most effective acne treatments available in Indore, from topical solutions to advanced laser therapy.',
      image: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: 'best-acne-treatment-options-indore-expert-advice',
      category: 'Skin Care',
      readTime: '6 min read',
      publishDate: 'January 20, 2025'
    },
    {
      id: 3,
      title: 'Understanding Psoriasis: Symptoms, Causes, and Treatment',
      excerpt: 'Everything you need to know about psoriasis - from recognizing early symptoms to understanding the latest treatment options available.',
      image: 'https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: 'understanding-psoriasis-symptoms-causes-treatment',
      category: 'Medical Dermatology',
      readTime: '10 min read',
      publishDate: 'January 15, 2025'
    },
    {
      id: 4,
      title: 'Hair Transplant in Indore: FUE vs FUT - Which is Better?',
      excerpt: 'Detailed comparison of FUE and FUT hair transplant techniques, helping you make an informed decision for your hair restoration journey.',
      image: 'https://images.pexels.com/photos/7755263/pexels-photo-7755263.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: 'hair-transplant-indore-fue-vs-fut-comparison',
      category: 'Hair Transplant',
      readTime: '7 min read',
      publishDate: 'January 10, 2025'
    },
    {
      id: 5,
      title: 'Pigmentation Treatment: Say Goodbye to Dark Spots',
      excerpt: 'Learn about different types of pigmentation and the most effective treatments to achieve clear, even-toned skin.',
      image: 'https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: 'pigmentation-treatment-goodbye-dark-spots',
      category: 'Skin Care',
      readTime: '5 min read',
      publishDate: 'January 5, 2025'
    },
    {
      id: 6,
      title: 'Anti-Aging Skincare Routine: Expert Tips for Youthful Skin',
      excerpt: 'Dr. Kataria shares professional tips for maintaining youthful skin and preventing premature aging with the right skincare routine.',
      image: 'https://images.pexels.com/photos/3845456/pexels-photo-3845456.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: 'anti-aging-skincare-routine-expert-tips',
      category: 'Anti-Aging',
      readTime: '9 min read',
      publishDate: 'December 30, 2024'
    }
  ];

  const categories = ['All', 'Hair Care', 'Skin Care', 'Medical Dermatology', 'Hair Transplant', 'Anti-Aging'];

  return (
    <>
      <SEOHead
        title="Dermatology Blog | Skin & Hair Care Tips | Elixir Skin & Hair Clinic"
        description="Expert dermatology blog by Dr. Manu Kataria. Get professional tips on skin care, hair care, treatment guides, and health advice from Indore's leading dermatologist."
        keywords="dermatology blog, skin care tips, hair care tips, acne treatment guide, hair loss treatment, psoriasis information, Dr. Manu Kataria blog"
        canonical="https://elixirskinhair.com/blog"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Dermatology & Hair Care Blog
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Expert insights, treatment guides, and health tips from Dr. Manu Kataria. 
              Stay informed about the latest in skin and hair care with professional advice.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-6 inline-block">
              <p className="text-gray-900 font-semibold">
                Written by Dr. Manu Kataria (MBBS, MD DVL, Gold Medalist)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Article
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Link href={`/blog/${blogPosts[0].slug}`} className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    width={800}
                    height={400}
                    className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {blogPosts[0].category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>{blogPosts[0].publishDate}</span>
                    <span className="mx-2">•</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Stay updated with the latest insights and tips from our dermatology experts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{post.publishDate}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Stay Updated with Health Tips
            </h2>
            <p className="text-amber-100 text-lg mb-8 leading-relaxed">
              Subscribe to get the latest dermatology insights, treatment updates, and 
              health tips directly from Dr. Manu Kataria.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
                <button className="bg-white text-amber-900 hover:bg-amber-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Subscribe
                </button>
              </div>
              <p className="text-amber-200 text-sm mt-4">
                No spam, unsubscribe anytime. Your privacy is important to us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}