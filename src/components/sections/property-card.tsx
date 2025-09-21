"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Property } from '@/lib/property-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PropertyCard({ property }: { property: Property }) {
  const image = PlaceHolderImages.find(p => p.id === property.image_id);

  // Format price for display
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(property.price);
  
  const originalPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(property.price * 1.1);


  return (
    <Card className="group flex h-full flex-col overflow-hidden bg-background shadow-lg transition-shadow duration-300 hover:shadow-2xl">
      <CardHeader className="relative p-0">
        <Link href={`/properties/${property.id}`} className="block">
          <div className="relative h-60 w-full">
            {image && (
              <Image
                src={image.imageUrl}
                alt={property.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={image.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </Link>
        <Badge className="absolute top-2 left-2">Exclusive</Badge>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 rounded-full bg-white/80 text-primary-foreground hover:bg-white"
        >
          <Heart className="h-5 w-5 fill-primary text-primary" />
          <span className="sr-only">Save</span>
        </Button>
      </CardHeader>
      <CardContent className="flex flex-grow flex-col p-4">
        <Link href={`/properties/${property.id}`} className="group block">
            <CardTitle className="font-headline text-xl leading-tight transition-colors group-hover:text-accent">
            {property.title}
            </CardTitle>
            <CardDescription className="mt-2 flex items-center gap-1 text-sm">
            <MapPin className="h-4 w-4" />
            {property.location}
            </CardDescription>
        </Link>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
         <div className="flex flex-col">
          <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
          <span className="text-xl font-bold text-primary">{formattedPrice}</span>
        </div>
        <Link href={`/properties/${property.id}`}>
          <Button>View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
