import {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useAppDispatch} from '../hooks/useAppDispatch';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {LoadingOverlay, AuthContent} from '../components';
import {registerLocker} from '../store/thunks/registerLocker';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import type {Locker} from '../types/lockersState';
import Toast from 'react-native-toast-message';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {INDUSTRIAL_COLORS} from '../constants/style';

const RegisterLocker = () => {
  const {isLoading, error, isRegistered} = useTypedSelector(
    state => state.lockers,
  );
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const registerLockerHandler = (locker: Locker) => {
    dispatch(registerLocker(locker));
  };

  useEffect(() => {
    if (!isLoading && !error && isRegistered) {
      navigation.replace('Login');
      Toast.show({
        type: 'success',
        text1: 'Successfully register locker!',
        text2: 'Please login with your newly created credentials!',
      });
    }
  }, [isRegistered, isLoading, error]);

  useEffect(() => {
    error &&
      Toast.show({
        type: 'error',
        text1: 'Failed to register locker!',
        text2: error?.message,
      });
  }, [error]);

  return (
    <LinearGradient
      style={styles.rootContainer}
      colors={[
        INDUSTRIAL_COLORS.primary100,
        INDUSTRIAL_COLORS.secondary200,
        INDUSTRIAL_COLORS.secondary700,
      ]}>
      {isLoading && !error ? (
        // Loading indicator I might replace with skeleton loader
        <LoadingOverlay message="Creating new locker..." />
      ) : (
        <AuthContent isLogin={false} onAuth={registerLockerHandler} />
      )}
    </LinearGradient>
  );
};
export default RegisterLocker;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
