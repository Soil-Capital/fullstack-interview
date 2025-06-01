import { CircularProgress } from '@mui/material';

import useLoadingPageStyle from './LoadingPage.style';

const LoadingPage = (): JSX.Element => {
    const { classes } = useLoadingPageStyle();

    return (
        <div className={classes.loadingContainer}>
            <CircularProgress className={classes.loading} size="6rem" />
        </div>
    );
};

export default LoadingPage;
