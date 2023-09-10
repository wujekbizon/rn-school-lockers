import {StyleSheet, SafeAreaView} from 'react-native';
import {useEffect} from 'react';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {fetchAllRumors} from '../store/thunks/getAllRumors';
import {useAppDispatch} from '../hooks/useAppDispatch';
import {LoadingOverlay, RumorsList, RumorsBar, RumorModal} from '../components';
import {INDUSTRIAL_COLORS, SPACERS} from '../constants/style';

const Rumors = () => {
  const dispatch = useAppDispatch();
  const {rumors, isLoading, isRumorModalOpen} = useTypedSelector(
    state => state.rumors,
  );

  useEffect(() => {
    dispatch(fetchAllRumors({rejectValue: {message: 'Something went wrong!'}}));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <LoadingOverlay
          message="Loading rumors..."
          style={styles.customLoadingOverlay}
          color={INDUSTRIAL_COLORS.text100}
        />
      )}
      {!isLoading && <RumorsBar />}
      {!isLoading && <RumorsList data={rumors} />}
      {!isLoading && <RumorModal />}
    </SafeAreaView>
  );
};
export default Rumors;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: INDUSTRIAL_COLORS.primary100,
    padding: SPACERS.spacer1,
  },
  customLoadingOverlay: {
    color: INDUSTRIAL_COLORS.text100,
  },
});
