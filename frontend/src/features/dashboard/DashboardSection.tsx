import Work from '@images/work.png';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useDashboardStyle from './DashboardSection.style';

const DashboardSection = () => {
    const { classes } = useDashboardStyle();
    const { t } = useTranslation();

    return (
        <Box className={classes.container}>
            <>
                <Typography paddingBottom={4} variant="h3" color="secondary">
                    {t('titles.dashboard')}
                </Typography>
                <Box className={classes.imgContainer}>
                    <img src={Work} alt="more coming soon" />
                    <Typography className={classes.subtitle} variant="subtitle1" color="primary">
                        {t('subtitles.dashboard-more-coming-soon')}
                    </Typography>
                </Box>
            </>
        </Box>
    );
};

export default DashboardSection;
