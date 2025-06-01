import '@mui/material/Button';
import '@mui/material/styles';

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        errorLight: true;
    }
}
