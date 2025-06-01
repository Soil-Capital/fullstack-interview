import clsx from 'clsx';

import useTopBarStyle from './TopBar.style';

function TobBar({ className }: TopBarT) {
    const { classes } = useTopBarStyle();

    return (
        <div className={clsx(className, classes.container)}>
            <div className={classes.menuContainer}></div>
        </div>
    );
}

type TopBarT = {
    className?: string;
};

export default TobBar;
