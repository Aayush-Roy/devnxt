export default function Contact() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Tech Stack Logos */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16">
          {[
            { src: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-128.png", alt: "JavaScript" },
            { src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png", alt: "React" },
            { src: "https://cdn1.iconfinder.com/data/icons/akar-vol-1/24/nextjs-fill-128.png", alt: "Next.js" },
            { src: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png", alt: "Python" },
            { src: "https://cdn.worldvectorlogo.com/logos/c.svg", alt: "C", className: "h-8 opacity-50" },
            { src: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg", alt: "MongoDB" },
            { src: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png", alt: "Java" }
          ].map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} className={`h-10 sm:h-12 ${logo.className || ""}`} />
          ))}
        </div>

        {/* Contact Section */}
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/72/fd/55/72fd552a8f13f5ee9ce85c9ca638fd5f.jpg"
            alt="Contact us"
            className="w-full h-[250px] sm:h-[350px] lg:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4 sm:px-6">
            <span className="text-xs sm:text-sm text-white bg-white bg-opacity-20 px-4 py-2 rounded-full mb-4 sm:mb-6">
              STAY IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              Ready To Talk
            </h2>
            <p className="text-white text-sm sm:text-base mb-6 sm:mb-8 max-w-lg sm:max-w-2xl">
              Feel free to contact us anytime. We are happy to assist you and discuss potential collaborations.
            </p>
            <button className="bg-primary text-white px-6 sm:px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors text-sm sm:text-base">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
