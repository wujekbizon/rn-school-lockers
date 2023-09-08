import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  StyleProp,
  TextStyle,
} from 'react-native';
import {INDUSTRIAL_COLORS} from '../../constants/style';

function LoadingOverlay({
  message,
  style,
  color,
}: {
  message: string;
  style?: StyleProp<TextStyle>;
  color: string;
}) {
  return (
    <View style={styles.rootContainer}>
      <Text style={[styles.message, style]}>{message}</Text>
      <ActivityIndicator size="large" color={color} />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  message: {
    color: INDUSTRIAL_COLORS.secondary900,
    fontSize: 16,
    marginBottom: 12,
  },
});
