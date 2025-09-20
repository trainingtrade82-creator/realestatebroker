"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const navLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Properties',
    submenu: [
      { label: 'Residential', href: '#' },
      { label: 'Commercial', href: '#' },
      { label: 'Luxury', href: '#' },
      { label: 'Fractional Investment', href: '#' },
    ],
  },
  {
    label: 'Luxury & Lifestyle',
    submenu: [
      { label: 'Interior design', href: '#' },
      { label: 'Furniture', href: '#' },
      { label: 'Electronics', href: '#' },
      { label: 'Memberships', href: '#' },
    ],
  },
  {
    label: 'Investment & Returns',
    submenu: [
        { label: 'Resale', href: '#' },
        { label: 'Rental guarantees', href: '#' },
        { label: 'Fractional ownership', href: '#' },
        { label: 'ROI calculators', href: '#' },
    ],
  },
  {
    label: 'Services',
    submenu: [
      { label: 'Property management', href: '#' },
      { label: 'Smart-home setup', href: '#' },
      { label: 'Financing', href: '#' },
      { label: 'Legal support', href: '#' },
    ],
  },
    {
    label: 'Partners',
    submenu: [
        { label: 'Furniture', href: '#' },
        { label: 'Electronics', href: '#' },
        { label: 'Lifestyle', href: '#' },
        { label: 'Banking', href: '#' },
        { label: 'Insurance partners', href: '#' },
    ],
  },
  { label: 'About Us', href: '#about' },
  { label: 'Insights / Blog', href: '#' },
  { label: 'Contact / Consultation', href: '#' },

];

function NavMenu({ closeMenu }: { closeMenu?: () => void }) {
  return (
    <>
      {navLinks.map((link) =>
        link.submenu ? (
          <DropdownMenu key={link.label}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 hover:text-accent">
                {link.label}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {link.submenu.map((sublink) => (
                <DropdownMenuItem key={sublink.label} asChild>
                  <Link href={sublink.href} onClick={closeMenu}>{sublink.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            key={link.label}
            href={link.href}
            className="transition-colors hover:text-accent px-4 py-2"
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        )
      )}
    </>
  );
}


function MobileNavMenu({ closeMenu }: { closeMenu: () => void }) {
  return (
    <nav className="flex flex-col items-start space-y-2 p-4">
      {navLinks.map((link) =>
        link.submenu ? (
          <Collapsible key={link.label} className="w-full">
            <CollapsibleTrigger className="flex justify-between items-center w-full text-lg font-medium py-2">
              {link.label}
              <ChevronDown className="h-5 w-5" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="flex flex-col space-y-2 pl-4 pt-2">
                {link.submenu.map((sublink) => (
                  <Link
                    key={sublink.label}
                    href={sublink.href}
                    className="text-base font-medium transition-colors hover:text-accent"
                    onClick={closeMenu}
                  >
                    {sublink.label}
                  </Link>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ) : (
          <Link
            key={link.label}
            href={link.href}
            className="text-lg font-medium transition-colors hover:text-accent py-2"
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        )
      )}
    </nav>
  );
}

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src="/lo.png" alt="Sterling & Landis logo" width={40} height={40} />
        </Link>

        <nav className="hidden flex-1 items-center space-x-1 text-sm font-medium md:flex">
          <NavMenu />
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
           <Button className="hidden md:inline-flex" variant="ghost">Contact</Button>
           <Button className="hidden md:inline-flex">VIP Login</Button>

          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-sm p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                   <Link href="/" className="flex items-center space-x-2" onClick={() => setMenuOpen(false)}>
                    <Image src="/lo.png" alt="Sterling & Landis logo" width={40} height={40} />
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close Menu</span>
                  </Button>
                </div>
                <div className="flex-grow overflow-y-auto">
                    <MobileNavMenu closeMenu={() => setMenuOpen(false)} />
                </div>
                 <div className="mt-auto p-4 border-t grid grid-cols-2 gap-2">
                    <Button variant="ghost" className="w-full">Contact</Button>
                    <Button className="w-full">VIP / Members Login</Button>
                 </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
