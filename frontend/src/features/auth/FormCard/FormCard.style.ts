import { makeStyles } from 'tss-react/mui';

export default makeStyles()(() => {
    return {
        container: {
            width: '400px',
            padding: '20px',
        },
        logo: {
            margin: '0 auto',
            width: '100%',
            display: 'block',
            marginTop: '10px',
            marginBottom: '50px',
        },
        formContainer: {
            display: 'flex',
            justifyContent: 'center',
        },
    };
});
