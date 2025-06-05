import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectPartnerId } from '@features/auth';

export const useAuth = () => {
    const user = useSelector(selectCurrentUser);
    const partnerId = useSelector(selectPartnerId);

    return useMemo(() => ({ user, partnerId }), [user, partnerId]);
};
