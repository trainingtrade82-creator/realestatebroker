import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function VipInvitation() {
  return (
    <section id="vip" className="py-16 sm:py-24 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-accent">Join the Inner Circle</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
          Become a VIP buyer for exclusive access to off-market properties, priority viewings, and a world of luxury perks. Membership is by invitation only.
        </p>
        <form className="mt-8 max-w-sm mx-auto flex gap-2">
          <Input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-grow bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border-primary-foreground/20 focus:ring-accent"
          />
          <Button type="submit" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            Request Invitation
          </Button>
        </form>
      </div>
    </section>
  );
}
