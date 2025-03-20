export default function Projects() {
  const projects = [
    {
      image: "https://i.pinimg.com/474x/d6/f4/eb/d6f4eb49b4ee6f138ed3a8e46348d0ca.jpg",
      title: "Medicalis App & Website",
      description: "Medicalis is here to serve your health needs. Patients will have the convenience of consulting their specialist online. Here users can make an appointment with their doctor to consult."
    },
    {
      image: "https://i.pinimg.com/474x/a3/87/a4/a387a4da8c00df74b3a1a379d3a29451.jpg",
      title: "Tesla Car Dashboard",
      description: "You have an assistant who can accompany you throughout your journey and make it easy to manage your tesla car system with the features and performance that are here."
    },
    {
      image: "https://i.pinimg.com/736x/9a/6f/62/9a6f620a83abeb0a94fbd2d25277cf44.jpg",
      title: "Musikku App",
      description: "Music apps have changed the way we listen to, discover and enjoy music. With the various music apps available, users can access millions of songs from different genres and artists."
    },
    {
      image: "https://i.pinimg.com/736x/e7/7b/b8/e77bb8f17024e9ec7beaa2ec8b765897.jpg",
      title: "Workoutz App",
      description: "With the innovative features provided, sports apps allow users to track physical activity, set fitness goals, and get motivated to live a healthy life."
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <span className="text-sm bg-gray-100 px-4 py-2 rounded-full">PROJECTS</span>
        <div className="mt-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Creative Digital Projects</h2>
          <p className="text-gray-600 mb-12">
            Every project we work on is an opportunity to demonstrate our dedication to creating creative solutions 
            that have a positive impact and meet our clients' business needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full rounded-xl mb-6"
              />
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <button className="text-primary flex items-center">
                Learn More 
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