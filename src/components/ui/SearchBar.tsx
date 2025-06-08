import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '../../data/menu';
import { MenuItem } from '../../types';
import { useTranslation } from 'react-i18next';
import { formatPrice } from '../../hooks/useCart';

interface SearchBarProps {
  isExpanded: boolean;
  onToggle: () => void;
  onItemSelect: (item: MenuItem) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ isExpanded, onToggle, onItemSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = menuItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(filtered.slice(0, 5)); // Limit to 5 results
    } else {
      setFilteredItems([]);
    }
  }, [searchTerm]);

  const handleItemClick = (item: MenuItem) => {
    onItemSelect(item);
    setSearchTerm('');
    setFilteredItems([]);
    onToggle();
  };

  const handleClear = () => {
    setSearchTerm('');
    setFilteredItems([]);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {!isExpanded ? (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onToggle}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Search size={20} />
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            className="flex items-center"
          >
            <div className="relative">
              <div className="flex items-center bg-white border border-gray-300 rounded-lg px-3 py-2 min-w-[250px]">
                <Search size={18} className="text-gray-400 mr-2" />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={t('search.placeholder')}
                  className="flex-1 outline-none text-sm"
                />
                {searchTerm && (
                  <button
                    onClick={handleClear}
                    className="ml-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Search Results Dropdown */}
              <AnimatePresence>
                {filteredItems.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto"
                  >
                    {filteredItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleItemClick(item)}
                        className="w-full p-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex items-center space-x-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{item.name}</h4>
                            <p className="text-sm text-gray-500 truncate">{item.description}</p>
                            <div className="flex items-center justify-between mt-1">
                              <span className="text-sm text-gray-400 capitalize">{item.category}</span>
                              <span className="font-bold text-primary-500">
                                {formatPrice(item.price, i18n)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              onClick={onToggle}
              className="ml-2 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;