import Hero from '@/components/home/Hero';
import Ticker from '@/components/home/Ticker';
import Stats from '@/components/home/Stats';
import PainPoints from '@/components/home/PainPoints';
import TechCompare from '@/components/home/TechCompare';
import Products from '@/components/home/Products';
import Applications from '@/components/home/Applications';
import Certs from '@/components/home/Certs';
import CaseStudies from '@/components/home/CaseStudies';
import RoiCalculator from '@/components/home/RoiCalculator';
import Rfq from '@/components/home/Rfq';
import { applications, caseStudies, certifications, stats } from '@/data/content';
import { products } from '@/data/products';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <Stats items={stats} />
      <PainPoints />
      <TechCompare />
      <Products items={products} />
      <Applications items={applications} />
      <Certs items={certifications} />
      <CaseStudies items={caseStudies} />
      <RoiCalculator />
      <Rfq />
    </>
  );
}
