import { makeStyles } from 'tss-react/mui';

export default makeStyles()(() => {
    return {
        container: {
            padding: '25px 0px 25px 30px',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
        },
        subContainer: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '250',
            margin: '20px 0',
            padding: '20px 20px',
            alignItems: 'center',
            justifyContent: 'center',
        },
        subtitle: {
            width: '100%',
            textAlign: 'center',
        },
    };
});
