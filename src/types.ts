export interface Project {
  id: string;
  name: string;
  location: string;
  category: string; // Residential, Commercial, Institutional, Hospitality, Healthcare, Education, Urban Design
  shortDescription: string;
  description: string;
  challenge: string;
  concept: string;
  response: string;
  technicalStrategy: string;
  experience: string;
  impact: string;
  year: string;
  client: string;
  area: string;
  budget: string;
  imageUrl: string;
  images: string[];
  blueprintUrl?: string; // Standard blueprint schematic fallback
  drawings?: string[]; // Multiple detail lines or elements
  facts: { label: string; value: string }[];
}

export interface Expertise {
  id: string;
  name: string;
  heroImage: string;
  tagline?: string;
  presentation: string;
  methodology: string[];
  cases: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface LabConcept {
  id: string;
  title: string;
  category: string; // Future African Cities, Future Housing, Smart Villages, Green Africa, African Heritage Reimagined
  tagline: string;
  description: string;
  renders: string[];
  researchObjectives: string[];
  materialsUsed: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
}
