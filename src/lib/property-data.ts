export type PropertyType =
  | 'Apartment'
  | 'Villa'
  | 'Penthouse'
  | 'Residential Plot'
  | 'Office Space'
  | 'Shop/Store'
  | 'Showroom'
  | 'Warehouse'
  | 'Commercial Plot';
export type Location = 'Mumbai' | 'Delhi' | 'Bangalore' | 'Goa' | 'Pune';
export type Category = 'residential' | 'commercial';
export type Status = 'Ready' | 'Pre-launch' | 'Under-construction';
export type BuyRent = 'buy' | 'rent';

export type Property = {
  id: string;
  title: string;
  description: string;
  location: Location;
  category: Category;
  subtype: PropertyType;
  price: number;
  image_id: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // in sqft
  status: Status;
  buyRent: BuyRent;
};

export const properties: Property[] = [
  {
    id: 'p1',
    title: 'Sea-Facing Luxury Apartment',
    description: 'A stunning 3BHK apartment with panoramic views of the Arabian Sea.',
    location: 'Mumbai',
    category: 'residential',
    subtype: 'Apartment',
    price: 50000000,
    image_id: 'prop-1',
    bedrooms: 3,
    bathrooms: 3,
    area: 1800,
    status: 'Ready',
    buyRent: 'buy',
  },
  {
    id: 'p2',
    title: 'Goan-Portuguese Villa',
    description: 'A beautiful 4-bedroom villa with a private pool and garden.',
    location: 'Goa',
    category: 'residential',
    subtype: 'Villa',
    price: 85000000,
    image_id: 'prop-2',
    bedrooms: 4,
    bathrooms: 5,
    area: 4500,
    status: 'Ready',
    buyRent: 'buy',
  },
  {
    id: 'p3',
    title: 'Sky-High Duplex Penthouse',
    description: 'Experience luxury living in this spacious duplex in the heart of the city.',
    location: 'Bangalore',
    category: 'residential',
    subtype: 'Penthouse',
    price: 120000000,
    image_id: 'prop-3',
    bedrooms: 5,
    bathrooms: 6,
    area: 5500,
    status: 'Ready',
    buyRent: 'buy',
  },
  {
    id: 'p4',
    title: 'Lutyens Bungalow Zone Plot',
    description: 'A rare opportunity to own a piece of land in the most prestigious part of Delhi.',
    location: 'Delhi',
    category: 'residential',
    subtype: 'Residential Plot',
    price: 1500000000,
    image_id: 'prop-4',
    bedrooms: 0,
    bathrooms: 0,
    area: 10800,
    status: 'Ready',
    buyRent: 'buy',
  },
  {
    id: 'p5',
    title: 'Modern 2BHK for Rent',
    description: 'A well-furnished 2BHK apartment available for rent in a prime location.',
    location: 'Pune',
    category: 'residential',
    subtype: 'Apartment',
    price: 45000,
    image_id: 'prop-5',
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    status: 'Ready',
    buyRent: 'rent',
  },
  {
    id: 'p6',
    title: 'Commercial Office Space in BKC',
    description: 'A grade-A office space in Bandra Kurla Complex, ideal for MNCs.',
    location: 'Mumbai',
    category: 'commercial',
    subtype: 'Office Space',
    price: 250000,
    image_id: 'prop-6',
    bedrooms: 0,
    bathrooms: 2,
    area: 2000,
    status: 'Ready',
    buyRent: 'rent',
  },
  {
    id: 'p7',
    title: 'Retail Showroom on MG Road',
    description: 'High-street retail showroom with great visibility and footfall.',
    location: 'Bangalore',
    category: 'commercial',
    subtype: 'Showroom',
    price: 150000000,
    image_id: 'prop-1',
    bedrooms: 0,
    bathrooms: 1,
    area: 3000,
    status: 'Ready',
    buyRent: 'buy',
  },
  {
    id: 'p8',
    title: 'Warehouse & Logistics Hub',
    description: 'Large warehouse facility with easy access to the highway.',
    location: 'Delhi',
    category: 'commercial',
    subtype: 'Warehouse',
    price: 75000,
    image_id: 'prop-2',
    bedrooms: 0,
    bathrooms: 1,
    area: 10000,
    status: 'Ready',
    buyRent: 'rent',
  },
];
