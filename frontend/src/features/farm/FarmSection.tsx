import { FarmAPI } from '@/api';
import type { FarmWithLatestSeason, FarmWithSeasons } from '@/api';
import {
    Alert,
    Box,
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useFarmStyle from './FarmSection.style';
import FarmSeasonModal from './Modal/FarmSeasonModal';

interface FarmState {
    farms: FarmWithLatestSeason[];
    loading: boolean;
    errorFarms: string | null;
}

export default function FarmSection() {
    const { classes } = useFarmStyle();
    const { t } = useTranslation();
    
    // section states
    const [farms, setFarms] = useState<FarmWithLatestSeason[]>([]);
    const [loadingFarms, setLoadingFarms] = useState(true);
    const [errorFarms, setErrorFarms] = useState<string | null>(null);

    // modal states
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFarm, setSelectedFarm] = useState<FarmWithSeasons | null>(null);
    const [loadingFarmSeasons, setLoadingFarmSeasons] = useState(true);
    const [errorFarmSeasons, setErrorFarmSeasons] = useState<string | null>(null);

    useEffect(() => {
        const fetchFarms = async () => {
            try {
                const farms = await FarmAPI.getFarms();
                setFarms(farms);
                setLoadingFarms(false);

            } catch (err) {
                console.error('ErrorFarms fetching farms:', err);
                setErrorFarms('Failed to fetch farms. Please try again later.');
                setLoadingFarms(false);
            }
        };

        fetchFarms();
    }, []);

    if (loadingFarms) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
                <CircularProgress />
            </div>
        );
    }

    if (errorFarms) {
        return (
            <div style={{ padding: '1rem' }}>
                <Alert severity="error">{errorFarms}</Alert>
            </div>
        );
    }

    if (farms.length === 0) {
        return (
            <div style={{ padding: '1rem' }}>
                <Alert severity="info">{t('errorFarmss.no-farms')}</Alert>
            </div>
        );
    }

    
    const handleFarmClick = async (farmId: string) => {
        setLoadingFarmSeasons(true);
        try {
            const farmWithSeasons = await FarmAPI.getFarmSeasons(farmId);
            setSelectedFarm(farmWithSeasons);
            setIsModalOpen(true);
        } catch (err) {
            console.error('ErrorFarms fetching farm seasons:', err);
            setErrorFarmSeasons('Failed to fetch farm seasons. Please try again later.');
        } finally {
            setLoadingFarmSeasons(false);
        }
    };


    return (
        <Box className={classes.container}>
            <>
                <Typography paddingBottom={4} variant="h3" color="secondary">
                    {t('titles.farms')}
                </Typography>
                <TableContainer 
                    component={Paper} 
                    sx={{ 
                        width: '98%',
                        overflowX: 'auto'
                    }}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="farms table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" sx={{ fontWeight: 'bold' }}>{t('farms.name')}</TableCell>
                                <TableCell align="left" sx={{ fontWeight: 'bold' }}>{t('farms.latest-season-name')}</TableCell>
                                <TableCell align="left" sx={{ fontWeight: 'bold' }}>{t('farms.latest-season-status')}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {farms.map((farm) => (
                                <TableRow
                                    key={farm.id}
                                    sx={{ 
                                        '&:last-child td, &:last-child th': { border: 0 },
                                        cursor: 'pointer',
                                        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' }
                                    }}
                                    onClick={() => handleFarmClick(farm.id)}
                                >
                                    <TableCell component="th" scope="row">
                                        {farm.name}
                                    </TableCell>
                                    <TableCell>{farm.latestSeason?.seasonName}</TableCell>
                                    <TableCell>{t(`farms.seasons.status.${farm.latestSeason?.status.toLowerCase()}`)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <FarmSeasonModal
                    open={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    farm={selectedFarm}
                    loading={loadingFarmSeasons}
                    error={errorFarmSeasons}
                />
            </>
        </Box>
    );
}
