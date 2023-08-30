import {createAsyncThunk} from '@reduxjs/toolkit';
import type {AxiosError} from 'axios';
import {lockersInstance} from '../../api/axiosInstances';
import {
  Locker,
  ValidationErrors,
  UpdateLockerResponse,
} from '../../types/lockersState';

export const registerLocker = createAsyncThunk<
  UpdateLockerResponse,
  Locker,
  {
    rejectValue: ValidationErrors;
  }
>('locker/register', async (data, thunkApi) => {
  try {
    const response = await lockersInstance.post<UpdateLockerResponse>(
      '/register',
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
