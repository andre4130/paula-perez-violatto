import Image from 'next/image';
import SectionWrapper from '@/components/femcalculComponents/SectionWrapper/section-wrapper';
import bannerConsulting from '../../../../public/images/banner-consulting.jpg';
import consultingWorksImage from '../../../../public/images/consulting-works.jpg';
import SectionBanner from '@/components/femcalculComponents/section/components/section-banner';
import SectionIntroText from '@/components/femcalculComponents/section/components/section-intro-text';
import ListElement from '@/components/femcalculComponents/listElement/list-element';
import { Boxes, Briefcase } from 'lucide-react';

export default function ConsultingPage() {
  const iconSize = { height: '22px', width: '22px' };
  const consultingExperience = [
    'Bridge analysis: concrete cracking, force redistribution, metal and concrete creep, shrinkage, dynamic loading, reliability and safety assessment.',
    'Tunnel linings: concrete cracking, precast, contact behavior, soil-structure interactions.',
    'Dam analysis: concrete cracking, soil-structure interactions, structure-fluid interactions, dynamic loading.',
    'Historical structures: masonry cracking, structural failure assessment, strengthening solutions.',
    ' Early age analysis: concrete crack assessment due to cement hydration.',
  ];

  const consultingWorks = [
    'Modelling of structural problems',
    'Review of models',
    'Technical recommendations',
    'Analysis and interpretation of results',
    'Optimization of structural designs',
    'Assessment of structural safety of existing infrastructure',
    'Strengthening solutions for existing infrastructure',
    'Forensic structural analysis',
  ];

  return (
    <>
      <SectionBanner image={bannerConsulting} title="Consulting" />
      <SectionIntroText
        text={
          <>
            <p>
              Nonlinear finite element analysis has become an essential tool for solving complex civil engineering
              problems.
            </p>
            <br />
            <p>
              However, due to its high complexity, in order to achieve accurate predictions of the real structural
              behavior, there is the need for a deep knowledge on the finite element procedures applied to the different
              problems.
            </p>
          </>
        }
      />
      <SectionWrapper title="Experience">
        <div className="flex w-100 justify-between ">
          <div className="max-w-100 md:max-w-[50%]">
            <div className="text-lg md:text-2xl">
              FEM Calcul has more than 10 years of experience on nonlinear finite element analysis of complex structural
              engineering problems applied to different sectors:
            </div>
            <div className="text-sm md:text-lg sm:ml-4 pt-4">
              <ul className={'list-inside'}>
                {consultingExperience.map((experience, i) => (
                  <ListElement
                    key={i}
                    icon={<Boxes width={iconSize.width} height={iconSize.height} />}
                    text={<>{experience}</>}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="hidden md:max-w-50 md:block">
            <Image src={'/images/FEM-beam.jpg'} height={500} width={500} alt={'consulting-1'} className="rounded-2xl" />
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper title="Consulting Works" boxClassNames="md:justify-end">
        <div className="flex w-100 justify-between">
          <div className="hidden md:block md:max-w-50">
            <Image
              src={'/images/consulting-works.jpg'}
              height={550}
              width={550}
              alt={'consulting-2'}
              className="rounded-2xl"
            />
          </div>
          <div className="md:max-w-[40%]">
            <div className="text-lg md:text-2xl">
              FEM Calcul offers the following consulting works in the ambit of nonlinear finite element analysis:
            </div>
            <div className="text-sm md:text-lg sm:ml-10 pt-4">
              <ul className={'list-inside'}>
                {consultingWorks.map((work, i) => (
                  <ListElement
                    key={i}
                    icon={<Briefcase width={iconSize.width} height={iconSize.height} />}
                    text={<>{work}</>}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
