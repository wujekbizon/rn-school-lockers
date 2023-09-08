import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {INDUSTRIAL_COLORS} from '../../constants/style';

function LoadingOverlay({message}: {message: string}) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator size="large" color={INDUSTRIAL_COLORS.secondary900} />
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
