import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import type {AxiosError} from 'axios';
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
    return thunkApi.rejectWithValue(error.response.data);
  }
});
