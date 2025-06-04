import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getFarmsWithLatestSeason = async (_req: Request, res: Response) => {
    try {
        const farms = await prisma.farm.findMany({
            include: {
                FarmSeason: {
                    include: {
                        season: true
                    },
                    orderBy: {
                        createdAt: 'desc'
                    },
                    take: 1
                }
            }
        });

        const farmsWithLatestSeason = farms.map(farm => ({
            id: farm.id,
            name: farm.name,
            createdAt: farm.createdAt,
            latestSeason: farm.FarmSeason[0] ? {
                status: farm.FarmSeason[0].status,
                seasonName: farm.FarmSeason[0].season.name,
                createdAt: farm.FarmSeason[0].createdAt
            } : null
        }));

        res.json(farmsWithLatestSeason);
    } catch (error) {
        console.error('Error fetching farms with latest season:', error);
        res.status(500).json({ error: 'Failed to fetch farms' });
    }
};
