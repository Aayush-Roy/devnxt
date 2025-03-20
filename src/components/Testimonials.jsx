import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Arabella Sinclair",
      role: "Product designer at Softnation",
      image: "https://i.pinimg.com/736x/13/2b/d2/132bd2cac2bd085edbe74735d7ef71e1.jpg",
      rating: 5,
      comment: "We are very impressed with this creative agency! Working with this creative agency is not only fun, but also yields great results. Thank you for your dedication and professionalism!",
      date: "10.25 • Jun 23, 2020"
    },
    {
      name: "Nathaniel Jameson",
      role: "CEO at GrowUp",
      image: "https://i.pinimg.com/736x/47/81/ad/4781ad4bb7d6387f13d67ba2eb366e0d.jpg",
      rating: 4,
      comment: "Great! We saw a significant increase in the number of visitors to our website and conversion rates. We highly recommend to anyone looking for innovative and effective digital solutions",
      date: "09.50 • Aug 20, 2021"
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <span className="text-sm bg-gray-100 px-4 py-2 rounded-full">TESTIMONIALS</span>
        <h2 className="text-3xl lg:text-4xl font-bold mt-8 mb-4">Hear From Our Clients</h2>
        <p className="text-gray-600 mb-12">
          This testimonial is a motivation for us to continue to improve quality and provide better 
          satisfaction to every customer who entrusts us.
        </p>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            768: {
              slidesPerView: 2
            }
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.comment}"</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">{testimonial.date}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}