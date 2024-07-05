import SectionBanner from '@/components/femcalculComponents/section/components/section-banner';
import React from 'react';
import cv from '../../../../public/images/CV.jpg';
import SectionWrapper from '@/components/femcalculComponents/SectionWrapper/section-wrapper';
import CvInfoRow from './(components)/cv-info-row';
import { CvData } from './(constants)/CvData';
import { Button } from '@/components/ui/button';
import { BookKey, Download } from 'lucide-react';
import ListElement from '@/components/femcalculComponents/listElement/list-element';
import { Publications } from './(constants)/Publications';

export default function CvPage() {
  return (
    <>
      <SectionBanner image={cv} title="Curriculum Vitae" divClassName="bg-bottom" />
      <SectionWrapper title="Education">
        <>
          {CvData.education.map((element, i) => (
            <CvInfoRow
              key={i}
              description={element.description}
              startDate={element.startDate}
              endDate={element.endDate}
            />
          ))}
        </>
      </SectionWrapper>
      <SectionWrapper title="Experience in Industry">
        <>
          {CvData.industry.map((element, i) => (
            <CvInfoRow
              key={i}
              description={element.description}
              startDate={element.startDate}
              endDate={element.endDate}
            />
          ))}
        </>
      </SectionWrapper>
      <SectionWrapper title="Experience in Academia">
        <>
          {CvData.academia.map((element, i) => (
            <CvInfoRow
              key={i}
              description={element.description}
              startDate={element.startDate}
              endDate={element.endDate}
            />
          ))}
        </>
      </SectionWrapper>
      <SectionWrapper title="Top 5 Publications cited as first author">
        <ul className="max-w-[85%]">
          {Publications.map((element, i) => (
            <ListElement key={i} icon={<BookKey height={22} width={22} />} text={element} />
          ))}
        </ul>
      </SectionWrapper>

      <div className="fixed top-[356px] right-[calc((100vw-1368px)/2)] py-10">
        <a href="/CV_DeniseFerreira.pdf" download="cv_denise_ferreira">
          <Button>
            <Download className="pr-2" /> Download CV
          </Button>
        </a>
      </div>
    </>
  );
}
