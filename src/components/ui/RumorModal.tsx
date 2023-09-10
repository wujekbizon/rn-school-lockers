import {useState} from 'react';
import {StyleSheet, View, Modal} from 'react-native';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {isSimpleString} from '../../utils/verifyCredentials';
import {INDUSTRIAL_COLORS, SPACERS} from '../../constants/style';
import RumorForm from './RumorForm';
import {createRumor} from '../../store/thunks/createRumor';

const RumorModal = () => {
  const dispatch = useAppDispatch();
  const {isRumorModalOpen} = useTypedSelector(state => state.rumors);
  const {closeRumorModal} = useActions();
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    title: false,
    content: false,
  });

  const submitHandler = ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => {
    const titleIsValid = isSimpleString(title);
    const contentIsValid = isSimpleString(content);

    if (!titleIsValid || !contentIsValid) {
      setCredentialsInvalid({
        title: !titleIsValid,
        content: !contentIsValid,
      });
      return;
    }
    closeRumorModal();
    dispatch(createRumor({title, content}));
  };

  return (
    <View style={[styles.centeredView]}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isRumorModalOpen}
        onRequestClose={() => closeRumorModal()}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <RumorForm
              credentialsInvalid={credentialsInvalid}
              onSubmit={submitHandler}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default RumorModal;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalView: {
    height: '60%',
    alignItems: 'center',
    backgroundColor: INDUSTRIAL_COLORS.primary500,
    borderRadius: SPACERS.mBorder,
    margin: SPACERS.spacer2,
    padding: SPACERS.spacer1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: SPACERS.spacer0,
  },
  buttonDelete: {
    backgroundColor: INDUSTRIAL_COLORS.error500,
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
});
