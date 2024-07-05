import SectionBanner from '@/components/femcalculComponents/section/components/section-banner';
import education from '../../../../public/images/education.jpg';
import SectionIntroText from '@/components/femcalculComponents/section/components/section-intro-text';
import SectionWrapper from '@/components/femcalculComponents/SectionWrapper/section-wrapper';
import Image from 'next/image';
import ListElement from '@/components/femcalculComponents/listElement/list-element';
import { GraduationCap } from 'lucide-react';

export default function EducationPage() {
  const educationList = [
    'Introduction to finite element analysis',
    'Nonlinear finite element analysis',
    'Parametrization of models and analysis automation',
    'Discrete and smeared cracking simulation in concrete structures',
    'Early age concrete cracking',
    'Meso and macro modelling of masonry structures',
    'Discrete and embedded reinforcement',
    'Numerical stability of nonlinear finite element analysis',
    'Interpretation of finite element results',
  ];

  return (
    <>
      <SectionBanner image={education} title="Education" />
      <SectionIntroText
        text={
          <>
            <p>
              FEM Calcul has more than 10 years of experience on finite element educational to both professional and
              academic sectors.
            </p>
            <br />
            <p>
              FEM Calcul offers courses of finite element analysis from beginners, to intermediate and advanced levels.
              These courses are designed to equip students with knowledge on the background of the finite element method
              in order to apply it with confidence and critical thinking to real engineering problems
            </p>
          </>
        }
      />

      <SectionWrapper title="Education Services">
        <div className="flex w-100 justify-between ">
          <div className="max-w-100 md:max-w-[50%]">
            <div className="text-lg md:text-2xl">
              FEM Calcul offers courses to individual persons, groups from commercial companies, universities or
              research organizations. The courses are designed to suit the needs of each client and focus on their areas
              of interest. Popular topics of the FEM Calcul courses are:
            </div>
            <div className="text-sm md:text-lg :ml-6 pt-4">
              <ul className={'list-inside'}>
                {educationList.map((element, i) => (
                  <ListElement key={i} icon={<GraduationCap height={'22px'} width={'22px'} />} text={<>{element}</>} />
                ))}
              </ul>
            </div>
          </div>
          <div className="hidden md:max-w-50 md:block">
            <Image
              src={'/images/education-students.jpg'}
              height={600}
              width={600}
              alt={'education'}
              className="rounded-2xl"
            />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
