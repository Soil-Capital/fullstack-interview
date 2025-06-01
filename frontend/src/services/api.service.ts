import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_URL,
        prepareHeaders: (headers, { getState }) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            headers.set('Content-Type', 'application/json');
            headers.set('Accept', 'application/json, */*');
            const token = (getState() as RootState).auth.access_token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    refetchOnMountOrArgChange: true,
    endpoints: () => ({}),
});
