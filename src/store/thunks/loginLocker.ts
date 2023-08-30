import {createAsyncThunk} from '@reduxjs/toolkit';
import type {AxiosError} from 'axios';
import {lockersInstance} from '../../api/axiosInstances';
import {
  Locker,
  ValidationErrors,
  UpdateLockerResponse,
} from '../../types/lockersState';

export const loginLocker = createAsyncThunk<
  UpdateLockerResponse,
  {email: string; password: string} & Partial<Locker>,
  {
    rejectValue: ValidationErrors;
  }
>('locker/login', async (data, thunkApi) => {
  try {
    const response = await lockersInstance.post<UpdateLockerResponse>(
      '/login',
      data,
    );
    return response.data;
  } catch (err: any) {
    let error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return thunkApi.rejectWithValue(error.response.data);
  }
});
