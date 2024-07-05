import SectionBanner from '@/components/femcalculComponents/section/components/section-banner';
import SectionIntroText from '@/components/femcalculComponents/section/components/section-intro-text';
import research from '../../../../public/images/research.jpg';
import SectionWrapper from '@/components/femcalculComponents/SectionWrapper/section-wrapper';
import { PublicFundingResearch } from './(config)/publicFundingResearch';
import ResearchCard from './(components)/research-card';
import { privateResearch } from './(config)/privateResearch';

export default function ResearchPage() {
  return (
    <>
      <SectionBanner image={research} title="Research" style={{ backgroundPosition: 'center' }} />
      <SectionIntroText
        text={
          'FEM Calcul is built on more than 10 years of research on computational methods applied to structural civil engineering.'
        }
      />
      <SectionWrapper title={'Research with Public Funding'}>
        <div className="grid  grid-flow-col gap-6 grid-cols-1 grid-rows-5 md:grid-cols-3 md:grid-rows-2">
          {PublicFundingResearch.map((research) => (
            <ResearchCard researchInfo={research} />
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper title={'Participation in contracts for research, consultancy & development'}>
        <div className="grid  grid-flow-col gap-6 grid-cols-1 grid-rows-5 md:grid-cols-3 md:grid-rows-2">
          {privateResearch.map((research) => (
            <ResearchCard researchInfo={research} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
