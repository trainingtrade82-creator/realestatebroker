"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Property } from '@/lib/property-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PropertyCard({ property }: { property: Property }) {
  const image = PlaceHolderImages.find(p => p.id === property.image_id);

  return (
    <Link href={`/properties/${property.id}`} className="group block">
        <Card className="overflow-hidden group flex flex-col h-full bg-background shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardContent className="p-0 flex-grow flex flex-col">
                <div className="relative h-60 w-full">
                    {image && (
                        <Image
                        src={image.imageUrl}
                        alt={property.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={image.imageHint}
                        />
                    )}
                </div>
                <div className="p-4">
                    <CardTitle className="font-headline text-xl leading-tight group-hover:text-accent transition-colors">
                        {property.title}
                    </CardTitle>
                </div>
            </CardContent>
        </Card>
    </Link>
  );
}
