import { makeStyles } from 'tss-react/mui';

const topBarHeight = '45px';
const topBarMarginBottom = '15px';
const sideBarOpenWidth = '220px';
const sideBarClosedWidth = '45px';

type HomePageStyleT = {
    sideBarOpen: boolean;
};

export default makeStyles<HomePageStyleT>()((theme, { sideBarOpen }) => {
    return {
        container: {
            height: '100vh',
            width: '100vw',
            padding: '15px 20px 20px 20px',
            overflowX: 'hidden',
        },
        section: {
            height: `calc(100% - ${topBarHeight} - ${topBarMarginBottom})`,
        },
        topbar: {
            height: topBarHeight,
            marginBottom: topBarMarginBottom,
        },
        sidebar: {
            position: 'relative',
            width: sideBarOpen ? sideBarOpenWidth : sideBarClosedWidth,
            height: '100%',
            float: 'left',
            transition: 'all 0.3s ease',
            '& .sideBarCollapseBtn': {
                transition: 'opacity 0.15s ease',
                opacity: 0,
            },
            '&:hover .sideBarCollapseBtn': {
                opacity: 1,
            },
        },
        content: {
            transition: 'all 0.3s ease',
            zIndex: '-1000',
            height: '100%',
            float: 'left',
            width: `calc(100% - ${sideBarOpen ? sideBarOpenWidth : sideBarClosedWidth})`,
            borderRadius: '0 20px 20px 0',
            backgroundColor: '#f6f3E5',
            minHeight: '640px',
        },
        hoverableCollapseBtn: {
            zIndex: 1000,
            position: 'absolute',
            top: '0',
            right: '-18px',
            width: '18px',
            height: '100%',
        },
        sideBarCollapseBtn: {
            border: `1px solid ${theme.palette.secondary.main}`,
            zIndex: 1000,
            backgroundColor: '#f8f8f8',
            position: 'absolute',
            top: '53px',
            right: '0',
            transform: 'translate(15px,-15px)',
            transformOrigin: 'center',
            width: '30px',
            height: '30px',
            minHeight: '0',
            boxShadow: 'none',
            '&:hover': {
                backgroundColor: theme.palette.secondary.main,
                '& .toggleIcon': {
                    color: '#f8f8f8',
                },
            },
            '&:active': {
                boxShadow: 'none',
            },
        },
        toggleIcon: {
            color: theme.palette.secondary.main,
            fontSize: '10px',
            '&.sideBarClose': {
                transform: `rotate(180deg)`,
            },
        },
    };
});
