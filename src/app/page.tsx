import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Problem from '@/components/Problem/Problem';
import Features from '@/components/Features/Features';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Cta from '@/components/Cta/Cta';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
