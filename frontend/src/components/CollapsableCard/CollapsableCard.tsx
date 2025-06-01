import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Card, Collapse, IconButton, Skeleton, Typography } from '@mui/material';
import { ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useCollapsableCardStyle from './CollapsableCard.style';

export type CollapsableCardPropsT = {
    isExpanded: boolean;
    header: string;
    currentStep: number;
    maxSteps: number;
    isLoading: boolean;
    children: ReactNode;
};

export const CollapsableCard = (props: CollapsableCardPropsT): JSX.Element => {
    const { classes } = useCollapsableCardStyle();
    const { t } = useTranslation();
    const [expand, setExpand] = useState<boolean>(props.isExpanded);

    const getStepsLabel = (): string => {
        if (props.currentStep === props.maxSteps) {
            return t('labels.completed', { context: 'female' });
        }
        return `${props.currentStep}/${props.maxSteps}`;
    };

    return (
        <>
            <Card className={classes.container}>
                <Box display="flex" justifyContent={'space-between'} flexDirection="row">
                    <Box className={classes.headerContainer}>
                        <Typography variant="caption">{props.header}</Typography>
                        <IconButton onClick={() => setExpand(!expand)}>
                            {expand ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </Box>
                    <Box alignSelf={'center'}>
                        {props.isLoading ? (
                            <Skeleton
                                style={{ borderRadius: '10px' }}
                                animation="wave"
                                variant="rectangular"
                            ></Skeleton>
                        ) : (
                            <Typography className={classes.steps} variant="caption">
                                {getStepsLabel()}
                            </Typography>
                        )}
                    </Box>
                </Box>

                <Collapse in={expand}>
                    {props.isLoading ? (
                        <Skeleton
                            style={{ borderRadius: '10px' }}
                            className={classes.container}
                            height={360}
                            variant="rectangular"
                            animation="wave"
                        ></Skeleton>
                    ) : (
                        <>{props.children}</>
                    )}
                </Collapse>
            </Card>
        </>
    );
};
