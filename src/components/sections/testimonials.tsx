"use client";

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { testimonials } from '@/lib/testimonial-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const pressLogos = [
    { src: '/press/forbes.svg', alt: 'Forbes' },
    { src: '/press/bloomberg.svg', alt: 'Bloomberg' },
    { src: '/press/techcrunch.svg', alt: 'TechCrunch' },
    { src: '/press/reuters.svg', alt: 'Reuters' },
    { src: '/press/wsj.svg', alt: 'Wall Street Journal' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">Success Stories From Our Clients</h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
                    Discover why high-net-worth individuals, investors, and developers trust us.
                </p>
            </div>

            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full max-w-5xl mx-auto"
            >
                <CarouselContent>
                    {testimonials.map((testimonial) => {
                         const image = PlaceHolderImages.find(p => p.id === testimonial.image_id);
                         return (
                            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1 h-full">
                                    <Card className="h-full flex flex-col">
                                        <CardContent className="flex flex-col items-center text-center p-6 flex-grow">
                                            {image && (
                                                <Image
                                                    src={image.imageUrl}
                                                    alt={testimonial.name}
                                                    width={100}
                                                    height={100}
                                                    className="rounded-full mb-4 border-4 border-secondary"
                                                    data-ai-hint={image.imageHint}
                                                />
                                            )}
                                            <p className="text-muted-foreground italic">&quot;{testimonial.quote}&quot;</p>
                                            <div className="mt-4">
                                                <p className="font-bold font-headline">{testimonial.name}</p>
                                                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                                            </div>
                                            <Badge variant="outline" className="mt-4">{testimonial.type}</Badge>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                         );
                    })}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
            
            <div className="mt-16">
                 <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6">As featured in</h3>
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                    {pressLogos.map((logo) => (
                         <div key={logo.alt} className="h-8 w-32 relative grayscale opacity-60 hover:opacity-100 transition-opacity">
                             {/* The SVGs dont exist, so we use a placeholder div */}
                         </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}
