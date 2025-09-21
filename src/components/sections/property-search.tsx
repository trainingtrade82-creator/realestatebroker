"use client";

import { useState, useEffect } from 'react';
import { Building, Home, Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const residentialSubTypes = ["Apartments", "Villas", "Duplex/Penthouse", "Residential Plots"];
const commercialSubTypes = ["Office Spaces", "Shops/Stores", "Showrooms", "Warehouses", "Commercial Plots"];

export default function PropertySearch() {
  const [mainCategory, setMainCategory] = useState('residential');
  const [subTypes, setSubTypes] = useState(residentialSubTypes);
  const [budget, setBudget] = useState([500000, 10000000]);
  const [minBudget, setMinBudget] = useState(budget[0].toString());
  const [maxBudget, setMaxBudget] = useState(budget[1].toString());


  const handleMainCategoryChange = (value: string) => {
    setMainCategory(value);
    if (value === 'residential') {
      setSubTypes(residentialSubTypes);
    } else {
      setSubTypes(commercialSubTypes);
    }
  };
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  }

  const handleSliderChange = (newBudget: number[]) => {
    setBudget(newBudget);
    setMinBudget(newBudget[0].toString());
    setMaxBudget(newBudget[1].toString());
  };

  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setMinBudget(value);
  };

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setMaxBudget(value);
  };
  
  const syncInputToSlider = () => {
    const min = parseInt(minBudget, 10) || 100000;
    const max = parseInt(maxBudget, 10) || 20000000;
    const newMin = Math.max(100000, min);
    const newMax = Math.min(20000000, max);
    
    if (newMin > newMax) {
      setBudget([newMax, newMin]);
    } else {
      setBudget([newMin, newMax]);
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 items-end">
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
                <div className="space-y-3">
                    <div className="flex justify-between items-center gap-2">
                         <div className="flex-1">
                            <label htmlFor="min-budget" className="text-sm font-medium text-muted-foreground">Min Price</label>
                            <Input
                                id="min-budget"
                                type="text"
                                value={new Intl.NumberFormat('en-US').format(Number(minBudget))}
                                onChange={handleMinInputChange}
                                onBlur={syncInputToSlider}
                                className="h-12 text-base"
                            />
                        </div>
                        <span className="pt-6 text-muted-foreground">-</span>
                        <div className="flex-1">
                           <label htmlFor="max-budget" className="text-sm font-medium text-muted-foreground">Max Price</label>
                           <Input
                                id="max-budget"
                                type="text"
                                value={new Intl.NumberFormat('en-US').format(Number(maxBudget))}
                                onChange={handleMaxInputChange}
                                onBlur={syncInputToSlider}
                                className="h-12 text-base"
                            />
                        </div>
                    </div>
                    <Slider
                        min={100000}
                        max={20000000}
                        step={100000}
                        value={budget}
                        onValueChange={handleSliderChange}
                    />
                </div>
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