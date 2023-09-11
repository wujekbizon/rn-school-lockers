import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  AdminDashboard,
  AdminSideMenu,
  AdminUsers,
  AdminSettings,
  AdminNewsmongers,
} from '../screens';

const Tab = createBottomTabNavigator();

const AdminTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AdminDashboard"
        component={AdminDashboard}
        options={{
          headerShown: false,
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size}) => (
            <Icon color={color} size={size} name="home" />
          ),
        }}
      />
      <Tab.Screen
        name="AdminUsers"
        component={AdminUsers}
        options={{
          headerShown: false,
          tabBarLabel: 'Users',
          tabBarIcon: ({color, size}) => (
            <Icon color={color} size={size} name="people-sharp" />
          ),
        }}
      />
      <Tab.Screen
        name="AdminNewsmongers"
        component={AdminNewsmongers}
        options={{
          headerShown: false,
          tabBarLabel: 'Newsletters',
          tabBarIcon: ({color, size}) => (
            <Icon color={color} size={size} name="newspaper" />
          ),
        }}
      />
      <Tab.Screen
        name="AdminSettings"
        component={AdminSettings}
        options={{
          headerShown: false,
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <Icon color={color} size={size} name="settings-sharp" />
          ),
        }}
      />
      <Tab.Screen
        name="SideMenu"
        component={AdminSideMenu}
        options={{
          headerShown: false,
          tabBarLabel: 'Menu',
          tabBarIcon: ({color, size}) => (
            <Icon color={color} size={size} name="menu" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default AdminTabs;
