"use client";

import { properties } from '@/lib/property-data';
import PropertyCard from './property-card';

export default function LuxuryProperties() {
  return (
    <section id="properties" className="py-16 sm:py-24 bg-secondary">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Exclusive Properties</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            A selection of our finest properties, available for discerning buyers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.slice(0, 3).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
