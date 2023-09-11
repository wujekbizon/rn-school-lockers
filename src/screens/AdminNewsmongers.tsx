import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {
  useFetchSubscribersQuery,
  useRemoveSubscriberMutation,
} from '../store/store';
import {IconButton, LoadingOverlay} from '../components';
import {INDUSTRIAL_COLORS, SPACERS} from '../constants/style';
import {ErrorToast} from 'react-native-toast-message';
import {NewsmongersInterface} from '../types/newsmongerTypes';

const AdminNewsmongers = () => {
  const {data, isError, isLoading} = useFetchSubscribersQuery({});
  const [removeSubscriber, result] = useRemoveSubscriberMutation();

  const handleUnSubscribe = (subscription: NewsmongersInterface) => {
    removeSubscriber(subscription);
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <LoadingOverlay
          message="Fetching lists of subscribers..."
          color={INDUSTRIAL_COLORS.text100}
        />
      )}

      <FlatList
        data={data}
        keyExtractor={item => item._id}
        renderItem={({item}) => {
          return (
            <View style={styles.email}>
              <Text>{item.email}</Text>
              {!result.isLoading && (
                <IconButton
                  icon="trash-bin-sharp"
                  color={INDUSTRIAL_COLORS.error800}
                  size={18}
                  onPress={() => handleUnSubscribe(item)}
                  style={styles.customIconStyle}
                />
              )}
              {result.isLoading && result.originalArgs?._id === item._id && (
                <ActivityIndicator
                  size="small"
                  color={INDUSTRIAL_COLORS.secondary900}
                />
              )}
            </View>
          );
        }}
      />

      {isError && (
        <ErrorToast
          text1="Fetching subscribers failed"
          text2="Please try later!!"
        />
      )}
    </View>
  );
};
export default AdminNewsmongers;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: INDUSTRIAL_COLORS.gray400,
    padding: SPACERS.spacer2,
  },
  email: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SPACERS.spacer1,
  },
  customIconStyle: {
    margin: 0,
  },
});
