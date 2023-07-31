import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {Locker} from '../../types/lockersState';
import {FlatButton, AuthForm} from '../index';
import {
  verifyEmail,
  verifyPassword,
  isSimpleString,
} from '../../utils/verifyCredentials';
import Toast from 'react-native-toast-message';

import {INDUSTRIAL_COLORS} from '../../constants/style';

const AuthContent = ({isLogin}: {isLogin: boolean}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    title: false,
    student: false,
    schoolName: false,
    classroom: false,
  });
  const switchAuthModeHandler = () => {
    navigation.replace(isLogin ? 'Register' : 'Login');
  };

  const submitHandler = ({
    email,
    password,
    classroom,
    schoolName,
    student,
    title,
  }: Locker) => {
    const emailIsValid = verifyEmail(email);
    const passwordIsValid = verifyPassword(password);
    const titleIsValid = isSimpleString(title);
    const studentIsValid = isSimpleString(student);
    const schoolNameIsValid = isSimpleString(schoolName);
    const classroomIsValid = isSimpleString(classroom);

    if (
      !isLogin ||
      !emailIsValid ||
      !passwordIsValid ||
      !titleIsValid ||
      !studentIsValid ||
      !schoolNameIsValid ||
      !classroomIsValid
    ) {
      Toast.show({
        type: 'error',
        text1: 'Invalid input',
        text2: 'Please check your entered credentials.',
      });
      setCredentialsInvalid({
        email: !emailIsValid,
        password: !passwordIsValid,
        title: !titleIsValid,
        student: !studentIsValid,
        schoolName: !schoolNameIsValid,
        classroom: !classroomIsValid,
      });
      return;
    }
    // TODO
    // register new locker logic here
  };

  return (
    <View style={styles.authContent}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? 'Register a new locker' : 'Log in instead'}
        </FlatButton>
      </View>
    </View>
  );
};

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: INDUSTRIAL_COLORS.primary500,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttons: {
    marginTop: 8,
  },
});
