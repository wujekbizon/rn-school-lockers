import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AdminDashboard} from '../screens';
const Stack = createNativeStackNavigator();

const AuthenticatedAdminStack = () => {
  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerStyle: { backgroundColor: Colors.primary500 },
    //   headerTintColor: 'white',
    //   contentStyle: { backgroundColor: Colors.primary100 },
    //   headerRight: ({ tintColor }) => <IconButton icon="exit" size={24} color={tintColor} onPress={logout} />,
    // }}
    >
      <Stack.Screen name="Admin" component={AdminDashboard} />
    </Stack.Navigator>
  );
};
export default AuthenticatedAdminStack;
