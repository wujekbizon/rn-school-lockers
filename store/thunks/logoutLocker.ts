import {createAsyncThunk} from '@reduxjs/toolkit';
import type {AxiosError} from 'axios';
import {lockersInstance} from '../../api/axiosInstances';
import type {ValidationErrors} from '../../types/lockersState';

export const logoutLocker = createAsyncThunk<
  {
    rejectValue: ValidationErrors;
  },
  void,
  {
    rejectValue: ValidationErrors;
  }
>('locker/logout', async (__, thunkApi) => {
  try {
    const response = await lockersInstance.get('/logout');
    console.log(response.data);
    return response.data;
  } catch (err: any) {
    let error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return thunkApi.rejectWithValue(error.response.data);
  }
});
