"use client";

import { useState } from 'react';
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const residentialSubTypes = ["Apartments", "Villas", "Duplex/Penthouse", "Residential Plots"];
const commercialSubTypes = ["Office Spaces", "Shops/Stores", "Showrooms", "Warehouses", "Commercial Plots"];

export default function PropertySearch() {
  const [mainCategory, setMainCategory] = useState('residential');
  const [subTypes, setSubTypes] = useState(residentialSubTypes);

  const handleMainCategoryChange = (value: string) => {
    setMainCategory(value);
    if (value === 'residential') {
      setSubTypes(residentialSubTypes);
    } else {
      setSubTypes(commercialSubTypes);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-secondary">
      <div className="container px-4 sm:px-6 lg:px-8">
        <Card className="max-w-5xl mx-auto p-4 sm:p-8 shadow-lg">
          <CardContent className="p-0 sm:p-2">
            <Tabs defaultValue="buy" className="mb-4">
              <TabsList className="grid w-full grid-cols-2 max-w-xs mx-auto">
                <TabsTrigger value="buy">Buy</TabsTrigger>
                <TabsTrigger value="rent">Rent</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-4">
              <Input
                type="search"
                placeholder="Search by city, area, or landmark..."
                className="h-12 text-base"
              />
              <Tabs value={mainCategory} onValueChange={handleMainCategoryChange} className="w-full">
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
                <Select>
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

            <Button size="lg" className="w-full h-12 text-lg font-bold">
              <Search className="mr-2 h-5 w-5" />
              Find Properties
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
