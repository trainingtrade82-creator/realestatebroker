import { Globe, Star, Sparkles, ShieldCheck } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const valueProps = [
  {
    icon: <Globe className="h-8 w-8 text-accent" />,
    title: 'Verified Global Listings',
    description: 'Access a curated portfolio of verified luxury properties from around the world, ensuring quality and authenticity.',
  },
  {
    icon: <Star className="h-8 w-8 text-accent" />,
    title: 'Exclusive Buyer Perks',
    description: 'Enjoy benefits available only to our members, including off-market opportunities and preferred partner rates.',
  },
  {
    icon: <Sparkles className="h-8 w-8 text-accent" />,
    title: 'Full-Service Experience',
    description: 'From legal support to interior design, our team provides a seamless, end-to-end property acquisition journey.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
    title: 'Investment Security',
    description: 'We prioritize your peace of mind with secure transactions and properties vetted for high investment potential.',
  },
];

export default function ValueProps() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop) => (
            <Card key={prop.title} className="text-center border-0 bg-transparent shadow-none">
              <CardHeader className="items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-background">
                  {prop.icon}
                </div>
                <CardTitle className="font-headline text-xl">{prop.title}</CardTitle>
                <CardDescription className="pt-2">{prop.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
