"use client";

import Image from 'next/image';
import { Property } from '@/lib/property-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Bed, Bath, Ruler, Building, MapPin, Gift, Sofa, MonitorSmartphone, Star, Heart, Share2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
};

export default function PropertyCard({ property }: { property: Property }) {
  const image = PlaceHolderImages.find(p => p.id === property.image_id);
  const galleryImages = [
      PlaceHolderImages.find(p => p.id === 'prop-1'),
      PlaceHolderImages.find(p => p.id === 'prop-2'),
      PlaceHolderImages.find(p => p.id === 'prop-3'),
  ].filter(Boolean);

  const perks = [
    { icon: <Gift className="h-4 w-4" />, text: 'Free Interiors' },
    { icon: <Sofa className="h-4 w-4" />, text: 'Furniture Discounts' },
    { icon: <MonitorSmartphone className="h-4 w-4" />, text: 'Electronics Cashback' },
    { icon: <Star className="h-4 w-4" />, text: 'Lifestyle Club' },
  ]

  return (
    <Card className="overflow-hidden group flex flex-col h-full bg-background shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <CardContent className="p-0 flex-grow flex flex-col">
        {/* Media Showcase */}
        <div className="relative">
          <Carousel>
            <CarouselContent>
              {galleryImages.map((img, index) => (
                 <CarouselItem key={index}>
                    {img && (
                      <div className="relative h-60 w-full">
                         <Image
                          src={img.imageUrl}
                          alt={img.description}
                          fill
                          className="object-cover"
                          data-ai-hint={img.imageHint}
                        />
                      </div>
                    )}
                 </CarouselItem>
              ))}
            </CarouselContent>
             <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden group-hover:flex" />
             <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden group-hover:flex" />
          </Carousel>

          <div className="absolute top-2 left-2 z-10 flex gap-2">
            <Badge variant="destructive">Hot Deal</Badge>
            <Badge>Exclusive</Badge>
          </div>
        </div>

        <div className="p-4 flex-grow flex flex-col">
          {/* Core Details */}
          <div className="flex-grow">
            <h3 className="font-headline text-xl font-semibold mb-1">{property.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">Modern smart home with panoramic sea view & private deck.</p>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
              <span className="flex items-center gap-1.5"><Bed className="h-4 w-4" /> 3</span>
              <span className="flex items-center gap-1.5"><Bath className="h-4 w-4" /> 4</span>
              <span className="flex items-center gap-1.5"><Ruler className="h-4 w-4" /> 2,500 sq.ft</span>
              <span className="flex items-center gap-1.5"><Building className="h-4 w-4" /> Ready</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <MapPin className="h-4 w-4" />
              <span>{property.location}</span>
            </div>
            
             {/* Map Placeholder */}
            <div className="h-24 bg-muted rounded-md mb-4 flex items-center justify-center">
              <p className="text-muted-foreground text-sm">Map View</p>
            </div>
          </div>
          
          <Separator className="my-4" />

          {/* Pricing & Perks */}
          <div>
            <div className="flex items-baseline gap-2 mb-3">
                <span className="text-lg text-muted-foreground line-through">{formatPrice(property.price * 1.15)}</span>
                <span className="text-2xl font-bold text-accent">{formatPrice(property.price)}</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs text-foreground mb-4">
                {perks.map(perk => (
                    <div key={perk.text} className="flex items-center gap-2">
                        {perk.icon}
                        <span>{perk.text}</span>
                    </div>
                ))}
            </div>

            {/* CTAs */}
            <div className="space-y-2">
                <Button className="w-full">Contact Us to See Property</Button>
                <div className="flex gap-2">
                    <Button variant="outline" className="w-full">Schedule Visit</Button>
                    <Button variant="ghost" size="icon"><Heart className="h-5 w-5" /></Button>
                    <Button variant="ghost" size="icon"><Share2 className="h-5 w-5" /></Button>
                </div>
            </div>
          </div>
        </div>

      </CardContent>
    </Card>
  );
}
