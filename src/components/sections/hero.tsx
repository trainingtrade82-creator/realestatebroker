import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-banner');

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-primary-foreground">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto text-center animate-fade-in-up">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-white">
          Access Global Real Estate, Redefined.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80">
          Your gateway to the world&apos;s most exclusive properties and unparalleled buyer benefits.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#properties">Explore Properties</a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
             <a href="#vip">Join VIP Buyers</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
