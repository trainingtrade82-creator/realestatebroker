"use client";

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Building, Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const residentialSubTypes: string[] = ["Apartment", "Villa", "Penthouse", "Residential Plot"];
const commercialSubTypes: string[] = ["Office Space", "Shop/Store", "Showroom", "Warehouse", "Commercial Plot"];

export default function PropertySearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [location, setLocation] = useState(searchParams.get('location') || '');
  const [buyRent, setBuyRent] = useState(searchParams.get('buyRent') || 'buy');
  const [category, setCategory] = useState(searchParams.get('category') || 'residential');
  const [subtype, setSubtype] = useState(searchParams.get('subtype') || '');

  const subTypes = category === 'residential' ? residentialSubTypes : commercialSubTypes;

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setSubtype(''); // Reset subtype when category changes
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.set('location', location);
    if (buyRent) params.set('buyRent', buyRent);
    if (category) params.set('category', category);
    if (subtype) params.set('subtype', subtype);
    
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <section className="py-16 sm:py-20 bg-secondary">
      <div className="container px-4 sm:px-6 lg:px-8">
        <Card className="max-w-5xl mx-auto p-4 sm:p-8 shadow-lg">
          <CardContent className="p-0 sm:p-2">
            <Tabs value={buyRent} onValueChange={setBuyRent} className="mb-4">
              <TabsList className="grid w-full grid-cols-2 max-w-xs mx-auto">
                <TabsTrigger value="buy">Buy</TabsTrigger>
                <TabsTrigger value="rent">Rent</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-4">
              <Input
                type="search"
                placeholder="Search by city (e.g., Mumbai, Delhi)"
                className="h-12 text-base"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <Tabs value={category} onValueChange={handleCategoryChange} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                   <TabsTrigger value="residential" className="h-10">
                    <Home className="mr-2 h-5 w-5" /> Residential
                  </TabsTrigger>
                  <TabsTrigger value="commercial" className="h-10">
                    <Building className="mr-2 h-5 w-5" /> Commercial
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            <div className="grid grid-cols-1 gap-4 mb-6 items-end">
                <Select value={subtype} onValueChange={setSubtype}>
                    <SelectTrigger className="h-12 text-base">
                        <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                        {subTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                            {type}
                        </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <Button size="lg" className="w-full h-12 text-lg font-bold" onClick={handleSearch}>
              <Search className="mr-2 h-5 w-5" />
              Find Properties
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
