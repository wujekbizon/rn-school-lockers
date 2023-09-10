import {createAsyncThunk} from '@reduxjs/toolkit';
import type {AxiosError} from 'axios';
import {rumorsInstance} from '../../api/axiosInstances';
import {ValidationErrors, Rumor} from '../../types/lockersState';

export const deleteRumor = createAsyncThunk<
  Rumor,
  Rumor,
  {
    rejectValue: ValidationErrors;
  }
>('rumor/delete', async (item, thunkApi) => {
  try {
    await rumorsInstance.delete<Rumor>(`/rumors/${item._id}`);
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
