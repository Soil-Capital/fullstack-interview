import { FarmType } from './farm';
import { SeasonType } from './season';
import { FarmSeasonStatusType } from './farmSeasonStatus';

export type FarmSeason = {
  id: number;
  farmId: number;
  seasonId: number;
  status: FarmSeasonStatusType;
  isBaseline: string;
  createdAt: Date;

  farm?: FarmType;
  season?: SeasonType;
};