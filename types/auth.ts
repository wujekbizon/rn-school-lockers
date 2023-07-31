import type {KeyboardTypeOptions} from 'react-native';
import type {Locker} from './lockersState';

export interface InputProps {
  label: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  secure?: boolean;
  onUpdateValue: (text: string) => void | undefined;
  value: string | undefined;
  isInvalid: boolean;
}

export type AuthFormProps = {
  isLogin: boolean;
  onSubmit: (credentials: Locker) => void;
  credentialsInvalid: {
    email: boolean;
    password: boolean;
    title: boolean;
    student: boolean;
    schoolName: boolean;
    classroom: boolean;
  };
};
