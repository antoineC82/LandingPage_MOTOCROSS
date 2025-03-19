import React from 'react';
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TEAM MXTRAINER</h3>
            <p className="text-gray-400 mb-4">Repousser les limites de l'excellence en motocross.</p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=100090329315348" className="text-gray-400 hover:text-[#d709dd] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/mxtrainer.fr/" className="text-gray-400 hover:text-[#d709dd] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.tiktok.com/@mxtrainer.fr?is_from_webapp=1&sender_device=pc" className="text-gray-400 hover:text-[#d709dd] transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#team" className="text-gray-400 hover:text-[#d709dd] transition-colors">Les pilotes</a>
              </li>
              <li>
                <a href="#partners" className="text-gray-400 hover:text-[#d709dd] transition-colors">Les partenaires</a>
              </li>
              <li>
                <a href="#objectives" className="text-gray-400 hover:text-[#d709dd] transition-colors">Objectifs 2025</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contactez-nous</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={20} />
                <span>2937 Route de Grezas, 82120 Mansonville</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={20} />
                <span>+33 6 69 45 74 74</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={20} />
                <span>contact@mxtrainer.fr</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TEAM MXTRAINER. Tous droits reservés.</p>
        </div>
      </div>
    </footer>
  );
}