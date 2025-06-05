import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getFarmsWithLatestSeason = async (_req: Request, res: Response) => {
    try {
        const farms = await prisma.farm.findMany({
            include: {
                FarmSeason: {
                    where:{
                        season:{
                            is:{
                                // Assumption : We want latest season for the current year (or lower)
                                name: {
                                    lte: new Date().getFullYear().toString()
                                }
                            }
                        }
                    },
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

export const getFarmById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const farm = await prisma.farm.findUnique({
            where: { id: Number(id) },
            include: {
                FarmSeason: {
                    include: {
                        season: true
                    },
                    orderBy: {
                        createdAt: 'asc' // assumption the season are created in the order of the timeline
                    }
                }
            }
        });

        if (!farm) {
            return res.status(404).json({ error: 'Farm not found' });
        }

        const farmWithSeasons = {
            id: farm.id,
            name: farm.name,
            createdAt: farm.createdAt,
            seasons: farm.FarmSeason.map(fs => ({
                id: fs.id,
                status: fs.status,
                seasonName: fs.season.name,
                createdAt: fs.createdAt,
                isBaseline: fs.isBaseline
            }))
        };

        res.json(farmWithSeasons);
    } catch (error) {
        console.error('Error fetching farm details:', error);
        res.status(500).json({ error: 'Failed to fetch farm details' });
    }
}; 