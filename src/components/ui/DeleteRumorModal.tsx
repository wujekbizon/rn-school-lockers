import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  GestureResponderEvent,
} from 'react-native';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {deleteRumor} from '../../store/thunks/deleteRumor';
import {Rumor} from '../../types/lockersState';

const DeleteRumorModal = ({_id}: {_id: string}) => {
  const {isLoading, isDeleteRumorModalOpen} = useTypedSelector(
    state => state.rumors,
  );
  const dispatch = useAppDispatch();
  const {closeDeleteRumorModal} = useActions();

  const handleDeleteRumor = () => {
    console.log(_id);
    // dispatch(deleteRumor({_id}));
    // closeDeleteRumorModal();
  };

  return (
    <View style={styles.modal}>
      <Modal
        animationType="slide"
        visible={isDeleteRumorModalOpen}
        onRequestClose={() => closeDeleteRumorModal()}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure you want to delete this rumor?
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleDeleteRumor}>
              <Text style={styles.textStyle}>Delete Rumor</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => closeDeleteRumorModal()}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default DeleteRumorModal;
const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
});
