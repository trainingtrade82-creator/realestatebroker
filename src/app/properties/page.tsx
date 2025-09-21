import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import PropertySearch from '@/components/sections/property-search';
import PropertyListings from '@/components/sections/property-listings';
import { Suspense } from 'react';

function PropertyListingsFallback() {
  return (
    <div className="container px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
       <div className="text-center">Loading properties...</div>
    </div>
  )
}

export default function PropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <PropertySearch />
        <Suspense fallback={<PropertyListingsFallback />}>
          <PropertyListings />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
