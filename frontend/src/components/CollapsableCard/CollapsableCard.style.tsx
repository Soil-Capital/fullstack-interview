import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => {
    return {
        container: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#f8f8f8',
            padding: '20px 30px 20px 30px',
            marginBottom: '20px',
            boxShadow: 'none',
        },
        headerContainer: {
            display: 'flex',
            position: 'relative',
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
        },
        steps: {
            color: '#BDBDBD',
        },
        skeleton: {},
    };
});
