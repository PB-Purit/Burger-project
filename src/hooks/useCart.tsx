import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import { MenuItem } from '../types';
import { i18n as i18nInterface } from 'i18next';

interface CartItem extends MenuItem {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
  getItemQuantity: (itemId: number) => number;
  getTotalItems: () => number;
  getTotalAmount: () => number;
  submitOrder: () => Promise<void>;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addToCart: (item: MenuItem) => {
        const { items } = get();
        const existingItem = items.find((i) => i.id === item.id);
        
        if (existingItem) {
          set({
            items: items.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
          });
        } else {
          set({ items: [...items, { ...item, quantity: 1 }] });
        }
      },
      
      removeFromCart: (itemId: number) => {
        const { items } = get();
        set({
          items: items.filter((i) => i.id !== itemId),
        });
      },
      
      updateQuantity: (itemId: number, quantity: number) => {
        const { items } = get();
        if (quantity <= 0) {
          set({
            items: items.filter((i) => i.id !== itemId),
          });
        } else {
          set({
            items: items.map((i) =>
              i.id === itemId ? { ...i, quantity } : i
            ),
          });
        }
      },
      
      clearCart: () => set({ items: [] }),
      
      getItemQuantity: (itemId: number) => {
        const { items } = get();
        return items.find((i) => i.id === itemId)?.quantity || 0;
      },
      
      getTotalItems: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.quantity, 0);
      },
      
      getTotalAmount: () => {
        const { items } = get();
        return items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },

      submitOrder: async () => {
        const { items, clearCart } = get();
        try {
          const response = await axios.post('https://dummyjson.com/carts/add', {
            userId: 1,
            products: items.map(item => ({
              id: item.id,
              quantity: item.quantity
            }))
          });
          
          if (response.status === 200) {
            clearCart();
            alert('Order submitted successfully!');
          }
        } catch (error) {
          console.error('Error submitting order:', error);
          alert('Failed to submit order. Please try again.');
        }
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);

export const formatPrice = (price: number, i18n: i18nInterface): string => {
  return new Intl.NumberFormat(i18n.language === 'th' ? 'th-TH' : 'en-US', {
    style: 'currency',
    currency: i18n.language === 'th' ? 'THB' : 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(i18n.language === 'th' ? price : price / 35);
};