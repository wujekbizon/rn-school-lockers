import {NavigationContainer} from '@react-navigation/native';
import {useTypedSelector} from '../hooks/useTypedSelector';
import UnauthenticatedStack from './UnauthenticateStack';
import AuthenticatedAdminStack from './AuthenticatedAdminStack';
import AuthenticatedStack from './AuthenticatedStack';

const Navigation = (): JSX.Element => {
  const {isAuthenticated, isAdmin} = useTypedSelector(
    state => state.authLocker,
  );

  return (
    <NavigationContainer>
      {!isAuthenticated && <UnauthenticatedStack />}
      {isAuthenticated && !isAdmin && <AuthenticatedStack />}
      {isAuthenticated && isAdmin && <AuthenticatedAdminStack />}
    </NavigationContainer>
  );
};

export default Navigation;
