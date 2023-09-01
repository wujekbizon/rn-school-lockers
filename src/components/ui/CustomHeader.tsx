import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import Toast from 'react-native-toast-message';
import {logoutLocker} from '../../store/thunks/logoutLocker';
import {INDUSTRIAL_COLORS} from '../../constants/style';
import {IconButton} from '../../components';
import {useActions} from '../../hooks/useActions';

const CustomHeader = () => {
  const dispatch = useAppDispatch();
  const {currentLocker} = useTypedSelector(state => state.lockers);
  const {openSideMenu} = useActions();

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[
        INDUSTRIAL_COLORS.primary100,
        INDUSTRIAL_COLORS.secondary200,
        INDUSTRIAL_COLORS.secondary700,
      ]}
      style={styles.header}>
      <IconButton
        icon="menu"
        color={INDUSTRIAL_COLORS.secondary900}
        size={24}
        onPress={() => {
          openSideMenu();
        }}
      />
      <Text style={styles.title}>{currentLocker?.title}</Text>
      <IconButton
        icon="log-out-outline"
        color={INDUSTRIAL_COLORS.secondary900}
        size={24}
        onPress={() => {
          dispatch(logoutLocker());
          Toast.show({
            type: 'success',
            text1: 'Successfully logged out!',
          });
        }}
      />
    </LinearGradient>
  );
};
export default CustomHeader;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: 'Gluten Regular',
    fontSize: 20,
    color: INDUSTRIAL_COLORS.text100,
  },
});
