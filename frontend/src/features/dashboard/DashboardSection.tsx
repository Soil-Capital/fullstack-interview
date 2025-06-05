import { Avatar, Box, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useDashboardStyle from './DashboardSection.style';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { FarmSeasonI, useListQuery } from '@services';
import { useSelector } from 'react-redux';
import { selectFarmList } from '../farmSlice/farmSlice';
import CheckIcon from '@mui/icons-material/Check';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const gridColDefinition: GridColDef<any, any, any>[] = [
    {
        field: 'name',
        headerName: 'Farm name',
        width: 240
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 240
    },
    {
        field: 'partner',
        headerName: 'Partner',
        width: 160
    },
    {
        field: 'contact',
        headerName: 'Contact',
        width: 160,
        renderCell: (params) => {
            return params.value ? <Avatar>{params.value}</Avatar> : <></>
        }
    },
    {
        field: 'farmSeason',
        headerName: 'Season status',
        width: 160,
        renderCell: (params) => {
            const farmSeasons: FarmSeasonI[] = params.value;
            const activeIndex = farmSeasons.findIndex(season => season.status !== 'COMPLETED');
            const seasonStatus = activeIndex > -1
                ? farmSeasons[activeIndex].status
                : farmSeasons[farmSeasons.length - 1].status;

            switch (seasonStatus) {
                case 'ACTIVE': return <Typography color={'aquamarine'}><HistoryToggleOffIcon/> Active</Typography>;
                case 'COMPLETED': return <Typography color={'darkgreen'}><CheckIcon/> Completed</Typography>;
                case 'INACTIVE': return <Typography color={'grey'}><BedtimeIcon/> Inactive</Typography>;
                case 'SUBSCRIBED': return <Typography color={'lightgreen'}><AppRegistrationIcon/> Subscribed</Typography>;
            }
        }
    }
];

const DashboardSection = () => {
    const navigate = useNavigate();
    const { classes } = useDashboardStyle();
    const { t } = useTranslation();
    useListQuery();
    const farms = useSelector(selectFarmList);
    
    return (
        <Box className={classes.container}>
            <>
                <Typography variant="h3" color="primary">
                    {t('titles.dashboard')}
                </Typography>
                <Box className={classes.imgContainer}>
                    <Paper sx={{ height: 600, width: '100%' }}>
                        <DataGrid
                            rows={farms || []}
                            columns={gridColDefinition}
                            hideFooterPagination={true}
                            onRowClick={param => navigate(`farms/${param.row.id}`)}
                            sx={{ border: 0 }}
                        />
                    </Paper>
                </Box>
            </>
        </Box>
    );
};

export default DashboardSection;
