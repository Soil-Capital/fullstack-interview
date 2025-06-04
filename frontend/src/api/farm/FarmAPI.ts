import axiosInstance from '../axios';
import { API_ENDPOINTS } from '../endpoints';
import { ApiResponse } from '../types';

export interface FarmSeason {
  id: string;
  status: string;
  seasonName: string;
  createdAt: string;
  isBaseline: boolean;
}

export interface Farm {
  id: string;
  name: string;
  createdAt: string;
}

export interface FarmWithLatestSeason {
  id: string;
  name: string;
  createdAt: string;
  latestSeason: FarmSeason | null;
}

export class FarmAPI {
  static async getFarms(): Promise<FarmWithLatestSeason[]> {
    const response : ApiResponse<FarmWithLatestSeason[]> = await axiosInstance.get(API_ENDPOINTS.FARMS.LIST);
    return response.data;
  }
} 