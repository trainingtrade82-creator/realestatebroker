"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { properties, Property } from '@/lib/property-data';
import PropertyCard from './property-card';

export default function PropertyListings() {
  const searchParams = useSearchParams();

  const location = searchParams.get('location');
  const buyRent = searchParams.get('buyRent');
  const category = searchParams.get('category');
  const subtype = searchParams.get('subtype');

  const filteredProperties = React.useMemo(() => {
    return properties.filter((property: Property) => {
      let match = true;

      if (location && !property.location.toLowerCase().includes(location.toLowerCase())) {
        match = false;
      }
      if (buyRent && property.buyRent !== buyRent) {
        match = false;
      }
      if (category && property.category !== category) {
        match = false;
      }
      if (subtype && property.subtype !== subtype) {
        match = false;
      }

      return match;
    });
  }, [location, buyRent, category, subtype]);

  return (
    <section id="properties" className="py-16 sm:py-24 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold">No Properties Found</h3>
            <p className="text-muted-foreground mt-2">
              Try adjusting your search filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
