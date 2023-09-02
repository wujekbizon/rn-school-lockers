import {
  StyleSheet,
  View,
  useWindowDimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import {SIDE_MENU_LINKS} from '../../data/sideMenuLinks';
import {INDUSTRIAL_COLORS, SPACERS} from '../../constants/style';
import SideMenuLink from './SideMenuLink';

const SideMenuTile = () => {
  const {width} = useWindowDimensions();
  const tileWidth = width / 1.1;
  const tile = {
    width: tileWidth - SPACERS.spacer2,
  };

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.menu, tile]}>
        {SIDE_MENU_LINKS.map((link, index) => (
          <SideMenuLink key={link.title + index} link={link} />
        ))}
      </View>
    </ScrollView>
  );
};
export default SideMenuTile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: SPACERS.spacer3,
    elevation: 4,
  },
  menu: {
    gap: SPACERS.spacer2,
    backgroundColor: INDUSTRIAL_COLORS.primary500,
    borderRadius: SPACERS.smBorder,
    padding: SPACERS.spacer2,
    marginBottom: SPACERS.spacer2,
  },
});
