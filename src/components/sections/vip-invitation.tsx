import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function VipInvitation() {
  return (
    <section 
      id="vip" 
      className="relative py-16 sm:py-24 bg-primary text-primary-foreground overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-repeat bg-center opacity-5"
        style={{ backgroundImage: 'url(/logo.png)', backgroundSize: '100px 100px' }}
      ></div>
       <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary to-primary/80"></div>

      <div className="container text-center relative z-10">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-accent">Join the Inner Circle</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
          Become a VIP buyer for exclusive access to off-market properties, priority viewings, and a world of luxury perks. Membership is by invitation only.
        </p>
        <div className="mt-8">
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Request Invitation
            </Button>
        </div>
      </div>
    </section>
  );
}
