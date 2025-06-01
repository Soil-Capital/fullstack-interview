import { Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useFormCardStyle from './FormCard.style';

type FormCardT = {
    children: JSX.Element;
};

function FormCard({ children }: FormCardT) {
    const { classes } = useFormCardStyle();
    const navigate = useNavigate();

    return (
        <Paper className={classes.container}>
            <div>
                <Button onClick={() => navigate('/login')} />
            </div>
            <div className={classes.formContainer}>{children}</div>
        </Paper>
    );
}

export default FormCard;
