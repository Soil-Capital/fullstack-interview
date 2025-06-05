import { api } from '@services';
import { FarmTypeI } from './farm.types';

export const farmApi = api.injectEndpoints({
  endpoints: (builder) => ({
    list: builder.query<{ data: FarmTypeI[] }, void>({
      query: () => {
        return {
          url: `farms`,
          method: 'GET',
        };
      }
    }),
    farmDetail: builder.query<{ data: FarmTypeI }, number>({
      query: (id) => ({
        url: `farms/${id}`,
        method: 'GET'
      }),
    }),
  }),
});

export const { useListQuery, useFarmDetailQuery } = farmApi;

export * from './farm.types';
