export interface PrivateResearchProps {
  shortTitle: string;
  backgroundImage?: ImageData;
  title: string;
  client: string;
  researchPeriod: string;
  position: string;
  participants: string[];
  goalsAndTasks?: string;
  developedAt?: string;
}

export interface PublicFundingResearchProps extends PrivateResearchProps {
  fundedBy: string;
  participants: string[];
}
