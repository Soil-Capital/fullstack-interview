import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import useHomePageStyle from './HomePage.style';
import SideBar from './SideBar/SideBar';
import TopBar from './TopBar/TopBar';
import { Fab } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function HomePage() {
    const [sideBarOpen, setSidebarOpen] = useState(true);
    const { classes } = useHomePageStyle({ sideBarOpen });

    const toggleSideBar = () => {
        setSidebarOpen((sideBarOpen) => !sideBarOpen);
    };

    return (
        <div className={classes.container}>
            <TopBar className={classes.topbar} />
            <div className={classes.section}>
                <div className={classes.sidebar}>
                    <SideBar />
                    <div className={classes.hoverableCollapseBtn} />
                    <Fab
                        aria-label="collapse"
                        className={`${classes.sideBarCollapseBtn} sideBarCollapseBtn`}
                        size="small"
                        color='primary'
                        onClick={toggleSideBar}
                    >
                        {sideBarOpen ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </Fab>
                </div>
                <div className={classes.content}>
                    {/* This outlet is a new way to handle sub routers within main router. 
                    Check router to see what components are user here */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
