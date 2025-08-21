import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import RitualsSection from '@/components/RitualsSection';
import FAQSection from '@/components/FAQSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-mystic text-white font-open">
      <Navigation />
      <HeroSection />
      <RitualsSection />
      <FAQSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;