import {createAsyncThunk} from '@reduxjs/toolkit';
import type {AxiosError} from 'axios';
import {ValidationErrors, Rumor} from '../../types/lockersState';
import {rumorsInstance} from '../../api/axiosInstances';

export const editRumor = createAsyncThunk<
  Rumor,
  Rumor,
  {
    rejectValue: ValidationErrors;
  }
>('rumor/edit', async (item, thunkApi) => {
  try {
    await rumorsInstance.patch<Rumor>(`/rumors/${item._id}`, item);
    // here is important what we return
    return item;
  } catch (err: any) {
    let error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return thunkApi.rejectWithValue(error.response.data);
  }
});
