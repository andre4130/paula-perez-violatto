import CardComponent from '../cardComponent';
import cv from '../../../../public/images/CV.jpg';
import contact from '../../../../public/images/contact.jpg';
import about from '../../../../public/images/denise.jpg';
import ShortcutSection from '@/components/femcalculComponents/shortcutSection/shortcutSection';

export default function AboutShortcut() {
  return (
    <ShortcutSection title="About us" mainDivClassName="bg-gray-200">
      <>
        <CardComponent title={'About'} linkTo={'/about'} img={about} />
        <CardComponent title={'Contact'} linkTo={'/contact'} img={contact} />
        <CardComponent title={'CV'} linkTo={'/cv'} img={cv} />
      </>
    </ShortcutSection>
  );
}
