import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import QuoteForm from '@/components/landing/QuoteForm';
import Benefits from '@/components/landing/Benefits';
import Plans from '@/components/landing/Plans';
import About from '@/components/landing/About';
import Testimonials from '@/components/landing/Testimonials';
import HowItWorks from '@/components/landing/HowItWorks';
import FAQ from '@/components/landing/FAQ';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';
import WhatsAppFloatingButton from '@/components/landing/WhatsAppFloatingButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <Plans />
      <QuoteForm />
      <About />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}
