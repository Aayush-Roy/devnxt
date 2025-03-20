import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Team() {
  const teamMembers = [
    {
      name: "Manisha",
      role: "UI/UX Designer",
      image: "https://i.pinimg.com/736x/70/a2/36/70a236f90d2803f9da32d0558be75ba1.jpg",
      description: "Expert in creating intuitive and beautiful user interfaces"
    },
    {
      name: "Chanchal Pawar",
      role: "Frontend Developer",
      image: "https://i.pinimg.com/474x/53/ae/1e/53ae1e442fc7102bfb938d72d157a019.jpg",
      description: "Passionate about building responsive and performant web applications"
    },
    {
      name: "Harsh Solanki",
      role: "Product Manager",
      image: "https://i.pinimg.com/736x/fb/c7/c0/fbc7c0f44564099388f9c5ffcc338944.jpg",
      description: "Experienced in leading successful digital products"
    },
    {
      name: "Viklas Rawat",
      role: "Brand Designer",
      image: "https://i.pinimg.com/736x/e2/d4/a1/e2d4a1924b2e3e0044ee09cb5f94e33d.jpg",
      description: "Creative professional with a keen eye for brand identity"
    },
    {
      name: "Aman",
      role: "Brand Designer",
      image: "https://i.pinimg.com/736x/74/23/df/7423df4447911ab587d5a794cfcc6322.jpg",
      description: "Creative professional with a keen eye for brand identity"
    },
    {
      name: "Aayush",
      role: "Software Developer",
      image: "https://i.pinimg.com/736x/45/5f/2a/455f2aa9d347bf41e11b786a3fe33da7.jpg",
      description: "Creative professional with a keen eye for brand identity"
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <span className="text-sm bg-gray-100 px-4 py-2 rounded-full">OUR TEAM</span>
        <h2 className="text-3xl lg:text-4xl font-bold mt-8 mb-4">Meet Our Experts</h2>
        <p className="text-gray-600 mb-12">
          Our team of dedicated professionals brings together diverse skills and expertise to deliver 
          exceptional results for our clients.
        </p>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }}
          className="team-swiper"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
                <div className="flex gap-4 mt-6">
                  <a href="#" className="text-gray-600 hover:text-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}