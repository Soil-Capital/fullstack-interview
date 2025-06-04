import axiosInstance from '../axios';
import { API_ENDPOINTS } from '../endpoints';
import { ApiResponse } from '../types';
import { FarmWithLatestSeason, FarmWithSeasons } from './FarmAPI.types';


export class FarmAPI {
  static async getFarms(): Promise<FarmWithLatestSeason[]> {
    const response : ApiResponse<FarmWithLatestSeason[]> = await axiosInstance.get(API_ENDPOINTS.FARMS.LIST);
    return response.data;
  }

  static async getFarmSeasons(farmId: string): Promise<FarmWithSeasons> {
    const response : ApiResponse<FarmWithSeasons> = await axiosInstance.get(`${API_ENDPOINTS.FARMS.LIST}/${farmId}`);
    return response.data;
  }
} 