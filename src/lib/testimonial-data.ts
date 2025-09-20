export type Testimonial = {
  id: string;
  name: string;
  location: string;
  type: 'Buyer' | 'Investor' | 'Developer';
  quote: string;
  image_id: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'John Smith',
    location: 'Dubai',
    type: 'Buyer',
    quote:
      'The property wasn’t just a home — it came with a turnkey lifestyle. From interiors to smart-home setup, everything was effortless.',
    image_id: 'testimonial-1',
  },
  {
    id: 't2',
    name: 'Maria Chen',
    location: 'Singapore',
    type: 'Investor',
    quote:
      'Fractional ownership through Sterling & Landis gave me access to top-tier properties worldwide. ROI exceeded expectations.',
    image_id: 'testimonial-2',
  },
  {
    id: 't3',
    name: 'Horizon Developers',
    location: 'London',
    type: 'Developer',
    quote:
      'Partnering with Sterling & Landis accelerated our project absorption and brought high-quality investors worldwide.',
    image_id: 'testimonial-3',
  },
    {
    id: 't4',
    name: 'Alexei Volkov',
    location: 'Moscow',
    type: 'Buyer',
    quote:
      'The concierge service is unparalleled. They handled everything from legal paperwork to utility setup. A truly seamless experience.',
    image_id: 'testimonial-4',
  },
];
