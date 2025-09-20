import { Paintbrush2, Sofa, Smartphone, ConciergeBell, Star, Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <Paintbrush2 className="h-8 w-8 text-accent" />,
    title: 'Interior Design Consultation',
    description: 'Partnered designers provide free or discounted consultations to personalize your new home.',
  },
  {
    icon: <Sofa className="h-8 w-8 text-accent" />,
    title: 'Furniture & Electronics Discounts',
    description: 'Partner brands give exclusive deals on high-end furniture and electronics.',
  },
  {
    icon: <Smartphone className="h-8 w-8 text-accent" />,
    title: 'Smart-Home Upgrade Kits',
    description: 'Our IoT partners provide starter packages for automating your new home.',
  },
  {
    icon: <Star className="h-8 w-8 text-accent" />,
    title: 'Memberships & Lifestyle Perks',
    description: 'Exclusive vouchers for gyms, private clubs, coworking spaces, and travel.',
  },
  {
    icon: <ConciergeBell className="h-8 w-8 text-accent" />,
    title: 'Concierge Services',
    description: 'We handle utilities, setup, and move-in assistance to ensure a seamless transition.',
  },
  {
    icon: <Sparkles className="h-8 w-8 text-accent" />,
    title: 'And much more...',
    description: 'Unlock a world of benefits designed to enhance your ownership experience.',
  },
];

export default function LifestyleServices() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Unparalleled Lifestyle Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Our commitment to you extends beyond the sale.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="bg-card hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <CardHeader>
                 {service.icon}
                <CardTitle className="pt-4 font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button size="lg">Unlock Your Exclusive Buyer Benefits</Button>
        </div>
      </div>
    </section>
  );
}
