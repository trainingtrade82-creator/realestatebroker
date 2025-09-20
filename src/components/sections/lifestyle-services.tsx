import { Paintbrush2, Sofa, Smartphone, ConciergeBell } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: <Paintbrush2 className="h-8 w-8 text-accent" />,
    title: 'Interior Design',
    description: 'Personalized consultations to transform your new house into a home that reflects your unique style.',
  },
  {
    icon: <Sofa className="h-8 w-8 text-accent" />,
    title: 'Curated Furnishing',
    description: 'Exclusive discounts on high-end furniture and electronics from our network of luxury partners.',
  },
  {
    icon: <Smartphone className="h-8 w-8 text-accent" />,
    title: 'Smart-Home Upgrades',
    description: 'Seamlessly integrate the latest smart-home technology for ultimate comfort, security, and convenience.',
  },
  {
    icon: <ConciergeBell className="h-8 w-8 text-accent" />,
    title: '24/7 Concierge',
    description: 'From relocation assistance to event planning, our concierge team is at your service for any request.',
  },
];

export default function LifestyleServices() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Unparalleled Lifestyle Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Our commitment to you extends beyond the sale.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                 {service.icon}
                <CardTitle className="pt-4 font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
