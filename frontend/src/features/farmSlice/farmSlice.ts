import { createSlice } from '@reduxjs/toolkit';
import { farmApi, FarmTypeI } from '@services';
import type { RootState } from '../../store';

type FarmsState = {
  farms: FarmTypeI[] | null;
  selectedFarm: FarmTypeI | null;
};

const initialState: FarmsState = { farms: null, selectedFarm: null };

const slice = createSlice({
  name: 'farms',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(farmApi.endpoints.list.matchFulfilled, (state, { payload }) => {
        state.farms = payload.data as any;
      })
      .addMatcher(farmApi.endpoints.farmDetail.matchFulfilled, (state, { payload }) => {
        state.selectedFarm = payload.data as any;
      });
  },
});

export const farmsReducer = slice.reducer;

export const selectCurrentFarm = (state: RootState) => state.farms.selectedFarm;
export const selectFarmList = (state: RootState) => state.farms.farms;
