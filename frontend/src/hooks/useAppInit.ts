import { useAppDispatch } from '@hooks';
import { useEffect, useState } from 'react';

export const useAppInit = () => {
    const [initialized, setInitialized] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        async function loadToken() {
            setInitialized(true);
        }

        loadToken();
    }, []);

    return { initialized };
};
