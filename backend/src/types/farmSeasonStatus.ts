export const FarmSeasonStatus = {
  SUBSCRIBED: "SUBSCRIBED",
  ACTIVE: "ACTIVE",
  COMPLETED: "COMPLETED",
  INACTIVE: "INACTIVE",
} as const;

export type FarmSeasonStatusType =
  (typeof FarmSeasonStatus)[keyof typeof FarmSeasonStatus];
