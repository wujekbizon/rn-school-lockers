import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginLocker, RegisterLocker} from '../screens';
import {INDUSTRIAL_COLORS} from '../constants/style';
import Splash from '../screens/Splash';

const Stack = createNativeStackNavigator();

const UnauthenticatedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: INDUSTRIAL_COLORS.primary500},
        headerTintColor: INDUSTRIAL_COLORS.text100,
        headerTitleStyle: {fontFamily: 'Gluten SemiBold'},
        contentStyle: {backgroundColor: INDUSTRIAL_COLORS.gray800},
        animation: 'slide_from_bottom',
      }}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
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
