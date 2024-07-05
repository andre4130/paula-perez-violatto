interface CvDataProps {
  [key: string]: {
    endDate: string;
    description: JSX.Element;
    startDate?: string;
  }[];
}

export const CvData: CvDataProps = {
  education: [
    {
      startDate: 'October 2008',
      endDate: 'April 2013',
      description: (
        <>
          <strong>PhD in Construction Engineering</strong>, Universitat Politècnica de Catalunya, Spain, March 2013.
        </>
      ),
    },
    {
      startDate: 'October 2006',
      endDate: 'March 2009',
      description: (
        <>
          <strong>MSc in Structures of Civil Engineering</strong>, Universidade do Porto, Portugal, March 2009.
        </>
      ),
    },
    {
      endDate: 'May 2008',
      description: (
        <>
          <strong>Post grade in Structures of Civil Engineering</strong>, Universidade do Porto, Portugal, May 2008.
        </>
      ),
    },
    {
      startDate: 'October 2002',
      endDate: 'March 2007',
      description: (
        <>
          <strong>Civil Engineering Degree</strong>, Universidade de Aveiro, Portugal, March 2007.
        </>
      ),
    },
  ],
  industry: [
    {
      startDate: 'October 2023',
      endDate: 'Present',
      description: (
        <>
          <strong>CEO and Founder</strong> of FEMCalcul consulting, Barcelona, Spain.
        </>
      ),
    },
    {
      startDate: 'August 2022',
      endDate: 'Present',
      description: (
        <>
          <strong>Product Specialist (Freelance)</strong>, DIANA FEA BV, The Netherlands.
        </>
      ),
    },
    {
      startDate: 'March 2020',
      endDate: 'July 2022',
      description: (
        <>
          <strong>Consultant (Freelance)</strong>, DIANA FEA BV, The Netherlands.
        </>
      ),
    },
    {
      startDate: 'August 2016',
      endDate: 'February 2020',
      description: (
        <>
          <strong>Consultant</strong>, DIANA FEA BV, The Netherlands.
        </>
      ),
    },
    {
      startDate: 'July 2015',
      endDate: 'July 2016',
      description: (
        <>
          <strong>Software Development Engineer</strong>, DIANA FEA BV, The Netherlands.
        </>
      ),
    },
  ],
  academia: [
    {
      startDate: 'July 2015',
      endDate: 'March 2016',
      description: (
        <>
          <strong>Postdoctoral Researcher</strong>, Faculty of Civil Engineering and Geosciences, Delft University of
          Technology (TU Delft) Delft, The Netherlands.
        </>
      ),
    },
    {
      startDate: 'April 2013',
      endDate: 'June 2015',
      description: (
        <>
          <strong>Postdoctoral Researcher</strong>, Department of Construction Engineering, Universitat Politècnica de
          Catalunya (UPC), Barcelona.
        </>
      ),
    },
    {
      startDate: 'October 2008',
      endDate: 'April 2013',
      description: (
        <>
          <strong>Researcher, PhD Student</strong>, Department of Construction Engineering, Universitat Politècnica de
          Catalunya (UPC), Barcelona.
        </>
      ),
    },
    {
      startDate: 'April 2007',
      endDate: 'June 2008',
      description: (
        <>
          <strong>Research fellow</strong>, Faculty of Engineering, Department of Civil Engineering, Universidade do
          Porto, Portugal
        </>
      ),
    },
  ],
};
