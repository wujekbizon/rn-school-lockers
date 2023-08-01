import {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {useAppDispatch} from '../hooks/useAppDispatch';
import {loginLocker} from '../store/thunks/loginLocker';
import Toast from 'react-native-toast-message';
import {LoadingOverlay, AuthContent} from '../components';
import {Locker} from '../types/lockersState';

const LoginLocker = (): JSX.Element => {
  const {isLoading, error} = useTypedSelector(state => state.lockers);
  const dispatch = useAppDispatch();

  const loginLockerHandler = (credentials: Locker) => {
    dispatch(loginLocker(credentials));
  };

  useEffect(() => {
    error &&
      Toast.show({
        type: 'error',
        text1: 'Failed to login in!',
        text2: error?.message,
      });
  }, [error]);

  return (
    <>
      {isLoading && !error ? (
        // Loading indicator I might replace with skeleton loader
        <LoadingOverlay message="Logging you in..." />
      ) : (
        <AuthContent isLogin onAuth={loginLockerHandler} />
      )}
    </>
  );
};
export default LoginLocker;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
