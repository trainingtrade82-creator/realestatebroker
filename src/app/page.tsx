import Navbar from '@/components/layout/navbar';
import Hero from '@/components/sections/hero';
import ValueProps from '@/components/sections/value-props';
import FeaturedProperties from '@/components/sections/featured-properties';
import VipInvitation from '@/components/sections/vip-invitation';
import LifestyleServices from '@/components/sections/lifestyle-services';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ValueProps />
        <FeaturedProperties />
        <VipInvitation />
        <LifestyleServices />
      </main>
      <Footer />
    </div>
  );
}
