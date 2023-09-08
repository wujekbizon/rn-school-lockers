import {Pressable, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type IconButtonType = {
  icon: string;
  color: string | undefined;
  size: number;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

const IconButton = ({icon, color, size, onPress, style}: IconButtonType) => {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.pressed, style]}
      onPress={onPress}>
      <Icon name={icon} color={color} size={size} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    margin: 8,
    borderRadius: 20,
  },
  pressed: {
    opacity: 0.7,
  },
});
