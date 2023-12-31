import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AdminTabs from './AdminTabs';
import Toast from 'react-native-toast-message';
import {useAppDispatch} from '../hooks/useAppDispatch';
import {logoutLocker} from '../store/thunks/logoutLocker';
import {IconButton} from '../components';
import {INDUSTRIAL_COLORS} from '../constants/style';

const Stack = createNativeStackNavigator();

const AuthenticatedAdminStack = () => {
  const dispatch = useAppDispatch();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: INDUSTRIAL_COLORS.primary500},
        headerTintColor: 'white',
        contentStyle: {backgroundColor: INDUSTRIAL_COLORS.gray600},
        headerRight: ({tintColor}) => (
          <IconButton
            icon="log-out-outline"
            color={tintColor}
            size={24}
            onPress={() => {
              dispatch(logoutLocker());
              Toast.show({type: 'success', text1: 'Successfully logged out!'});
            }}
          />
        ),
      }}>
      <Stack.Screen name="Admin" component={AdminTabs} />
    </Stack.Navigator>
  );
};
export default AuthenticatedAdminStack;
