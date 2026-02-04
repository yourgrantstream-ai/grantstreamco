
export enum OrgType {
  SMALL = 'Small Business / Nonprofit',
  LARGE = 'Large Enterprise / Institution',
  GOVERNMENT = 'Government Agency'
}

export interface PainPoint {
  title: string;
  description: string;
  solution: string;
  icon: string;
}

export interface AssessmentStep {
  id: number;
  label: string;
  description: string;
}
