import { Box, Button, Card, CardActions, CardContent, CardMedia, Paper, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { useParams, useNavigate } from 'react-router-dom';
import useFarmDetailStyle from './farmDetail.style';

import { FarmSeasonI, useFarmDetailQuery } from '@services';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentFarm } from '../farmSlice/farmSlice';
import { useTranslation } from 'react-i18next';
import farmImage from '../../assets/images/landscape-fields-original-min.jpg'

const FarmDetail = () => {
  const { id } = useParams();
  const { classes } = useFarmDetailStyle();
  const navigate = useNavigate();

  const { t } = useTranslation();
  useFarmDetailQuery(id);
  const farm = useSelector(selectCurrentFarm);

  const activeSeason = useMemo(() => {
    if (!farm) return 0;
    const activeIndex = farm.farmSeason.findIndex(season => season.status === 'SUBSCRIBED');

    return activeIndex > -1 ? activeIndex : farm.farmSeason.length;
  }, [farm]);

  const seasonToLabel = (season: FarmSeasonI, index: number) => {
    const { isBaseline, season: seasonData } = season;
    return `${isBaseline ? t('farm-season.reference') : (`${t('farm-season.season')} ${index}`)} ${seasonData?.name || ''}`;
  };

  if (!farm) return <></>;

  return <Box className={classes.container}>
    <>
      <Box sx={{ display: 'flex', justifyContent: 'left' }}>
        <Button
          variant="outlined"
          startIcon={<MenuOpenIcon />}
          onClick={() => navigate('/')}>
          {t('farmers.back-to-farm-list')}
        </Button>
      </Box>
      <Box className={classes.subContainer}>
        <Paper sx={{ height: 350, width: '100%', padding: '20px 20px', display: 'flex' }}>
          <Card sx={{ maxWidth: 345, height: 300 }}>
            <CardMedia
              component="img"
              alt="farm"
              height="140"
              image={farmImage}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {farm.name}
              </Typography>
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  <AlternateEmailIcon/>{farm.email}
                </Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Button startIcon={<CancelIcon />}>{t('farmers.unsubscribe-farmer')}</Button>
            </CardActions>
          </Card>
          <Box>
            <Stack sx={{ width: '100%' }} spacing={4}>
            <Stepper activeStep={activeSeason} alternativeLabel>
              {farm.farmSeason.map((season, index) => (
                <Step key={season.id}>
                  <StepLabel>
                    <Typography>{seasonToLabel(season, index)}</Typography>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Stack>
          </Box>
        </Paper>
      </Box>
    </>
  </Box>;
}

export default FarmDetail;
