import { FiMonitor, FiBox, FiCode } from 'react-icons/fi';

export default function Services() {
  const services = [
    {
      icon: <FiMonitor className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "UI/UX in app is key to creating a great user experience. This will increase user loyalty, strengthen brand image, and provide a competitive advantage."
    },
    {
      icon: <FiBox className="w-8 h-8" />,
      title: "Branding",
      description: "Branding can involves strategies and efforts to build a consistent image, identity, and perception associated with a product, service, or company."
    },
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "Developer",
      description: "Developers play an important role in creating technology solutions that make life easier, improve business processes, and drive innovation."
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-20 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <span className="text-sm text-white bg-secondary px-4 py-2 rounded-full">OUR SERVICE</span>
        <div className="mt-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">We Build Best Service Experience</h2>
          <p className="text-gray-400 mb-12">
            We believe that creativity, collaboration and adaptability are the keys to success in this fast-changing digital era.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl ${index === 1 ? 'bg-primary' : 'bg-[#2A2A2A]'}`}
            >
              <div className={`${index === 1 ? 'text-white' : 'text-primary'} mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className={`${index === 1 ? 'text-white' : 'text-gray-400'}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}