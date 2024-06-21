import PhotographerSection from '@components/PhotographerSection';
import Faq from '@components/Faq';
import Banner from '@/components/Banner';
import IntroSection from "@components/IntroSection";

export default function HomePage() {
  return (
    <>
      <main>
        <Banner />
        <IntroSection />
      </main>
      <PhotographerSection />
      <Faq />
    </>
  );
}
