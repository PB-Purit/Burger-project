import { LocationInfo } from '../types';

export const locationInfo: LocationInfo = {
  address: '123 Burger Street Rd',
  city: 'BKK',
  state: 'TH',
  zip: '10700',
  phone: '(+00) 123-45678',
  email: 'PB@craftburger.com',
  hours: [
    { day: 'Monday', open: '8:00 AM', close: '8:00 PM' },
    { day: 'Tuesday', open: '8:00 AM', close: '8:00 PM' },
    { day: 'Wednesday', open: '8:00 AM', close: '8:00 PM' },
    { day: 'Thursday', open: '8:00 AM', close: '8:00 PM' },
    { day: 'Friday', open: '8:00 AM', close: '8:00 PM' },
    { day: 'Saturday', open: '9:00 AM', close: '10:00 PM' },
    { day: 'Sunday', open: '9:00 AM', close: '10:00 PM' },
  ],
};
