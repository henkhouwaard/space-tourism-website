// Images type for common image formats
type Images = {
  png: string;
  webp: string;
};

// Destination type
type Destination = {
  name: string;
  images: Images;
  description: string;
  distance: string;
  travel: string;
};

// Crew member type
export type CrewMember = {
  name: string;
  images: Images;
  role: string;
  bio: string;
};

// Technology images type for both portrait and landscape
type TechnologyImages = {
  portrait: string;
  landscape: string;
};

// Technology type
type Technology = {
  name: string;
  images: TechnologyImages;
  description: string;
};

// Main data structure type
export type SpaceData = {
  destinations: Destination[];
  crew: CrewMember[];
  technology: Technology[];
};
