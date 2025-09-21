import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import PropertySearch from '@/components/sections/property-search';
import PropertyListings from '@/components/sections/property-listings';

export default function PropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <PropertySearch />
        <PropertyListings />
      </main>
      <Footer />
    </div>
  );
}
