import React from 'react';

export function Header() {
  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="../../public/images/logo.png" alt="Logo team mxtrainer" className='w-2/5'/>
        </div>
        <nav className='w-full'>
          <ul className="flex gap-6">
            <li><a href="#team" className="text-xl">Nos pilotes</a></li>
            <li><a href="#partners" className="text-xl">Nos partenaires</a></li>
            <li><a href="#objectives" className="text-xl">Objectifs 2025</a></li>
            <li><a href="#become-partner" className="text-xl">Soutenez-nous</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}