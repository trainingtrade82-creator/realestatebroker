
"use client";

import { properties } from '@/lib/property-data';
import PropertyCard from './property-card';

export default function PropertyListings() {
  return (
    <section id="properties" className="py-16 sm:py-24 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
