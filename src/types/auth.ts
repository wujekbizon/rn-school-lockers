import type {KeyboardTypeOptions, StyleProp, TextStyle} from 'react-native';
import type {Locker, Rumor} from './lockersState';

export interface InputProps {
  label: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  secure?: boolean;
  onUpdateValue: (text: string) => void | undefined;
  value: string | undefined;
  isInvalid: boolean;
  style?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
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

export type AuthContentProps = {
  isLogin: boolean;
  onAuth: (locker: Locker) => void;
};
