// src/components/TestimonialsSection.tsx
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Import modules for functionality
import { testimonialData } from '@/data/testimonials';

// Import Swiper styles (Crucial!)
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialsSection: React.FC = () => {
  return (
    <section 
      id="testimonials" 
      className="py-24 px-4 md:px-24 bg-dark-background text-light-foreground min-h-[60vh]"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-light-foreground text-center">
          <span className="text-teal-400 font-mono text-4xl mr-2">04.</span> Client Endorsements
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }} // Auto-play every 5 seconds
          pagination={{ clickable: true }}
          className="h-full pb-16" // Added padding-bottom for pagination dots
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="text-center p-6 sm:p-8 bg-teal-400/10 border border-teal-400/30 rounded-lg shadow-xl hover:shadow-teal-400/10 transition-shadow duration-300">
                
                {/* Quote Icon */}
                <span className="text-teal-400 text-6xl block mb-4 opacity-50 font-serif">“</span>

                {/* Quote Content */}
                <blockquote className="text-lg italic text-light-foreground mb-6 max-w-2xl mx-auto">
                  "{testimonial.quote}"
                </blockquote>

                {/* Client Info */}
                <p className="font-bold text-teal-400 text-lg">{testimonial.clientName}</p>
                <p className="text-sm text-gray-400 font-mono">{testimonial.clientTitle}</p>
                <p className="text-xs mt-2 text-gray-500">
                  Project: <span className="text-gray-400">{testimonial.project}</span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;