import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Classic Craft Burger',
    description:
      'Our signature burger with premium Angus beef, aged cheddar, lettuce, tomato, and our special craft sauce on a brioche bun.',
    price: 169,
    image:
      'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'burger',
    featured: true,
  },
  {
    id: 2,
    name: 'Smokehouse BBQ',
    description:
      'Smoked beef patty, bourbon BBQ sauce, crispy bacon, caramelized onions, and smoked gouda cheese on a pretzel bun.',
    price: 199,
    image:
      'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'burger',
    featured: true,
    spicyLevel: 1,
  },
  {
    id: 3,
    name: 'Mushroom Swiss',
    description:
      'Beef patty topped with sautéed forest mushrooms, Swiss cheese, arugula, and truffle aioli on a toasted bun.',
    price: 179,
    image:
      'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'burger',
  },
  {
    id: 4,
    name: 'Veggie Garden',
    description:
      'House-made vegetable patty with avocado, sprouts, roasted red peppers, and herb aioli on a whole grain bun.',
    price: 179,
    image:
      'https://images.pexels.com/photos/3607284/pexels-photo-3607284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'burger',
    vegetarian: true,
  },
  {
    id: 5,
    name: 'Double Bacon Bliss',
    description:
      'Double beef patties, double bacon, double cheese with caramelized onions and special sauce on a brioche bun.',
    price: 259,
    image:
      'https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'burger',
    featured: true,
  },
  {
    id: 6,
    name: 'Spicy Jalapeño',
    description:
      'Beef patty with pepper jack cheese, jalapeños, spicy mayo, and crispy fried onions on a toasted bun.',
    price: 189,
    image:
      'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'burger',
    spicyLevel: 3,
  },
  {
    id: 7,
    name: 'Truffle Fries',
    description:
      'Hand-cut fries tossed in truffle oil, parmesan cheese, and fresh herbs.',
    price: 149,
    image:
      'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'side',
    vegetarian: true,
  },
  {
    id: 8,
    name: 'Sweet Potato Fries',
    description:
      'Crispy sweet potato fries served with maple aioli dipping sauce.',
    price: 179,
    image:
      'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'side',
    vegetarian: true,
    glutenFree: true,
  },
  {
    id: 9,
    name: 'Onion Rings',
    description:
      'Thick-cut onions, beer-battered and fried to golden perfection, served with house dipping sauce.',
    price: 159,
    image:
      'https://images.pexels.com/photos/6941027/pexels-photo-6941027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'side',
    vegetarian: true,
  },
  {
    id: 10,
    name: 'Craft Soda',
    description:
      'House-made artisanal sodas. Ask about our flavors of the day.',
    price: 89,
    image:
      'https://images.pexels.com/photos/2789328/pexels-photo-2789328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'drink',
    vegan: true,
    glutenFree: true,
  },
  {
    id: 11,
    name: 'Milkshake',
    description:
      'Creamy hand-spun milkshakes made with premium ice cream. Classic or specialty flavors available.',
    price: 99,
    image:
      'https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'drink',
    vegetarian: true,
  },
  {
    id: 12,
    name: 'Craft Beer',
    description:
      'Rotating selection of local craft beers. Ask your server for current offerings.',
    price: 149,
    image:
      'https://images.pexels.com/photos/1269025/pexels-photo-1269025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'drink',
    glutenFree: false,
  },
  {
    id: 13,
    name: 'Blue Cheese Buffalo',
    description:
      'Beef patty topped with spicy buffalo sauce, crumbled blue cheese, crispy onions, and celery slaw on a toasted bun.',
    price: 299,
    image:
      'https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'burger',
    spicyLevel: 2,
  },
  {
    id: 14,
    name: 'Mediterranean Lamb',
    description:
      'Seasoned lamb patty with feta cheese, cucumber, red onion, tzatziki sauce, and fresh mint on a pita-style bun.',
    price: 399,
    image:
      'https://images.pexels.com/photos/4253320/pexels-photo-4253320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'burger',
  },
  {
    id: 15,
    name: 'Hawaiian Teriyaki',
    description:
      'Grilled pineapple, teriyaki-glazed beef patty, Swiss cheese, and wasabi mayo on a Hawaiian sweet roll.',
    price: 189,
    image:
      'https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'burger',
  },
  {
    id: 16,
    name: 'Artisanal Lemonade',
    description:
      'Fresh-squeezed lemonade infused with seasonal fruits and herbs.',
    price: 99,
    image:
      'https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'drink',
    vegan: true,
    glutenFree: true,
  },
  {
    id: 17,
    name: 'Cold Brew Coffee',
    description:
      'Smooth, house-made cold brew coffee served over ice with your choice of flavoring.',
    price: 89,
    image:
      'https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'drink',
    vegan: true,
    glutenFree: true,
  },
  {
    id: 18,
    name: 'Chocolate Lava Cake',
    description:
      'Warm chocolate cake with a molten center, served with vanilla ice cream and raspberry sauce.',
    price: 169,
    image:
      'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'dessert',
    vegetarian: true,
  },
  {
    id: 19,
    name: 'New York Cheesecake',
    description:
      'Classic New York-style cheesecake with a graham cracker crust and seasonal berry compote.',
    price: 179,
    image:
      'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'dessert',
    vegetarian: true,
  },
  {
    id: 20,
    name: 'Apple Crumble',
    description:
      'Warm cinnamon-spiced apples topped with oat streusel and served with caramel sauce.',
    price: 199,
    image:
      'https://images.pexels.com/photos/6163263/pexels-photo-6163263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'dessert',
    vegetarian: true,
  },
];

export const getMenuItemsByCategory = (category: MenuItem['category']) => {
  return menuItems.filter((item) => item.category === category);
};

export const getFeaturedItems = () => {
  return menuItems.filter((item) => item.featured);
};
