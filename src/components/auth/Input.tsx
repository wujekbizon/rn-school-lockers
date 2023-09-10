import {View, Text, TextInput, StyleSheet} from 'react-native';
import type {InputProps} from '../../types/auth';
import {INDUSTRIAL_COLORS} from '../../constants/style';

const Input = ({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
  style,
  labelStyle,
}: InputProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text
        style={[styles.label, labelStyle, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, style, isInvalid && styles.inputInvalid]}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
        maxLength={150}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: INDUSTRIAL_COLORS.text100,
    marginBottom: 4,
  },
  labelInvalid: {
    color: INDUSTRIAL_COLORS.error800,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: INDUSTRIAL_COLORS.gray200,
    borderRadius: 4,
    fontSize: 16,
    color: INDUSTRIAL_COLORS.gray800,
  },
  inputInvalid: {
    backgroundColor: INDUSTRIAL_COLORS.error100,
  },
});
