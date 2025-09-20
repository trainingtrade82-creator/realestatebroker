"use client";

import { useState } from 'react';
import Image from 'next/image';
import { properties, PropertyType } from '@/lib/property-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const propertyTypes: (PropertyType | 'All')[] = ['All', 'Apartment', 'Villa', 'Penthouse', 'Home'];

export default function FeaturedProperties() {
  const [filter, setFilter] = useState<PropertyType | 'All'>('All');

  const filteredProperties = properties.filter(
    (property) => filter === 'All' || property.type === filter
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="properties" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Featured Properties</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            A selection of our finest properties, available for discerning buyers.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <Tabs value={filter} onValueChange={(value) => setFilter(value as PropertyType | 'All')}>
            <TabsList>
              {propertyTypes.map((type) => (
                <TabsTrigger key={type} value={type}>
                  {type}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => {
            const image = PlaceHolderImages.find(p => p.id === property.image_id);
            return (
              <Card key={property.id} className="overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={property.title}
                        width={600}
                        height={400}
                        className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                    <Badge variant="secondary" className="absolute top-3 right-3">{property.type}</Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="font-headline text-xl font-semibold mb-2">{property.title}</h3>
                    <p className="text-muted-foreground mb-4">{property.location}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-bold text-accent">{formatPrice(property.price)}</p>
                      <Button variant="outline">Request Viewing</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
