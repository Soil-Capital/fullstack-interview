import { Box, Grid, Typography } from '@mui/material';

import useAuthLayoutStyle from './AuthLayout.style';

export type AuthLayoutPropsT = {
    sideZone: JSX.Element;
    form: JSX.Element;
    underFormZone?: JSX.Element;
    title: string;
};

const AuthLayout = ({ sideZone, form, underFormZone, title }: AuthLayoutPropsT): JSX.Element => {
    const { classes } = useAuthLayoutStyle();

    return (
        <Grid className={classes.root} container>
            <Grid md={6} xs={12} item>
                <Box className={classes.box}>
                    <Box className={classes.contentCenter}>
                        <Typography className={classes.title} component="h1" variant="h4">
                            {title}
                        </Typography>
                        <Box className={classes.formContainer}>{form}</Box>
                    </Box>
                </Box>
                <Box className={classes.mobileOnly}>{underFormZone}</Box>
            </Grid>
            <Grid md={6} xs={12} item>
                {sideZone}
            </Grid>
        </Grid>
    );
};

export default AuthLayout;
