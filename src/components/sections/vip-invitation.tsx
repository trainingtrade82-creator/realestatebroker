import { Button } from '@/components/ui/button';

export default function VipInvitation() {
  return (
    <section 
      id="vip" 
      className="relative py-16 sm:py-24 bg-secondary text-secondary-foreground overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-repeat bg-center opacity-[0.02]"
        style={{ backgroundImage: 'url(/lo.png)', backgroundSize: '100px 100px' }}
      ></div>
       <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary to-secondary/80"></div>

      <div className="container text-center relative z-10 px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Join the Exclusive Buyer Network</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Access properties and perks unavailable anywhere else. Global investors are already reserving top properties — don’t miss out.
        </p>
        <div className="mt-8">
            <Button size="lg">
                Signup
            </Button>
        </div>
      </div>
    </section>
  );
}
