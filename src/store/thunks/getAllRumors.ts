import {createAsyncThunk} from '@reduxjs/toolkit';
import type {AxiosError} from 'axios';
import {rumorsInstance} from '../../api/axiosInstances';
import {ValidationErrors, Rumor} from '../../types/lockersState';

export const fetchAllRumors = createAsyncThunk<
  Rumor[],
  {
    rejectValue: ValidationErrors;
  },
  {
    rejectValue: ValidationErrors;
  }
>('allRumors/fetch', async (__, thunkApi) => {
  try {
    const response = await rumorsInstance.get<Rumor[]>('/rumors');
    return response.data;
  } catch (err: any) {
    let error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return thunkApi.rejectWithValue(error.response.data);
  }
});
