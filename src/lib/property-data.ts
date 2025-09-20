export type PropertyType = 'Apartment' | 'Villa' | 'Penthouse' | 'Estate' | 'Home' | 'Cabin';
export type Location = 'New York' | 'Miami' | 'Los Angeles' | 'London' | 'Aspen';

export type Property = {
  id: string;
  title: string;
  location: Location;
  type: PropertyType;
  price: number;
  image_id: string;
};

export const properties: Property[] = [
  {
    id: 'p1',
    title: 'Modern City-View Apartment',
    location: 'New York',
    type: 'Apartment',
    price: 2500000,
    image_id: 'prop-1',
  },
  {
    id: 'p2',
    title: 'Oceanfront Luxury Villa',
    location: 'Miami',
    type: 'Villa',
    price: 7800000,
    image_id: 'prop-2',
  },
  {
    id: 'p3',
    title: 'Sky-High Penthouse',
    location: 'New York',
    type: 'Penthouse',
    price: 12000000,
    image_id: 'prop-3',
  },
  {
    id: 'p4',
    title: 'The Hampton Estate',
    location: 'New York',
    type: 'Estate',
    price: 15500000,
    image_id: 'prop-4',
  },
  {
    id: 'p5',
    title: 'Beverly Hills Modern Home',
    location: 'Los Angeles',
    type: 'Home',
    price: 6200000,
    image_id: 'prop-5',
  },
  {
    id: 'p6',
    title: 'Aspen Mountain Retreat',
    location: 'Aspen',
    type: 'Cabin',
    price: 4900000,
    image_id: 'prop-6',
  },
];
