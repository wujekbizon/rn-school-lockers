import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import type {AxiosError} from 'axios';
import {Locker} from '../../types/locker';

interface ValidationErrors {
  message: string;
  field_errors: Record<string, string>;
}

interface UpdateLockerResponse {
  locker: Locker;
  message: string;
  success: boolean;
}

export const loginLocker = createAsyncThunk<
  UpdateLockerResponse,
  {email: string; password: string} & Partial<Locker>,
  {
    rejectValue: ValidationErrors;
  }
>('locker/auth', async (data, {rejectWithValue}) => {
  try {
    const response = await axios.post<UpdateLockerResponse>(
      'http://3.127.37.237:5100/api/v1/lockers/login',
      data,
    );

    return response.data;
  } catch (err: any) {
    let error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
