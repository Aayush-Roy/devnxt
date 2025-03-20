export default function Blog() {
  const posts = [
    {
      image: "https://i.pinimg.com/736x/63/a7/b1/63a7b1894b3210d07e434e9d12170586.jpg",
      category: "Design",
      title: "5 things you should know in Figma",
      description: "As a ui/ux designer, of course you shouldn't be unaware of these 5 things..."
    },
    {
      image: "https://i.pinimg.com/736x/1f/32/23/1f3223f82012fa2394cf0a4d4e39aa5e.jpg",
      category: "Skill",
      title: "Building Best practice for skill",
      description: "Do you feel like your skills are lacking? Let's find out how to improve your skills..."
    },
    {
      image: "https://i.pinimg.com/736x/58/3e/a7/583ea7d4745614ce2eeab249e5355838.jpg",
      category: "Development",
      title: "Front end developer guide",
      description: "As a beginner, you should know the first steps when becoming a front end developer..."
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-20 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <span className="text-sm text-white bg-[#2A2A2A] px-4 py-2 rounded-full">BLOG</span>
        <div className="mt-8 flex justify-between items-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Latest Insight Updates</h2>
          <button className="text-primary flex items-center">
            All Post
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
        <p className="text-gray-400 mt-4 mb-12">
          Follow our blog for specific topics, be it in science, technology, tips and tricks, etc. We 
          always provide updated news and current trends.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative mb-4">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full rounded-2xl"
                />
                <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400">{post.description}</p>
              <button className="text-primary flex items-center mt-4">
                Learn more
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}