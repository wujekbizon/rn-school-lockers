import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LockerDashboard} from '../screens';
const Stack = createNativeStackNavigator();

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerStyle: { backgroundColor: Colors.primary500 },
    //   headerTintColor: 'white',
    //   contentStyle: { backgroundColor: Colors.primary100 },
    //   headerRight: ({ tintColor }) => <IconButton icon="exit" size={24} color={tintColor} onPress={logout} />,
    // }}
    >
      <Stack.Screen name="Locker" component={LockerDashboard} />
    </Stack.Navigator>
  );
};

export default AuthenticatedStack;
