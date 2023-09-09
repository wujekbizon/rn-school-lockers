import {
  StyleSheet,
  Text,
  View,
  Pressable,
  GestureResponderEvent,
} from 'react-native';
import {INDUSTRIAL_COLORS, SPACERS} from '../../constants/style';

type DeleteRumorModalProps = {
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onPress: (event: GestureResponderEvent) => void;
};

const DeleteRumorModal: React.FC<DeleteRumorModalProps> = ({
  setIsDeleteModalOpen,
  onPress,
}) => {
  return (
    <View style={styles.modal}>
      <Text style={styles.modalText}>
        Are you sure you want to delete this rumor?
      </Text>
      <View style={styles.btns}>
        <Pressable
          android_ripple={{color: INDUSTRIAL_COLORS.error800}}
          style={[styles.button, styles.buttonDelete]}
          onPress={onPress}>
          <Text style={styles.textStyle}>Delete Rumor</Text>
        </Pressable>
        <Pressable
          android_ripple={{color: INDUSTRIAL_COLORS.secondary200}}
          style={[styles.button, styles.buttonCancel]}
          onPress={() => setIsDeleteModalOpen(false)}>
          <Text style={styles.textStyle}>Cancel</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default DeleteRumorModal;
const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    gap: SPACERS.spacer3,
    backgroundColor: INDUSTRIAL_COLORS.text100,
    borderRadius: SPACERS.smBorder,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textStyle: {
    color: INDUSTRIAL_COLORS.text100,
    fontFamily: 'Open Sans Bold',
  },
  modalText: {
    textAlign: 'center',
    fontFamily: 'Open Sans SemiBold',
    color: INDUSTRIAL_COLORS.secondary900,
  },
  button: {
    padding: SPACERS.spacer0,
  },
  buttonCancel: {
    backgroundColor: INDUSTRIAL_COLORS.primary100,
  },
  buttonDelete: {
    backgroundColor: INDUSTRIAL_COLORS.error500,
  },
});
