import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const partners = [
  {
    name: "3ASRACING",
    logo: "../../public/images/3AS.jpg",
    description: "Revendeurs d'équipements & pièces détachées"
  },
  {
    name: "FXMOTORS",
    logo: "../../public/images/FX.png",
    description: "Revendeurs d'équipements & pièces détachées"
  },
  {
    name: "MXSEAT",
    logo: "../../public/images/MXSEAT.jpg",
    description: "Housse de selles personnalisés"
  },
  {
    name: "FoxRacing",
    logo: "../../public/images/FOX.jpg",
    description: "Fournisseur exclusif d'équipements"
  }
];

export function PartnersSection() {
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Partners</h2>
        <div className="relative px-12">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors swiper-button-prev">
            <ChevronLeft size={24} />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors swiper-button-next">
            <ChevronRight size={24} />
          </button>
          
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="partner-slider"
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.name}>
                <div className="bg-gray-50 p-8 rounded-xl text-center h-full flex flex-col items-center justify-center transition-transform hover:scale-105">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="w-32 h-32 object-contain mb-6"
                  />
                  <h3 className="text-xl font-bold mb-3">{partner.name}</h3>
                  <p className="text-gray-600">{partner.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}