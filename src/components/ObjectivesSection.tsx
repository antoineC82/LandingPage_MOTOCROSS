import React from 'react';
import { Target, Trophy, Users, TrendingUp } from 'lucide-react';

export function ObjectivesSection() {
  return (
    <section id="objectives" className="py-20 bg-gradient-to-br from-gradient-start to-gradient-end text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Objectifs 2025</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4 p-6 bg-gray-100 rounded-lg">
            <Trophy className="text-[#d709dd] w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2 text-black">Championnat ...</h3>
              <p className='text-black'>Récupérer le plus de points sur le championnat .... pour espérer gagner des places et espérer avoir un podium de championnat.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-gray-100 rounded-lg">
            <Users className="text-[#d709dd] w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2 text-black">Podiums de courses</h3>
              <p className='text-black'>Au cours du championnat, notre objectif est d'arriver à faire 5 podiums de course, tous pilotes confondus.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-gray-100 rounded-lg">
            <Target className="text-[#d709dd] w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2 text-black">Visibilité & présence</h3>
              <p className='text-black'>Notre objectif d'être présent lors d'événements, d'entraînements est primordial.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-gray-100 rounded-lg">
            <TrendingUp className="text-[#d709dd] w-12 h-12 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2 text-black">Monter en compétences</h3>
              <p className='text-black'>Monter en compétences lors de nos entraînements pour espérer l'année prochaine faire le championnat...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}