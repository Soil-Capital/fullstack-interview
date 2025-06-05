import { configureStore } from '@reduxjs/toolkit';
import { api } from '@services';
import { authReducer } from '@features/auth';
import { farmsReducer } from '@features/farmSlice/farmSlice';

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth: authReducer,
        farms: farmsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
