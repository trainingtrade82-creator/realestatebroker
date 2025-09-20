import { Search, Gift, FileText, TrendingUp, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const journeySteps = [
  {
    icon: <Search className="h-8 w-8 text-accent" />,
    title: 'Discover',
    description: 'Verified global listings via platform.',
  },
  {
    icon: <Gift className="h-8 w-8 text-accent" />,
    title: 'Access Perks & Financing',
    description: 'Instant mortgage, loyalty benefits, lifestyle offers.',
  },
  {
    icon: <FileText className="h-8 w-8 text-accent" />,
    title: 'Secure Purchase',
    description: 'Legal, documentation, property management handled.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-accent" />,
    title: 'Enjoy & Grow Investment',
    description: 'Rental guarantees, resale support, loyalty rewards.',
  },
];

export default function BuyerJourney() {
  return (
    <section id="buyer-journey" className="py-16 sm:py-24 bg-secondary">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">How It Works (Buyer Journey)</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            A step-by-step visual flow of your journey with us.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {journeySteps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex flex-col items-center text-center lg:px-4"
            >
              <Card className="bg-card hover:shadow-lg transition-shadow duration-300 w-full z-10">
                <CardHeader className="items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background mb-4 border">
                    {step.icon}
                  </div>
                  <CardTitle className="font-headline">{step.title}</CardTitle>
                  <CardDescription className="pt-2 h-16">{step.description}</CardDescription>
                </CardHeader>
              </Card>

              {index < journeySteps.length - 1 && (
                <div className="hidden lg:flex absolute top-[calc(50%_-_1px)] left-[calc(50%_+_2rem)] w-full h-0.5 bg-border items-center justify-center">
                   <ChevronRight className="h-8 w-8 text-muted-foreground bg-secondary px-1" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg">Start Your Journey Today</Button>
        </div>
      </div>
    </section>
  );
}
