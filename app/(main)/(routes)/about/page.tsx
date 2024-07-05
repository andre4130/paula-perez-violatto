import Image from 'next/image';
import denise from '../../../../public/images/denise.jpg';
import SectionWrapper from '@/components/femcalculComponents/SectionWrapper/section-wrapper';
import { SectionMainTextFormatter } from '@/components/femcalculComponents/SectionWrapper/components/section-main-text-formatter';
import { ValuesCard } from './components/values-card';
import { Boxes, PencilRuler, Scale } from 'lucide-react';
export default function AboutPage() {
  return (
    <>
      <div className="flex justify-center pt-8">
        <Image src={denise} alt={'denise_ferreira'} height={370} width={370} className="rounded-2xl" />
      </div>

      <>
        <div className="w-100 flex justify-center pt-10">
          <p className=" max-w-2xl text-text-primary font-normal text-justify align-middle  italic text-2xl">
            "<strong>FEM CALCUL</strong> brings together more than 10 years of experience in both academia and industry
            in the ambit of complex nonlinear finite element analysis, to help engineers achieving accurate and
            efficient simulations of complex structural problems."
          </p>
        </div>
        <SectionWrapper title={'Academic career'}>
          <SectionMainTextFormatter>
            <>
              <strong>Dr. Denise Ferreira</strong>, the founder and CEO of FEM Calcul, obtained her <strong>MSc</strong>{' '}
              in Civil Structural Engineering from Universidade do Porto (FEUP), Portugal (2009) and her{' '}
              <strong>PhD</strong> from Universitat Politècnica de Catalunya (UPC), Barcelona (2013). She worked as a
              university lecturer and researcher being involved in several projects focused on the analysis of concrete
              structures, covering both numerical and experimental fields. She has worked as a researcher in
              Universidade do Porto, Universitat Politècnica de Catalunya and Delft University of Technology
            </>
          </SectionMainTextFormatter>
        </SectionWrapper>
        <SectionWrapper title={'Professional career'}>
          <SectionMainTextFormatter>
            <>
              She has worked at DIANA FEA BV, in The Netherlands, since 2016 taken different roles: kernel developer,
              documentation curator for the DIANA developments, training tutor, client support engineer and product
              specialist. She is a DIANA Expert and, with FEM Calcul, she continues her technical collaboration with the
              respective organization.
            </>
          </SectionMainTextFormatter>
        </SectionWrapper>
        <SectionWrapper title={'Our mission'}>
          <SectionMainTextFormatter>
            <>
              At <strong>FEM Calcul</strong> we are committed to high standards, to delivering high quality work and
              always finding the best solutions for the most complex engineering problems. Our final goal is to help
              structural engineers achieving safer, more economical and overall optimized civil infrastructure.
            </>
          </SectionMainTextFormatter>
        </SectionWrapper>

        <SectionWrapper title={'Our values'}>
          <>
            <ValuesCard
              icon={<Boxes width={'44px'} height={'44px'} />}
              text={
                <>
                  <strong>FEM</strong>, of course, is the acronym of <strong>FINITE ELEMENT METHOD</strong>. We are
                  experts on using the finite element method to optimize engineering structural solutions.
                </>
              }
            />
            <ValuesCard
              icon={<PencilRuler width={'44px'} height={'44px'} />}
              text={
                <>
                  FEM Calcul is based in Barcelona, Catalunya. <strong>FEM</strong> is the verb <strong>TO DO</strong>{' '}
                  in Catalan language. We like to take challenges and to get things done.
                </>
              }
            />
            <ValuesCard
              icon={<Scale width={'44px'} height={'44px'} />}
              text={
                <>
                  We support the raising of the <strong>FEMinine</strong> leadership in the STEM field. We believe that
                  equal opportunities for both women and men and equal representativeness in business will lead to a
                  better world.
                </>
              }
            />
          </>
        </SectionWrapper>
      </>
    </>
  );
}
