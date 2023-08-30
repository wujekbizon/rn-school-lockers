import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AdminDashboard, AdminSideMenu} from '../screens';

const Tab = createBottomTabNavigator();

const AdminTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AdminDashboard"
        component={AdminDashboard}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SideMenu"
        component={AdminSideMenu}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
export default AdminTabs;
