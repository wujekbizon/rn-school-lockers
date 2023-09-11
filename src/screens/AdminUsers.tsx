import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useFetchLockersQuery} from '../store/store';
import {LoadingOverlay} from '../components';
import {INDUSTRIAL_COLORS} from '../constants/style';
import {ErrorToast} from 'react-native-toast-message';

const AdminUsers = () => {
  const {data, isError, isLoading} = useFetchLockersQuery();

  return (
    <View style={styles.container}>
      {isLoading && (
        <LoadingOverlay
          message="Fetching lists of lockers..."
          color={INDUSTRIAL_COLORS.text100}
        />
      )}

      <FlatList
        data={data}
        keyExtractor={(item, index) => item._id || index.toString()}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />

      {isError && (
        <ErrorToast
          text1="Fetching lockers failed"
          text2="Please try later!!"
        />
      )}
    </View>
  );
};
export default AdminUsers;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: INDUSTRIAL_COLORS.gray400,
  },
});
