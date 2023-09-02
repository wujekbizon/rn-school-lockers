import {StyleSheet, Text, Pressable} from 'react-native';
import IconButton from './IconButton';
import {INDUSTRIAL_COLORS, SPACERS} from '../../constants/style';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useActions} from '../../hooks/useActions';

interface SideMenuLinkInterFace {
  link: {
    title: string;
    icon: string;
    navigationLink: string;
  };
}

const SideMenuLink: React.FC<SideMenuLinkInterFace> = ({link}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {closeSideMenu} = useActions();

  const handlePressLink = () => {
    navigation.navigate(link.navigationLink);
    closeSideMenu();
  };

  return (
    <Pressable
      style={styles.button}
      onPress={handlePressLink}
      android_ripple={{color: INDUSTRIAL_COLORS.secondary200}}>
      <IconButton
        size={20}
        color={INDUSTRIAL_COLORS.secondary900}
        icon={link.icon}
      />
      <Text style={styles.text}>{link.title}</Text>
    </Pressable>
  );
};
export default SideMenuLink;
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
    backgroundColor: INDUSTRIAL_COLORS.gray800,
    padding: SPACERS.spacer0,
  },
  text: {
    color: INDUSTRIAL_COLORS.text100,
    fontFamily: 'Open Sans SemiBold',
    fontSize: 20,
    paddingRight: SPACERS.spacer1,
  },
});
