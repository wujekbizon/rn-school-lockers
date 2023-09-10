import {createAsyncThunk} from '@reduxjs/toolkit';
import type {AxiosError} from 'axios';
import {rumorsInstance} from '../../api/axiosInstances';
import {ValidationErrors, Rumor} from '../../types/lockersState';
import {RumorResponseInterface} from '../../types/rumorsState';

export const createRumor = createAsyncThunk<
  RumorResponseInterface,
  {title: string; content: string} & Partial<Rumor>,
  {
    rejectValue: ValidationErrors;
  }
>('rumor/create', async (data, thunkApi) => {
  try {
    const response = await rumorsInstance.post<RumorResponseInterface>(
      '/rumors',
      data,
    );
    // here is important what we return
    return response.data;
  } catch (err: any) {
    let error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return thunkApi.rejectWithValue(error.response.data);
  }
});
