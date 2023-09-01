import {StyleSheet, Text, View, Modal, Button, Pressable} from 'react-native';
import {useActions} from '../../hooks/useActions';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IconButton} from '../../components';
import {INDUSTRIAL_COLORS, SPACERS} from '../../constants/style';

const SideModal = () => {
  const {isSideMenuOpen} = useTypedSelector(state => state.sideMenu);
  const {closeSideMenu} = useActions();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handlePressDashboard = () => {
    navigation.navigate('LockerDashboard');
    closeSideMenu();
  };
  const handlePressRumors = () => {
    navigation.navigate('Rumors');
    closeSideMenu();
  };

  const handlePressCalendar = () => {
    navigation.navigate('Calendar');
    closeSideMenu();
  };

  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={isSideMenuOpen}
      onRequestClose={() => closeSideMenu()}>
      <View style={styles.menu}>
        <Pressable style={styles.button} onPress={handlePressDashboard}>
          <IconButton
            size={15}
            color={INDUSTRIAL_COLORS.secondary900}
            icon="home"
          />
          <Text>Dashboard</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handlePressRumors}>
          <IconButton
            size={15}
            color={INDUSTRIAL_COLORS.secondary900}
            icon="chatbox-sharp"
          />
          <Text>Rumors</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handlePressCalendar}>
          <IconButton
            size={15}
            color={INDUSTRIAL_COLORS.secondary900}
            icon="calendar-sharp"
          />
          <Text>Calendar</Text>
        </Pressable>
        <Text>SideModal</Text>
        <Text>SideModal</Text>
        <Text>SideModal</Text>
        <Text>SideModal</Text>
        <Text>SideModal</Text>
        <Button title="Close" onPress={() => closeSideMenu()} />
      </View>
    </Modal>
  );
};
export default SideModal;
const styles = StyleSheet.create({
  menu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    minWidth: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    elevation: 2,
  },
});
