import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input} from '../index';
import type {Locker} from '../../types/lockersState';
import type {AuthFormProps} from '../../types/auth';

const AuthForm: React.FC<AuthFormProps> = ({
  isLogin,
  onSubmit,
  credentialsInvalid,
}) => {
  const [inputs, setInputs] = useState<Locker>({
    email: '',
    password: '',
    title: '',
    student: '',
    schoolName: '',
    classroom: '',
  });

  const {
    email: emailIsInvalid,
    password: passwordIsInvalid,
    title: titleIsInvalid,
    student: studentIsInvalid,
    schoolName: schoolNameIsInvalid,
    classroom: classroomIsInvalid,
  } = credentialsInvalid;

  const updateInputValueHandler = (inputType: string, enteredValue: string) => {
    switch (inputType) {
      case 'email':
        setInputs(currentInputs => ({...currentInputs, email: enteredValue}));
        break;
      case 'password':
        setInputs(currentInputs => ({
          ...currentInputs,
          password: enteredValue,
        }));
        break;
      case 'title':
        setInputs(currentInputs => ({
          ...currentInputs,
          title: enteredValue,
        }));
        break;
      case 'student':
        setInputs(currentInputs => ({
          ...currentInputs,
          student: enteredValue,
        }));
        break;
      case 'schoolName':
        setInputs(currentInputs => ({
          ...currentInputs,
          schoolName: enteredValue,
        }));
        break;
      case 'classroom':
        setInputs(currentInputs => ({
          ...currentInputs,
          classroom: enteredValue,
        }));
        break;
    }
  };

  const submitHandler = () => {
    onSubmit({
      email: inputs.email,
      password: inputs.password,
      title: inputs.title,
      student: inputs.student,
      schoolName: inputs.schoolName,
      classroom: inputs.classroom,
    });
  };

  return (
    <View>
      <View>
        <Input
          label="Email Address"
          onUpdateValue={enteredValue =>
            updateInputValueHandler('email', enteredValue)
          }
          value={inputs.email}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}
        />
        <Input
          label="Password"
          onUpdateValue={enteredValue =>
            updateInputValueHandler('password', enteredValue)
          }
          secure
          value={inputs.password}
          isInvalid={passwordIsInvalid}
        />
        {!isLogin && (
          <Input
            label="Title"
            onUpdateValue={enteredValue =>
              updateInputValueHandler('title', enteredValue)
            }
            value={inputs.title}
            keyboardType="default"
            isInvalid={titleIsInvalid}
          />
        )}
        {!isLogin && (
          <Input
            label="Full Name"
            onUpdateValue={enteredValue =>
              updateInputValueHandler('student', enteredValue)
            }
            keyboardType="default"
            value={inputs.student}
            isInvalid={studentIsInvalid}
          />
        )}
        {!isLogin && (
          <Input
            label="School"
            onUpdateValue={enteredValue =>
              updateInputValueHandler('schoolName', enteredValue)
            }
            keyboardType="default"
            value={inputs.schoolName}
            isInvalid={schoolNameIsInvalid}
          />
        )}
        {!isLogin && (
          <Input
            label="Class"
            onUpdateValue={enteredValue =>
              updateInputValueHandler('classroom', enteredValue)
            }
            keyboardType="default"
            value={inputs.classroom}
            isInvalid={classroomIsInvalid}
          />
        )}
        <View style={styles.buttons}>
          <Button onPress={submitHandler}>
            {isLogin ? 'Log In' : 'Register'}
          </Button>
        </View>
      </View>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
});
