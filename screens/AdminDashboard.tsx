import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTypedSelector} from '../hooks/useTypedSelector';
import Toast from 'react-native-toast-message';

const AdminDashboard = () => {
  const {currentLocker, isAdmin} = useTypedSelector(state => state.lockers);

  useEffect(() => {
    Toast.show({
      type: 'success',
      text1: `${currentLocker?.student} admin dashboard.`,
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
