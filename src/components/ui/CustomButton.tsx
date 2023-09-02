import {StyleSheet, Text, Pressable} from 'react-native';
import {INDUSTRIAL_COLORS, SPACERS} from '../../constants/style';
import IconButton from './IconButton';

interface CustomButtonInterface {
  children: React.ReactNode;
  size?: number;
  color?: string;
  icon?: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonInterface> = ({
  children,
  icon,
  onPress,
  size,
  color,
}) => {
  return (
    <Pressable
      style={[styles.button, icon ? styles.iconButton : undefined]}
      onPress={onPress}
      android_ripple={{color: INDUSTRIAL_COLORS.error800}}>
      <Text style={styles.text}>{children}</Text>
      {icon && <IconButton size={size || 20} color={color} icon={icon} />}
    </Pressable>
  );
};
export default CustomButton;
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    backgroundColor: INDUSTRIAL_COLORS.secondary200,
    paddingHorizontal: SPACERS.spacer3,
    paddingVertical: SPACERS.spacer0,
  },
  iconButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: INDUSTRIAL_COLORS.secondary900,
    fontFamily: 'Gluten Bold',
    fontSize: 22,
    paddingRight: SPACERS.spacer1,
  },
});
