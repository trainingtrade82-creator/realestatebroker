
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { properties, Property } from '@/lib/property-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PropertyCard from '@/components/sections/property-card';
import {
  Bed,
  Bath,
  AreaChart,
  Building,
  Heart,
  Share2,
  MapPin,
  CheckCircle,
  Award,
  Star,
  Tag,
  Phone,
  Calendar,
  MessageCircle
} from 'lucide-react';

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = properties.find((p) => p.id === params.id);

  if (!property) {
    notFound();
  }

  const image = PlaceHolderImages.find((p) => p.id === property.image_id);
  const similarProperties = properties.filter(p => p.id !== property.id && p.category === property.category).slice(0, 3);
  
  const formatPrice = (p: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(p);
  };
  const originalPrice = property.price * 1.1;

  const keySpecs = [
    { icon: <Bed />, label: 'Bedrooms', value: property.bedrooms },
    { icon: <Bath />, label: 'Bathrooms', value: property.bathrooms },
    { icon: <AreaChart />, label: 'Area', value: `${property.area} sq.ft.` },
    { icon: <Building />, label: 'Status', value: property.status },
    { icon: <Tag />, label: 'Type', value: property.subtype },
  ];

  const perks = [
    { icon: <Award className="text-accent"/>, text: 'Free Interior Design Package' },
    { icon: <Star className="text-accent"/>, text: 'Discounts on Furniture & Electronics' },
    { icon: <CheckCircle className="text-accent"/>, text: 'Free Lifestyle Club Membership' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      {/* Sticky CTA Bar */}
      <div className="sticky top-[56px] z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
        <div className="container p-2 sm:p-4 flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="text-center sm:text-left">
                <h2 className="text-lg sm:text-xl font-bold font-headline truncate">{property.title}</h2>
                <p className="text-sm text-muted-foreground">{property.location}</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap justify-center">
                <Button size="sm" className="bg-primary/90 hover:bg-primary">
                    <Phone className="mr-2 h-4 w-4" /> Request Callback
                </Button>
                <Button size="sm" variant="secondary">
                    <Calendar className="mr-2 h-4 w-4" /> Schedule Visit
                </Button>
                <Button size="sm" variant="ghost">
                    <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                </Button>
            </div>
        </div>
      </div>

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="relative h-[50vh] min-h-[300px] w-full">
          {image && (
            <Image
              src={image.imageUrl}
              alt={property.title}
              fill
              className="object-cover"
              priority
              data-ai-hint={image.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container h-full flex flex-col justify-end pb-8 text-white">
            <Badge className="absolute top-4 left-4">Exclusive</Badge>
             <div className="absolute top-4 right-4 flex gap-2">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20"><Heart /></Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20"><Share2 /></Button>
             </div>
          </div>
        </section>

        <div className="container py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    {/* 2. Property Overview */}
                    <section>
                        <h1 className="font-headline text-3xl md:text-4xl font-bold">{property.title}</h1>
                        <p className="mt-2 text-lg text-muted-foreground">{property.description}</p>
                        <Card className="mt-6">
                           <CardContent className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
                                {keySpecs.map(spec => (
                                    <div key={spec.label} className="flex flex-col items-center gap-1">
                                        <div className="text-accent">{spec.icon}</div>
                                        <span className="text-sm text-muted-foreground">{spec.label}</span>
                                        <span className="font-bold text-base">{spec.value}</span>
                                    </div>
                                ))}
                           </CardContent>
                        </Card>
                    </section>
                    
                    {/* 3. Pricing & Benefits */}
                    <section className="mt-8">
                        <h2 className="text-2xl font-headline font-bold mb-4">Pricing & Benefits</h2>
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-baseline gap-4 mb-4">
                                     <span className="text-2xl text-muted-foreground line-through">{formatPrice(originalPrice)}</span>
                                     <span className="text-4xl font-bold text-primary">{formatPrice(property.price)}</span>
                                </div>
                                <h3 className="font-semibold mb-2">Exclusive Buyer Perks:</h3>
                                <ul className="space-y-2">
                                  {perks.map(perk => (
                                    <li key={perk.text} className="flex items-center gap-2">
                                        {perk.icon}
                                        <span>{perk.text}</span>
                                    </li>
                                  ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </section>

                    {/* 4. Location Section */}
                    <section className="mt-8">
                        <h2 className="text-2xl font-headline font-bold mb-4">Location</h2>
                         <Card>
                            <CardContent className="p-6">
                               <div className="flex items-center gap-2 mb-4">
                                    <MapPin className="text-accent"/>
                                    <p className="text-lg">{property.location}</p>
                                </div>
                                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                                    <p className="text-muted-foreground">Interactive Map Placeholder</p>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                </div>

                {/* Right Sidebar Placeholder */}
                <aside className="hidden lg:block lg:col-span-1">
                    <Card className="sticky top-24">
                        <CardHeader>
                            <CardTitle>Contact Agent</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Contact form placeholder.</p>
                        </CardContent>
                    </Card>
                </aside>
            </div>
             {/* Similar Properties Section */}
            <section className="mt-16">
                <h2 className="text-2xl md:text-3xl font-headline font-bold text-center mb-8">Similar Properties You May Like</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {similarProperties.map((prop) => (
                        <PropertyCard key={prop.id} property={prop} />
                    ))}
                </div>
            </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Generate static paths for all properties
export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}
