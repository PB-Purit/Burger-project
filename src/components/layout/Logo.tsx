import React from 'react';
import { Beef } from 'lucide-react';

interface LogoProps {
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ color = 'text-white' }) => {
  return (
    <a href="#" className={`flex items-center ${color}`}>
      <Beef size={32} className="mr-2" />
      <span className="font-display text-2xl font-bold tracking-tight">CraftBurger</span>
    </a>
  );
};

export default Logo;