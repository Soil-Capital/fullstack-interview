import { createSlice } from '@reduxjs/toolkit';
import { authApi, UserI } from '@services';
import type { RootState } from '../../store';

type AuthState = {
    user: UserI | null;
    access_token: string | null;
    partnerId: number | null;
};

const initialState: AuthState = { user: null, access_token: null, partnerId: null };

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addToken: (state, { payload }) => ({
            ...state,
        }),
    },
    extraReducers: (builder) => {
        builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
            state.user = payload[0] as any;
        });
    },
});

export const authReducer = slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectPartnerId = (state: RootState) => state.auth.partnerId;
export const { addToken } = slice.actions;
