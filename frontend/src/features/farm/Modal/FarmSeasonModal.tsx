import { Alert, CircularProgress, Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { FarmWithSeasons } from '@/api';
import { FarmSeasonStatus } from '@/api/farm/FarmAPI.types';
import { Check, Circle } from '@mui/icons-material';

interface FarmSeasonModalProps {
    open: boolean;
    onClose: () => void;
    farm: FarmWithSeasons | null;
    loading: boolean;
    error: string | null;
}

export default function FarmSeasonModal({ open, onClose, farm, loading, error }: FarmSeasonModalProps) {
    const { t } = useTranslation();

    if (error) {
        return (
            <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
                <Alert severity="error">{error}</Alert>
            </Dialog>
        );
    }

    if (loading) {
        return (
            <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
                    <CircularProgress />
                </div>
            </Dialog>
        );
    }

    if (!farm)
        return (
            <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
                <Alert severity="error">{t('errors.farm-not-found')}</Alert>
            </Dialog>
        );

    return (
        <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
            <DialogTitle>
                <Typography variant="h5" component="div">
                    {farm.name} - {t('titles.seasons')}
                </Typography>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Timeline position="alternate">
                    {farm.seasons.map((season) => (
                        <TimelineItem key={season.id}>
                            <TimelineSeparator>
                                {season.status === FarmSeasonStatus.SUBSCRIBED && (
                                    <TimelineDot color="primary">
                                        <Circle />
                                    </TimelineDot>
                                )}
                                {season.status === FarmSeasonStatus.ACTIVE && (
                                    <TimelineDot color="success">
                                        <Circle  />
                                    </TimelineDot>
                                )}
                                {season.status === FarmSeasonStatus.COMPLETED && (
                                    <TimelineDot color="success">
                                        <Check />
                                    </TimelineDot>
                                )}
                                {season.status === FarmSeasonStatus.INACTIVE && (
                                    <TimelineDot color="error">
                                        <Circle />
                                    </TimelineDot>
                                )}
                                {farm.seasons.findIndex((s) => s.id === season.id) < farm.seasons.length - 1 && (
                                    <TimelineConnector 
                                        sx={{ 
                                            height: '100px', 
                                            bgcolor: season.status === FarmSeasonStatus.COMPLETED ? 'green' : 'grey',
                                            opacity: season.status === FarmSeasonStatus.COMPLETED ? 1 : 0.5
                                        }} 
                                    />
                                )}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h6" color="text.secondary">
                                    {season.isBaseline
                                        ? t('labels.baseline-season')
                                        : `${t('labels.season')} ${farm.seasons.findIndex((s) => s.id === season.id)}`}
                                </Typography>
                                <Typography variant="subtitle1" component="span">
                                    {season.seasonName}
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </DialogContent>
        </Dialog>
    );
}
