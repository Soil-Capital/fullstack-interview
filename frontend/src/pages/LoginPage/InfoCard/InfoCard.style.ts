import { makeStyles } from 'tss-react/mui';

export default makeStyles<{ hasImage: boolean }>()((theme, { hasImage }) => {
    return {
        container: {
            padding: '50px 25px',
            width: '100%',
            height: hasImage ? '555px' : '350px',
            display: 'grid',
            gridTemplateColumns: 'auto',
            gridTemplateRows: hasImage ? 'auto 250px' : 'auto',
        },
        header: {
            display: 'flex',
            justifyContent: 'center',
        },
        imageContainer: {
            height: '160px',
            width: '160px',
            borderRadius: '100%',
            backgroundColor: '#f6f3E5',
        },
        content: {
            display: 'grid',
            gridTemplateColumns: 'auto',
            gridTemplateRows: '45% 35% 20%',
            '> *': {
                padding: '0px 10px',
            },
        },
        buttonContainer: {
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
        },
    };
});
