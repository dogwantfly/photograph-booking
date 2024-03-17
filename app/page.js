import PhotographerSection from '@components/PhotographerSection';
import Faq from '@components/Faq';
import Banner from '@/components/Banner';

export default function HomePage() {
  return (
    <>
      <main>
        <Banner />
      </main>
      <PhotographerSection />
      <Faq />
    </>
  );
}
