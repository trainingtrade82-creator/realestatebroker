
"use client";

import { properties } from '@/lib/property-data';
import PropertyCard from './property-card';

export default function PropertyListings() {
  return (
    <section id="properties" className="py-16 sm:py-24 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Curated For You</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Explore our handpicked collection of the world's most desirable properties.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
