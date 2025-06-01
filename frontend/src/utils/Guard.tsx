import { useAuth } from '@hooks/useAuth';
import { Navigate } from 'react-router-dom';

type GuardType = 'authenticated' | 'canManageTeam' | 'canManageFarmer' | 'isMobile';

type GuardT = {
    guards: GuardType[];
    target: React.ReactElement;
};

function Guard({ target, guards }: GuardT): React.ReactElement {
    let redirectUrl = null;
    const { user } = useAuth();

    for (let i = 0; i < guards.length; i++) {
        switch (guards[i]) {
            case 'authenticated':
                if (!user?.id) {
                    redirectUrl = '/login';
                    break;
                }
                break;
            default:
                break;
        }
    }

    return redirectUrl ? <Navigate to={redirectUrl} /> : target;
}

export default Guard;
