import React from 'react';
import { type Rider } from '../types';
import { Trophy, ChevronRight } from 'lucide-react';
import flo from '../../LandingPage_MOTOCROSS/public/images/FD.jpg';
import fab from '../../LandingPage_MOTOCROSS/public/images/FF.jpg';
import rom from '../../LandingPage_MOTOCROSS/public/images/RD.jpg';
import ant from '../../LandingPage_MOTOCROSS/public/images/AC.jpg';
import lud from '../../LandingPage_MOTOCROSS/public/images/LG.jpeg';
import romf from '../../LandingPage_MOTOCROSS/public/images/RF.jpg';

const riders: Rider[] = [
  {
    name: "Florentin Delpouch",
    role: "250 KXF 2023",
    image: flo,
    achievements: "Sur les roues depuis 8 ans",
    number: 973
  },
  {
    name: "Fabien Fabris",
    role: "450 CRF 2024",
    image: fab,
    achievements: "Sur les roues depuis 8 ans",
    number: 731
  },
  {
    name: "Romain Decon",
    role: "250 FC 2021",
    image: rom,
    achievements: "Sur les roues depuis 8 ans",
    number: 815
  },
  {
    name: "Antoine Culot",
    role: "250 SXF 2024",
    image: ant,
    achievements: "Sur les roues depuis 8 ans",
    number: 207
  },
  {
    name: "Ludovic Génot",
    role: "250 CRF 2024",
    image: lud,
    achievements: "Sur les roues depuis 8 ans",
    number: 661
  },
  {
    name: "Romain Fau",
    role: "250 FC 2021",
    image: romf,
    achievements: "Sur les roues depuis 8 ans",
    number: 710
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl font-bold text-center mb-4">Nos pilotes</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
        Rencontrez les champions qui repoussent les limites de l'excellence en motocross chaque jour.
        </p>
      </div>

      {riders.map((rider, index) => (
        <div 
          key={rider.number}
          className={`flex flex-col md:flex-row items-center ${
            index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
          }`}
        >
          <div className={`w-full md:w-1/2 h-[400px] relative ${
            index % 2 === 1 ? 'md:order-2' : ''
          }`}>
            <img 
              src={rider.image} 
              alt={rider.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-gradient-to-r from-gradient-start to-gradient-end text-white font-bold w-16 h-16 rounded-full flex items-center justify-center text-2xl">
              {rider.number}
            </div>
          </div>

          <div className={`w-full md:w-1/2 p-12 ${
            index % 2 === 1 ? 'md:order-1' : ''
          }`}>
            <div className="max-w-xl mx-auto">
              <h3 className="text-3xl font-bold mb-2">{rider.name}</h3>
              <p className="text-xl text-gray-600 mb-4">{rider.role}</p>
              
              <div className="flex items-center gap-2 text-[#d709dd] mb-6">
                <Trophy size={24} />
                <p className="text-lg">{rider.achievements}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <ChevronRight className="text-[#d709dd]" />
                  <p>Information n°1</p>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="text-[#d709dd]" />
                  <p>Information n°2</p>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="text-[#d709dd]" />
                  <p>Information n°3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}