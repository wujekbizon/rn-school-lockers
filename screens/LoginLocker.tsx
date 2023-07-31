import {useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {useAppDispatch} from '../hooks/useAppDispatch';
import {loginLocker} from '../store/thunks/loginLocker';
import Toast from 'react-native-toast-message';
import {LoadingOverlay} from '../components';

const LoginLocker = (): JSX.Element => {
  const {isLoading, error} = useTypedSelector(state => state.lockers);
  const dispatch = useAppDispatch();

  const admin = {
    email: 'greg@greg.com',
    password: 'Password1234!',
  };
  const user = {
    email: 'test2@test.com',
    password: 'Password1234!',
  };

  const loginLockerHandler = () => {
    dispatch(loginLocker(user));
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
        <View style={styles.rootContainer}>
          <Button title="Login Locker" onPress={loginLockerHandler} />
        </View>
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
