export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'burger' | 'side' | 'drink' | 'dessert';
  featured?: boolean;
  allergens?: string[];
  spicyLevel?: 0 | 1 | 2 | 3; // 0 = not spicy, 3 = very spicy
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date: string;
}

export interface LocationInfo {
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  hours: {
    day: string;
    open: string;
    close: string;
  }[];
}