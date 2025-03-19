import React from 'react';

export function Hero() {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("../../public/images/fond.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-bold mb-4">TEAM MXTRAINER</h1>
        <p className="text-xl max-w-xl mx-auto">Bienvenue chez MXTrainer, l’équipe qui booste votre passion du motocross ! Rejoignez-nous et vivez la performance !</p>
      </div>
    </div>
  );
}