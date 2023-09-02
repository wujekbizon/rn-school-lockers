import {StyleSheet, View, Modal, Button, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useActions} from '../../hooks/useActions';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {SideMenuTile, CustomButton} from '../../components/index';

import {INDUSTRIAL_COLORS, SPACERS} from '../../constants/style';

const SideModal = () => {
  const {isSideMenuOpen} = useTypedSelector(state => state.sideMenu);
  const {closeSideMenu} = useActions();

  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={isSideMenuOpen}
      onRequestClose={() => closeSideMenu()}>
      <LinearGradient
        colors={[
          INDUSTRIAL_COLORS.primary500,
          INDUSTRIAL_COLORS.secondary200,
          INDUSTRIAL_COLORS.secondary900,
        ]}
        style={styles.linearGradient}>
        <SafeAreaView style={styles.rootContainer}>
          <View style={styles.container}>
            <SideMenuTile />
          </View>

          <View>
            <CustomButton onPress={() => closeSideMenu()}>Close</CustomButton>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </Modal>
  );
};
export default SideModal;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    gap: SPACERS.spacer1,
    padding: SPACERS.spacer3,
  },
});
