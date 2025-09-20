"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#properties', label: 'Properties' },
  { href: '#services', label: 'Services' },
  { href: '#vip', label: 'VIP Club' },
  { href: '#about', label: 'About Us' },
];

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src="/lo.png" alt="Sterling & Landis logo" width={28} height={28} />
          <span className="font-bold font-headline text-lg">Sterling & Landis</span>
        </Link>

        <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="transition-colors hover:text-accent">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Contact Us
          </Button>

          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                   <Link href="/" className="flex items-center space-x-2" onClick={() => setMenuOpen(false)}>
                    <Image src="/lo.png" alt="Sterling & Landis logo" width={28} height={28} />
                    <span className="font-bold font-headline text-lg">Sterling & Landis</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close Menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col items-start space-y-4 p-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-accent"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                 <div className="mt-auto p-4 border-t">
                    <Button className="w-full">Contact Us</Button>
                 </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
