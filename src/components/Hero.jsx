export default function Hero() {
  return (
    <section className="pt-24 lg:pt-32 px-6 lg:px-20 mb-2">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Color Digitally With Imagination Palette
          </h1>
          <p className="text-text-light mb-8">
            We are digital magicians, turning ideas into compelling designs, driving change and creating real impact.
          </p>
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-3xl font-bold text-primary">500+</h3>
              <p className="text-text-light">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary">200+</h3>
              <p className="text-text-light">Project Complete</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary">12yr+</h3>
              <p className="text-text-light">Experience</p>
            </div>
          </div>
          <div className="bg-secondary text-white p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <img src="/logo-white.svg" alt="Skyline" className="h-8 mr-4" />
              <div>
                <p>We are based in</p>
                <p>Delhi NCR, India</p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="mr-4">Let's Talk</p>
              <a href="mailto:skyline@gmail.com" className="text-primary">skyline@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://i.pinimg.com/736x/52/94/74/5294747ec4430a6f848573b9a1028cbd.jpg" 
            alt="Team working" 
            className="rounded-lg w-full"
          />
          <div className="absolute bottom-8 right-8 bg-primary rounded-full p-4">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}