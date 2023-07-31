import {StyleSheet} from 'react-native';
import {useAppDispatch} from '../hooks/useAppDispatch';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {LoadingOverlay, AuthContent} from '../components';

const RegisterLocker = () => {
  const {isLoading, error} = useTypedSelector(state => state.lockers);
  const dispatch = useAppDispatch();

  return (
    <>
      {isLoading && !error ? (
        // Loading indicator I might replace with skeleton loader
        <LoadingOverlay message="Creating new locker..." />
      ) : (
        <AuthContent isLogin={false} />
      )}
    </>
  );
};
export default RegisterLocker;
const styles = StyleSheet.create({});
