import { Button, Paper, Typography } from '@mui/material';
import { ReactElement } from 'react';
import useInfoCardStyle from './InfoCard.style';

type InfoCardT = {
    image?: ReactElement;
    title: string;
    subtitle: string;
    buttonLabel: string;
    buttonCallback: () => void;
};

function InfoCard({ image, title, subtitle, buttonLabel, buttonCallback }: InfoCardT) {
    const { classes } = useInfoCardStyle({ hasImage: !!image });

    return (
        <Paper elevation={1} className={classes.container}>
            {image && (
                <div className={classes.header}>
                    <div className={classes.imageContainer}>{image}</div>
                </div>
            )}
            <div className={classes.content}>
                <Typography variant="h2" color="primary" align="center">
                    {title}
                </Typography>
                <Typography variant="subtitle1" color="primary" align="center">
                    {subtitle}
                </Typography>
                <div className={classes.buttonContainer}>
                    <Button color="secondary" onClick={buttonCallback}>
                        {buttonLabel}
                    </Button>
                </div>
            </div>
        </Paper>
    );
}

export default InfoCard;
