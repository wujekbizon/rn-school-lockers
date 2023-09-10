import {StyleSheet, Text, View} from 'react-native';
import {INDUSTRIAL_COLORS, SPACERS} from '../../constants/style';
import IconButton from './IconButton';
import {useActions} from '../../hooks/useActions';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {fetchAllRumors} from '../../store/thunks/getAllRumors';

const RumorsBar = () => {
  const {
    sortRumorsAscending,
    sortRumorsDescending,
    sortRumorsByDate,
    openRumorModal,
  } = useActions();
  const dispatch = useAppDispatch();

  return (
    <View style={styles.menu}>
      <View style={styles.sortIcons}>
        <Text style={styles.sortText}>Sort By:</Text>
        <IconButton
          icon="caret-up-circle-outline"
          color={INDUSTRIAL_COLORS.text100}
          size={24}
          onPress={() => sortRumorsAscending()}
        />
        <IconButton
          icon="caret-down-circle-outline"
          color={INDUSTRIAL_COLORS.text100}
          size={24}
          onPress={() => sortRumorsDescending()}
        />
        <IconButton
          icon="today-outline"
          color={INDUSTRIAL_COLORS.text100}
          size={24}
          onPress={() => sortRumorsByDate()}
        />
      </View>
      <View style={styles.sortIcons}>
        <IconButton
          icon="create"
          color={INDUSTRIAL_COLORS.text100}
          size={24}
          onPress={() => openRumorModal()}
        />
        <IconButton
          icon="sync"
          color={INDUSTRIAL_COLORS.text100}
          size={24}
          onPress={() =>
            dispatch(
              fetchAllRumors({rejectValue: {message: 'Something went wrong!'}}),
            )
          }
        />
      </View>
    </View>
  );
};
export default RumorsBar;
const styles = StyleSheet.create({
  menu: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: SPACERS.spacer1,
  },
  sortIcons: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  sortText: {
    textTransform: 'uppercase',
    fontSize: 16,
    fontFamily: 'Open Sans Bold',
    color: INDUSTRIAL_COLORS.secondary200,
  },
});
