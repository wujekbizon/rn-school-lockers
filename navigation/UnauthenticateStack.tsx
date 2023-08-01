import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginLocker, RegisterLocker} from '../screens';
import {INDUSTRIAL_COLORS} from '../constants/style';

const Stack = createNativeStackNavigator();

const UnauthenticatedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: INDUSTRIAL_COLORS.primary500},
        headerTintColor: 'white',
        contentStyle: {backgroundColor: INDUSTRIAL_COLORS.gray800},
        animation: 'slide_from_bottom',
      }}>
      <Stack.Screen
        name="Login"
        component={LoginLocker}
        options={{
          title: 'Login To Exisitng Locker',
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterLocker}
        options={{
          title: 'Register New Locker',
        }}
      />
    </Stack.Navigator>
  );
};

export default UnauthenticatedStack;
