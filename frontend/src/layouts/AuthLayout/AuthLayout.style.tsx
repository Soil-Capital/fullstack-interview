import backgroundDots from '@images/background-dots.png';
import { makeStyles } from 'tss-react/mui';

const useLayoutAuthStyle = makeStyles()((theme) => {
    const largeScreen = theme.breakpoints.up('md');

    return {
        root: {
            height: '100vh',

            '&>.MuiGrid-item': {
                backgroundImage: `url(${backgroundDots})`,
                backgroundRepeat: 'repeat',
                backgroundSize: 'cover',
                minHeight: '100vh',
                overflowY: 'auto',
                padding: theme.spacing(6),
                [largeScreen]: {
                    padding: 0,
                },
                position: 'relative',
            },
        },

        box: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            boxSizing: 'border-box',
            backgroundColor: 'white',
            borderRadius: theme.spacing(3),
            justifyContent: 'center',
            padding: theme.spacing(4),
            [largeScreen]: {
                borderRadius: 0,
                minHeight: '100%',
                padding: theme.spacing(4),
            },
        },

        logo: {
            marginBottom: theme.spacing(5),
            [largeScreen]: {
                marginBottom: 0,
            },
        },

        mobileOnly: {
            [largeScreen]: {
                display: 'none',
            },
        },

        title: {
            textAlign: 'center',
            color: '#426771',
            fontSize: '1.5em',
            margin: 'auto',
            marginBottom: theme.spacing(6),
            marginTop: theme.spacing(2),
            maxWidth: '450px',
        },
        contentCenter: {
            flex: '1',
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        formContainer: {
            maxWidth: '300px',
            width: '100%',
            margin: '0 auto',
            '& .MuiFormControl-root': {
                marginBottom: theme.spacing(3),
            },
        },
    };
});

export default useLayoutAuthStyle;
