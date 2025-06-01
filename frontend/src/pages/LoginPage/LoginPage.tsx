import { Box } from '@mui/material';

import AuthLayout from '@/layouts/AuthLayout/AuthLayout';
import LoginForm from '@features/auth/LoginForm/LoginForm';
import { useTranslation } from 'react-i18next';

function LoginPage() {
    const { t } = useTranslation();

    return (
        <>
            <AuthLayout form={<LoginForm />} sideZone={<Box />} title={t('titles.login-in-to-partners-portal')} />
        </>
    );
}

export default LoginPage;
