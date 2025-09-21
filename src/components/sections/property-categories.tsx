import { Building, Home, Land, Warehouse, Store, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const residentialCategories = [
  { name: 'Apartments', icon: <Home className="h-8 w-8 text-accent" />, image: 'https://picsum.photos/seed/cat-apt/400/300', hint: 'modern apartment' },
  { name: 'Villas', icon: <Building className="h-8 w-8 text-accent" />, image: 'https://picsum.photos/seed/cat-villa/400/300', hint: 'luxury villa' },
  { name: 'Penthouses', icon: <Briefcase className="h-8 w-8 text-accent" />, image: 'https://picsum.photos/seed/cat-penth/400/300', hint: 'city penthouse' },
  { name: 'Residential Plots', icon: <Land className="h-8 w-8 text-accent" />, image: 'https://picsum.photos/seed/cat-res-plot/400/300', hint: 'land plot' },
];

const commercialCategories = [
  { name: 'Office Spaces', icon: <Briefcase className="h-8 w-8 text-accent" />, image: 'https://picsum.photos/seed/cat-office/400/300', hint: 'modern office' },
  { name: 'Shops / Stores', icon: <Store className="h-8 w-8 text-accent" />, image: 'https://picsum.photos/seed/cat-shop/400/300', hint: 'retail store' },
  { name: 'Showrooms', icon: <Building className="h-8 w-8 text-accent" />, image: 'https://picsum.photos/seed/cat-show/400/300', hint: 'car showroom' },
  { name: 'Warehouses', icon: <Warehouse className="h-8 w-8 text-accent" />, image: 'https://picsum.photos/seed/cat-ware/400/300', hint: 'large warehouse' },
  { name: 'Commercial Plots', icon: <Land className="h-8 w-8 text-accent" />, image: 'https://picsum.photos/seed/cat-com-plot/400/300', hint: 'commercial land' },
];

const CategoryTile = ({ name, image, hint }: { name: string, image: string, hint: string }) => (
  <Card className="group relative overflow-hidden rounded-lg cursor-pointer">
    <Image
      src={image}
      alt={name}
      width={400}
      height={300}
      className="object-cover w-full h-40 transition-transform duration-300 group-hover:scale-110"
      data-ai-hint={hint}
    />
    <div className="absolute inset-0 bg-black/40" />
    <CardContent className="absolute inset-0 flex items-center justify-center p-6">
      <h3 className="text-xl font-headline text-white font-bold text-center">{name}</h3>
    </CardContent>
  </Card>
);


export default function PropertyCategories() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">Explore Residential Properties</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {residentialCategories.map(category => <CategoryTile key={category.name} {...category} />)}
            </div>
        </div>
        <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">Explore Commercial Properties</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
                {commercialCategories.map(category => <CategoryTile key={category.name} {...category} />)}
            </div>
        </div>
      </div>
    </section>
  );
}