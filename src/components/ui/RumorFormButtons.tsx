import {
  StyleSheet,
  Text,
  View,
  Pressable,
  GestureResponderEvent,
} from 'react-native';
import {INDUSTRIAL_COLORS, SPACERS} from '../../constants/style';
import {useActions} from '../../hooks/useActions';

interface RumorsFormButtonsInterface {
  onPress: (event: GestureResponderEvent) => void;
}

const RumorFormButtons: React.FC<RumorsFormButtonsInterface> = ({onPress}) => {
  const {closeRumorModal} = useActions();
  return (
    <View style={styles.btns}>
      <Pressable
        android_ripple={{color: INDUSTRIAL_COLORS.secondary200}}
        style={[styles.button, styles.buttonAdd]}
        onPress={onPress}>
        <Text style={styles.textStyle}>Add Rumor</Text>
      </Pressable>
      <Pressable
        android_ripple={{color: INDUSTRIAL_COLORS.error800}}
        style={[styles.button, styles.buttonCancel]}
        onPress={() => closeRumorModal()}>
        <Text style={styles.textStyle}>Cancel</Text>
      </Pressable>
    </View>
  );
};
export default RumorFormButtons;
const styles = StyleSheet.create({
  btns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    padding: SPACERS.spacer0,
    minWidth: 120,
  },
  buttonAdd: {
    backgroundColor: INDUSTRIAL_COLORS.secondary500,
  },
  buttonCancel: {
    backgroundColor: INDUSTRIAL_COLORS.error500,
  },
  textStyle: {
    color: INDUSTRIAL_COLORS.text100,
    fontFamily: 'Open Sans Bold',
    textAlign: 'center',
  },
});
