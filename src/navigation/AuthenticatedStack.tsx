import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LockerTabs from './LockerTabs';
import {LockerCalendar} from '../screens';
import {CustomHeader} from '../components';
const Stack = createNativeStackNavigator();

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Locker"
        component={LockerTabs}
        options={{
          header: () => <CustomHeader />,
        }}
      />
      <Stack.Screen
        name="Calendar"
        component={LockerCalendar}
        options={{
          header: () => <CustomHeader />,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticatedStack;
