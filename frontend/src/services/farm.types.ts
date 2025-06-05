export interface FarmTypeI {
  id: number;
  name: string;
  email: string;
  partner: string | null;
  contact: string | null;
  createdAt: Date;
  farmSeason?: FarmSeasonI[];
};

export const FarmSeasonStatus = {
  SUBSCRIBED: "SUBSCRIBED",
  ACTIVE: "ACTIVE",
  COMPLETED: "COMPLETED",
  INACTIVE: "INACTIVE",
} as const;

export type FarmSeasonStatusI =
  (typeof FarmSeasonStatus)[keyof typeof FarmSeasonStatus];


export interface FarmSeasonI {
  id: number;
  farmId: number;
  seasonId: number;
  status: FarmSeasonStatusI;
  isBaseline: string;
  createdAt: Date;

  farm?: FarmTypeI;
  season?: SeasonTypeI;
};

export interface SeasonTypeI {
  id: number;
  name: string;
  createdAt: Date;
};