export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

export interface ApiError {
  message: string;
  status: number;
}


export interface Farm {
  id: string;
  name: string;
  createdAt: string;
}