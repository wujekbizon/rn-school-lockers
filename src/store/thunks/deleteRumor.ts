import {createAsyncThunk} from '@reduxjs/toolkit';
import type {AxiosError} from 'axios';
import {rumorsInstance} from '../../api/axiosInstances';
import {ValidationErrors, Rumor} from '../../types/lockersState';

export const deleteRumor = createAsyncThunk<
  Rumor,
  {_id: string},
  {
    rejectValue: ValidationErrors;
  }
>('rumor/delete', async ({_id}, thunkApi) => {
  try {
    const response = await rumorsInstance.delete<Rumor>(`/rumors/${_id}`);
    return response.data;
  } catch (err: any) {
    let error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return thunkApi.rejectWithValue(error.response.data);
  }
});
