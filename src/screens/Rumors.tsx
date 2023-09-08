import {StyleSheet, Text, SafeAreaView, View, FlatList} from 'react-native';
import {useEffect} from 'react';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {fetchAllRumors} from '../store/thunks/getAllRumors';
import {useAppDispatch} from '../hooks/useAppDispatch';
import {LoadingOverlay, RumorCard} from '../components';

const Rumors = () => {
  const dispatch = useAppDispatch();
  const {rumors, isLoading} = useTypedSelector(state => state.rumors);

  useEffect(() => {
    dispatch(fetchAllRumors({rejectValue: {message: 'Something went wrong!'}}));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && <LoadingOverlay message="Loading rumors..." />}
      {!isLoading && (
        <FlatList
          data={rumors}
          keyExtractor={item => item._id}
          renderItem={({item}) => {
            return <RumorCard {...item} />;
          }}
        />
      )}
    </SafeAreaView>
  );
};
export default Rumors;
const styles = StyleSheet.create({
  container: {flex: 1},
});
