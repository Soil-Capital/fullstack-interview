import { addToken, setCurrentUser } from '@features/auth';
import { getStorageToken, getStorageUser } from '@utils';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@hooks';

export const useAppInit = () => {
    const [initialized, setInitialized] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        async function loadToken() {
            const token = getStorageToken();
            if (token) dispatch(addToken(token));

            const user = getStorageUser();
            if (user) dispatch(setCurrentUser(user));

            setInitialized(true);
        }

        loadToken();
    }, []);

    return { initialized };
};
