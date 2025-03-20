export default function About() {
  return (
    <section className="py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <span className="text-sm bg-gray-100 px-4 py-2 rounded-full">ABOUT US</span>
        <div className="mt-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why You Should Choose <span className="text-primary">DevNXT</span>
            </h2>
            <p className="text-gray-600 mb-8">
              We proudly introduce ourselves as a digital creative agency committed to realizing our clients' vision and mission 
              through creative, innovative, and technology-based solutions in the digital world.
            </p>
            <button className="text-primary flex items-center">
              Learn More 
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://i.pinimg.com/736x/80/04/c3/8004c35423110e8d287b9c74f4836e18.jpg" 
              alt="Team meeting" 
              className="rounded-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex -space-x-4">
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pinimg.com/736x/e6/21/9b/e6219b93a72b6376e381a454cf366df9.jpg" alt="User" />
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pinimg.com/474x/96/ba/50/96ba5024f1f71ea2cbb49781e16334f5.jpg" alt="User" />
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pinimg.com/474x/2a/9b/f6/2a9bf68eaa302e93d6364af6b1c03fa2.jpg" alt="User" />
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pinimg.com/736x/93/1f/7c/931f7ccac0edc17c4967ca8e964d22f7.jpg" alt="User" />
                </div>
                <span className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">+</span>
              </div>
              <div className="text-2xl font-bold">530+</div>
              <div className="text-gray-600">Trusted by our clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}