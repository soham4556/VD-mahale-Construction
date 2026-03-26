import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import SectionHeader from '../common/SectionHeader';
import { testimonialsData } from '../../data/testimonialsData';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials-section bg-light">
      <div className="container">
        <SectionHeader 
          label="Testimonials"
          title="What Our Clients Say"
          subtitle="Our reputation is built on trust, quality, and consistent delivery of complex infrastructure projects."
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 }
          }}
          className="testimonials-swiper"
        >
          {testimonialsData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-card-v2">
                <FaQuoteLeft className="quote-icon" />
                <div className="star-rating">
                  {[...Array(item.rating)].map((_, i) => <FaStar key={i} />)}
                </div>
                <p className="testi-text">"{item.quote}"</p>
                <div className="testi-author">
                  <div className="author-img">
                    {item.author.charAt(0)}
                  </div>
                  <div className="author-info">
                    <h4>{item.author}</h4>
                    <span>{item.role}, {item.org}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
