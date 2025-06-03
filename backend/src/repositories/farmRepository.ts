import { PrismaClient,  } from "@prisma/client";
import { FarmType } from "../types/farm";

const prisma = new PrismaClient();

// Include & all data selction should be handled in controllers via filter/sorting options

export const listFarms = async (where?: any): Promise<FarmType[]> => {
  const result = await prisma.farm.findMany({
    where,
    include: {
      farmSeason: {
        where: {
          isBaseline: true
        }
      }
    }
  });

  return result;
};

export const getFarmById = async (id: number): Promise<FarmType | null> => {
  const result = await prisma.farm.findUnique({
    where: {
      id
    },
    include: {
      farmSeason: {
        include: {
          season: true
        }
      }
    }
  });

  return result;
};

// Should we disconnect Prisma after querying ?