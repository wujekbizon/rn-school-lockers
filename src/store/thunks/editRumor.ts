import {createAsyncThunk} from '@reduxjs/toolkit';
import type {AxiosError} from 'axios';
import {rumorsInstance} from '../../api/axiosInstances';
import {ValidationErrors, Rumor} from '../../types/lockersState';

export const editRumor = createAsyncThunk<
  Rumor,
  Rumor,
  {
    rejectValue: ValidationErrors;
  }
>('rumor/edit', async (item, thunkApi) => {
  try {
    const response = await rumorsInstance.patch<Rumor>(`/rumors/${item._id}`);
    // here is important what we return
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
