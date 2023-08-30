import {
  SerializedError,
  AsyncThunkAction,
  ThunkDispatch,
  AnyAction,
} from '@reduxjs/toolkit';
import {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';

// Define a type for the async thunk action creator
type AsyncThunkActionCreator<R, T> = (
  args: T,
) => AsyncThunkAction<R, T, object>;

function useThunk<R, T>(
  thunk: AsyncThunkActionCreator<R, T>,
  args: T,
): [() => Promise<unknown>, boolean, SerializedError | null] {
  // Define state variables to keep track of loading status and errors
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<SerializedError | null>(null);
  const dispatch = useDispatch<ThunkDispatch<object, object, AnyAction>>();

  // Define a memoized callback function that executes the thunk action
  const runThunk = useCallback(async () => {
    // Update the loading status to indicate that the thunk action is in progress
    setIsLoading(true);
    // Dispatch the thunk action and handle its result
    return dispatch(thunk(args))
      .unwrap() // Unwrap the result of the async thunk action
      .catch(e => setError(e)) // Catch any errors that occurred during the execution of the thunk action
      .finally(() => setIsLoading(false)); // Set the loading status to false after the thunk action is completed, regardless of the result
  }, [dispatch, thunk, args]);

  // Return the callback function, loading status, and error as an array
  return [runThunk, isLoading, error];
}

export {useThunk};
