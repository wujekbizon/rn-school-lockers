import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  LockerDashboard,
  Rumors,
  LockerSettings,
  LockerAssistant,
  LockerLearnPlatfrom,
} from '../screens';
import {INDUSTRIAL_COLORS} from '../constants/style';

const Tab = createBottomTabNavigator();

const LockerTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: INDUSTRIAL_COLORS.gray200,
        tabBarInactiveBackgroundColor: INDUSTRIAL_COLORS.gray400,
        tabBarLabelStyle: {
          color: INDUSTRIAL_COLORS.secondary900,
        },
      }}>
      <Tab.Screen
        name="LockerDashboard"
        component={LockerDashboard}
        options={{
          headerShown: false,
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({size}) => (
            <Icon
              color={INDUSTRIAL_COLORS.secondary900}
              size={size}
              name="home"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Rumors"
        component={Rumors}
        options={{
          headerShown: false,
          tabBarLabel: 'Rumors',
          tabBarIcon: ({size}) => (
            <Icon
              color={INDUSTRIAL_COLORS.secondary900}
              size={size}
              name="chatbubbles-sharp"
            />
          ),
        }}
      />
      <Tab.Screen
        name="AIAssistant"
        component={LockerAssistant}
        options={{
          headerShown: false,
          tabBarLabel: 'Assistant',
          tabBarIcon: ({size}) => (
            <Icon
              color={INDUSTRIAL_COLORS.secondary900}
              size={size}
              name="code"
            />
          ),
        }}
      />
      <Tab.Screen
        name="E-Learning"
        component={LockerLearnPlatfrom}
        options={{
          headerShown: false,
          tabBarLabel: 'Learn',
          tabBarIcon: ({size}) => (
            <Icon
              color={INDUSTRIAL_COLORS.secondary900}
              size={size}
              name="book-sharp"
            />
          ),
        }}
      />
      <Tab.Screen
        name="LockerSettings"
        component={LockerSettings}
        options={{
          headerShown: false,
          tabBarLabel: 'Settings',
          tabBarIcon: ({size}) => (
            <Icon
              color={INDUSTRIAL_COLORS.secondary900}
              size={size}
              name="settings-sharp"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default LockerTabs;
const styles = StyleSheet.create({});
