import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import PropertySearch from '@/components/sections/property-search';
import PropertyCategories from '@/components/sections/property-categories';

export default function PropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <PropertySearch />
        <PropertyCategories />
        {/* Featured Properties and Listings will go here */}
      </main>
      <Footer />
    </div>
  );
}