import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const PlansSection = dynamic(() => import('../components/PlansSection'));
const CoverageSection = dynamic(() => import('../components/CoverageSection'));
const FeaturesSection = dynamic(() => import('../components/FeaturesSection'));
const CTASection = dynamic(() => import('../components/CTASection'));
const Footer = dynamic(() => import('../components/Footer'));

export default function Home() {
  return (
    <main
      id="contenido"
      className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_22%),linear-gradient(180deg,#09050F_0%,#09050F_38%,#110A1A_58%,#09050F_100%)]"
    >
      <Navbar />
      <Hero />
      <PlansSection />
      <CoverageSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
