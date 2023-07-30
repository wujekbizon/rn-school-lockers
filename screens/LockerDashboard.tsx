import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTypedSelector} from '../hooks/useTypedSelector';
import Toast from 'react-native-toast-message';

const LockerDashboard = () => {
  const {locker, isAuthenticated} = useTypedSelector(state => state.authLocker);

  useEffect(() => {
    Toast.show({
      type: 'success',
      text1: `Welcome back ${locker?.student}`,
    });
  }, [isAuthenticated]);

  return (
    <>
      <View>
        <Text>LockerDashboard</Text>
      </View>
    </>
  );
};
export default LockerDashboard;
const styles = StyleSheet.create({});
