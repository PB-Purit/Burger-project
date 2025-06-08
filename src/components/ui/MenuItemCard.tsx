import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Award, Leaf, Plus, Minus, Trash2 } from 'lucide-react';
import { MenuItem } from '../../types';
import { useCart, formatPrice } from '../../hooks/useCart';
import { useTranslation } from 'react-i18next';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart, removeFromCart, updateQuantity, getItemQuantity } = useCart();
  const { i18n } = useTranslation();
  const itemQuantity = getItemQuantity(item.id);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const getSpicyIcons = (level: number = 0) => {
    if (level === 0) return null;
    
    return Array(level).fill(0).map((_, i) => (
      <Flame key={i} size={16} className="text-primary-500" />
    ));
  };

  const handleAddToCart = () => {
    if (itemQuantity === 0) {
      addToCart(item);
      setQuantity(1);
    } else {
      updateQuantity(item.id, itemQuantity + 1);
      setQuantity(itemQuantity + 1);
    }
  };

  const handleRemoveFromCart = () => {
    if (itemQuantity === 1) {
      removeFromCart(item.id);
      setQuantity(0);
    } else {
      updateQuantity(item.id, itemQuantity - 1);
      setQuantity(itemQuantity - 1);
    }
  };

  return (
    <motion.div 
      variants={itemVariants}
      className="menu-item group"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="menu-price">{formatPrice(item.price, i18n)}</div>
        
        {item.featured && (
          <div className="absolute bottom-4 left-4 bg-secondary-500 text-white px-3 py-1 rounded-full flex items-center">
            <Award size={16} className="mr-1" />
            <span className="text-sm font-medium">Featured</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">{item.name}</h3>
          <div className="flex">
            {getSpicyIcons(item.spicyLevel)}
            {item.vegetarian && <Leaf size={16} className="text-burger-lettuce ml-1" />}
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{item.description}</p>
        
        <div className="flex items-center justify-between">
          {itemQuantity > 0 ? (
            <div className="flex items-center space-x-2">
              <button
                onClick={handleRemoveFromCart}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                {itemQuantity === 1 ? <Trash2 size={18} /> : <Minus size={18} />}
              </button>
              <span className="font-medium w-8 text-center">{itemQuantity}</span>
              <button
                onClick={handleAddToCart}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>
          ) : (
            <button 
              onClick={handleAddToCart}
              className="w-full btn-primary"
            >
              Add to Order
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItemCard