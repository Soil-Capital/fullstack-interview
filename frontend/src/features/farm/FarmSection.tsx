import { FarmAPI } from '@/api';
import type { FarmWithLatestSeason } from '@/api/farm/FarmAPI';
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

interface FarmState {
    farms: FarmWithLatestSeason[];
    loading: boolean;
    error: string | null;
}

export default function FarmSection() {

    const { classes } = useFarmStyle();
    const { t } = useTranslation();

    const [farms, setFarms] = useState<FarmWithLatestSeason[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFarms = async () => {
            try {
                const farms = await FarmAPI.getFarms();
                setFarms(farms);
                setLoading(false);

            } catch (err) {
                console.error('Error fetching farms:', err);
                setError('Failed to fetch farms. Please try again later.');
                setLoading(false);
            }
        };

        fetchFarms();
    }, []);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
                <CircularProgress />
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ padding: '1rem' }}>
                <Alert severity="error">{error}</Alert>
            </div>
        );
    }

    if (farms.length === 0) {
        return (
            <div style={{ padding: '1rem' }}>
                <Alert severity="info">{t('errors.no-farms')}</Alert>
            </div>
        );
    }

    return (
        <Box className={classes.container}>
            <>
                <Typography paddingBottom={4} variant="h3" color="secondary">
                    {t('titles.farms')}
                </Typography>
                <TableContainer 
                    component={Paper} 
                    sx={{ 
                        width: '90%',
                        overflowX: 'auto'
                    }}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="farms table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" sx={{ fontWeight: 'bold' }}>{t('farms.name')}</TableCell>
                                <TableCell align="left" sx={{ fontWeight: 'bold' }}>{t('farms.latest-season-status')}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {farms.map((farm) => (
                                    <TableRow
                                        key={farm.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {farm.name}
                                        </TableCell>
                                        <TableCell>{farm.latestSeason?.status}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        </Box>
    );
}
