import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import type {AxiosError} from 'axios';
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
    const response = await axios.get(
      'http://3.127.37.237:5100/api/v1/lockers/logout',
    );
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
