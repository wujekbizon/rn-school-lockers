import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTypedSelector} from '../hooks/useTypedSelector';
import Toast from 'react-native-toast-message';

const AdminDashboard = () => {
  const {locker, isAdmin} = useTypedSelector(state => state.authLocker);

  useEffect(() => {
    Toast.show({
      type: 'success',
      text1: `Admin dashboard ready, Mr.${locker?.student}`,
    });
  }, [isAdmin]);
  return (
    <View>
      <Text>AdminDashboard</Text>
    </View>
  );
};
export default AdminDashboard;
const styles = StyleSheet.create({});
