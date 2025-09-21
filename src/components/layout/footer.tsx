import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          
          <div className="hidden sm:flex flex-col">
             <Image src="/lo.png" alt="Sterling & Landis logo" width={140} height={35} className="mb-4"/>
             <p className="text-sm text-muted-foreground">
                Where the world buys property — verified, curated, and exclusive.
             </p>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent">About Us</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent">Careers</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent">Press & Awards</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent">Contact Us</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent">Blog / Insights</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Properties</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent">All Listings</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent">Featured Properties</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent">Fractional Ownership</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent">New Developments</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent">Property Management</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent">Smart-Home Setup</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent">Financing & Mortgages</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent">Legal & Documentation</Link></li>
               <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent">Lifestyle Perks</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Investor Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent">Investment Strategies</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent">Rental Guarantee</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent">Resale Assistance</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-accent">VIP Buyer Program</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted mt-12 pt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                     <h3 className="font-headline text-lg font-semibold mb-4">Stay Ahead in Luxury Real Estate</h3>
                     <p className="text-sm text-muted-foreground mb-4">Get exclusive insights & property alerts.</p>
                </div>
                 <div className="lg:col-span-2">
                     <form className="flex flex-col sm:flex-row w-full max-w-lg gap-2">
                        <Input type="text" placeholder="Name" className="bg-background" />
                        <Input type="email" placeholder="Email" className="bg-background flex-grow" />
                        <Button type="submit" className="w-full sm:w-auto">Subscribe</Button>
                     </form>
                </div>
            </div>
        </div>
        
        <div className="border-t border-muted mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Sterling & Landis. All Rights Reserved.</p>
            <Image src="/lo.png" alt="Sterling & Landis logo" width={100} height={25} className="sm:hidden mt-4 sm:mt-0"/>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-accent">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent">Terms & Conditions</Link>
            <Link href="#" className="hover:text-accent">Cookie Policy</Link>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
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
      </div>
    </footer>
  );
}
