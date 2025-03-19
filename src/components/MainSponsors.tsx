import React from 'react';
import { Award, Zap } from 'lucide-react';
import redbull from '../../public/images/redbull.png';
import mxtrainer from '../../public/images/MX.svg';

const mainSponsors = [
  {
    name: "RedBull Racing",
    logo: redbull,
    description: "Partenaire Officiel des Boissons Énergétiques",
    details: "Alimentant notre équipe avec des boissons énergétiques et un soutien promotionnel depuis 2020. Ensemble, nous avons décroché de nombreuses victoires et créé des moments inoubliables dans l'histoire du motocross.",
    achievements: ["Soutien Marketing Global", "Amélioration des Performances", "Sponsoring d'Événements"],
    icon: Zap
  },
  {
    name: "MXTRAINER",
    logo: mxtrainer,
    description: "Partenaire Officiel",
    details: "Mxtrainer est la première application te permettant de gérer ta saison : inscriptions aux entraînements, chronomètrage, inscriptions aux courses, analyses de performances",
    achievements: ["inscriptions aux entraînements", "chronomètrage technique", "analyse de performances"],
    icon: Award
  }
];

export function MainSponsors() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Partenaires principaux</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        Votre soutien propulse MXTrainer vers l’excellence. Ensemble, nous dominons chaque piste !
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {mainSponsors.map((sponsor) => (
            <div key={sponsor.name} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gradient-start to-gradient-end rounded-xl transform -rotate-1 group-hover:rotate-1 transition-transform"></div>
              <div className="relative bg-gray-800 p-8 rounded-xl transform group-hover:translate-y-1 transition-transform">
                <div className="flex items-start gap-6">
                  <div className="w-32 h-32 bg-white rounded-lg p-4 flex items-center justify-center">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{sponsor.name}</h3>
                    <span className='bg-gradient-to-br from-gradient-start to-gradient-end bg-clip-text text-transparent'>
                    <span className="text-lg mb-2 font-semibold mb-4">{sponsor.description}</span>
                    </span>
                    <p className="text-gray-400 mb-6">{sponsor.details}</p>
                    
                    <div className="space-y-2">
                      {sponsor.achievements.map((achievement) => (
                        <div key={achievement} className="flex items-center gap-2">
                          <sponsor.icon className="w-5 h-5 text-[#d709dd]" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}