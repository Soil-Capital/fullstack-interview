
export interface FarmSeason {
    id: string;
    status: string;
    seasonName: string;
    createdAt: string;
    isBaseline: boolean;
  }
  
  export interface Farm {
    id: string;
    name: string;
    createdAt: string;
  }
  
  export interface FarmWithLatestSeason {
    id: string;
    name: string;
    createdAt: string;
    latestSeason: FarmSeason | null;
  }
  
  export interface FarmWithSeasons {
    id: string;
    name: string;
    createdAt: string;
    seasons: FarmSeason[];
  }
  
  
  export enum FarmSeasonStatus {
    SUBSCRIBED = 'SUBSCRIBED', // The farmer has subscribed to the baseline (reference year) or has renewed for a new season
    ACTIVE = 'ACTIVE', // The farmer is currently encoding the farm's data, or the carbon results generation are on their way
    COMPLETED = 'COMPLETED', // The season is finalized. Carbon results have been generated, the farm is either being audited or the farm has received their carbon payment thanks to their practices improvements
    INACTIVE = 'INACTIVE', // The season has not started yet
  }