export default function Contact() {
  return (
    <section className="py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center gap-12 mb-20">
          <img src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-128.png" alt="Gopay" className="h-12 " />
          <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png" alt="Tokopedia" className="h-12 " />
          <img src="https://cdn1.iconfinder.com/data/icons/akar-vol-1/24/nextjs-fill-128.png" alt="Google" className="h-12" />
          <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png" alt="Lazada" className="h-12" />
          <img src="https://cdn.worldvectorlogo.com/logos/c.svg" alt="Shopee" className="h-8 opacity-50" />
          <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="Shopee" className="h-12 " />
          <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" alt="Shopee" className="h-12 " />
        </div>

        <div className="relative rounded-3xl overflow-hidden">
          <img 
            src="https://i.pinimg.com/736x/72/fd/55/72fd552a8f13f5ee9ce85c9ca638fd5f.jpg" 
            alt="Contact us" 
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-6">
            <span className="text-sm text-white bg-white bg-opacity-20 px-4 py-2 rounded-full mb-6">
              STAY IN TOUCH
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Ready To Talk</h2>
            <p className="text-white mb-8 max-w-2xl">
              Feel free to contact us right now. We are pleased to announce our readiness to receive contacts 
              from potential clients.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}