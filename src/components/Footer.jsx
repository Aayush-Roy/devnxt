import { FiLinkedin, FiYoutube, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img src="/logo-white.svg" alt="Skyline" className="h-8" />
              <span className="ml-2 text-xl font-semibold">DevNXT</span>
            </div>
            <p className="text-gray-400">
              We are committed to continue to grow and develop as a leading digital creative agency.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-6">Pages</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-6">Utility Pages</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white">Style Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Changelog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Licenses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Instructions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-6">Office</h3>
            <p className="text-gray-400 mb-4">
              123 Willow Street, Rivertown,<br />
              Greenfield County, Oakville, USA
            </p>
            <a href="mailto:skyline@gmail.com" className="text-gray-400 hover:text-white">
              skyline@gmail.com
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <p className="text-gray-400 mb-4 md:mb-0">© 2023 Skyline, All right reserved</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FiYoutube className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FiTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}