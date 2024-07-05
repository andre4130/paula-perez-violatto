import CardComponent from '../cardComponent';
import consulting from '../../../../public/images/consulting.jpg';
import research from '../../../../public/images/research.jpg';
import education from '../../../../public/images/education.jpg';
import ShortcutSection from '@/components/femcalculComponents/shortcutSection/shortcutSection';

export default function ServicesOffered() {
  return (
    <ShortcutSection title="Services Offered" mainDivClassName="pt-4x">
      <>
        <CardComponent title={'Consulting'} linkTo={'/consulting'} img={consulting} />
        <CardComponent title={'Education'} linkTo={'/education'} img={education} />
        <CardComponent title={'Research'} linkTo={'/research'} img={research} />
      </>
    </ShortcutSection>
  );
}
