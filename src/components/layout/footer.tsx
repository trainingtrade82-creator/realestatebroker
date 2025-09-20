import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
             <Image src="/lo.png" alt="Sterling & Landis logo" width={140} height={35} className="mb-4"/>
             <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Sterling & Landis. All rights reserved.
             </p>
             <div className="flex items-center space-x-4 mt-4">
                <Link href="#" className="text-muted-foreground transition-colors hover:text-accent">
                    <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-accent">
                    <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-accent">
                    <Youtube className="h-5 w-5" />
                </Link>
             </div>
          </div>
          
          <div className="md:col-span-1">
             <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
             <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent">Privacy</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent">Terms</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent">Careers</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent">Contact</Link></li>
             </ul>
          </div>

          <div className="md:col-span-2">
             <h3 className="font-headline text-lg font-semibold mb-4">Stay Ahead in Global Property & Luxury Living</h3>
             <p className="text-sm text-muted-foreground mb-4">Subscribe to our newsletter for the latest insights, exclusive properties, and lifestyle trends.</p>
             <form className="flex w-full max-w-md">
                <Input type="email" placeholder="Enter your email" className="flex-grow rounded-r-none focus:ring-accent" />
                <Button type="submit" className="rounded-l-none">Subscribe</Button>
             </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
