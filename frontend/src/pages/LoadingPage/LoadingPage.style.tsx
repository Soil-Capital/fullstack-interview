import { makeStyles } from 'tss-react/mui';

const useLoadingViewStyle = makeStyles()(() => ({
    loadingContainer: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loading: {
        color: '#2D525C',
    },
}));

export default useLoadingViewStyle;
