import {StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import {useState, useEffect} from 'react';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';
import {RumorFormProps} from '../../types/rumorsState';
import {INDUSTRIAL_COLORS, SPACERS} from '../../constants/style';
import Input from '../auth/Input';
import RumorFormButtons from './RumorFormButtons';

const RumorForm: React.FC<RumorFormProps> = ({
  credentialsInvalid,
  onSubmit,
}) => {
  const {isEditing, editedRumor} = useTypedSelector(state => state.rumors);
  const {updateEditedRumor} = useActions();
  const [inputs, setInputs] = useState({
    title: '',
    content: '',
  });

  useEffect(() => {
    if (isEditing && editedRumor) {
      setInputs({title: editedRumor.title, content: editedRumor.content});
    }
  }, [isEditing, editedRumor]);

  const {title: titleIsValid, content: contentIsValid} = credentialsInvalid;

  const updateInputValueHandler = (inputType: string, enteredValue: string) => {
    switch (inputType) {
      case 'title':
        setInputs(currentInputs => ({...currentInputs, title: enteredValue}));
        if (isEditing && editedRumor) {
          updateEditedRumor({...editedRumor, title: enteredValue});
        }
        break;
      case 'content':
        setInputs(currentInputs => ({
          ...currentInputs,
          content: enteredValue,
        }));
        if (isEditing && editedRumor) {
          updateEditedRumor({...editedRumor, content: enteredValue});
        }
        break;
    }
  };

  const handleAddRumor = () => {
    if (isEditing && editedRumor) {
      onSubmit({
        title: editedRumor.title,
        content: editedRumor.content,
      });
    } else {
      onSubmit({
        title: inputs.title,
        content: inputs.content,
      });
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.textStyle}>
          {isEditing ? 'Edit Rumor' : 'Add New Rumor'}
        </Text>
        <Input
          labelStyle={styles.custom}
          style={styles.customInputStyle}
          label="Title:"
          onUpdateValue={enteredValue =>
            updateInputValueHandler('title', enteredValue)
          }
          value={isEditing ? editedRumor?.title : inputs.title}
          keyboardType="default"
          isInvalid={titleIsValid}
        />
        <Input
          labelStyle={styles.custom}
          style={[styles.customInputStyle, styles.multiline]}
          label="Content:"
          onUpdateValue={enteredValue =>
            updateInputValueHandler('content', enteredValue)
          }
          value={isEditing ? editedRumor?.content : inputs.content}
          keyboardType="default"
          isInvalid={contentIsValid}
        />
        <RumorFormButtons onPress={handleAddRumor} />
      </View>
    </KeyboardAvoidingView>
  );
};
export default RumorForm;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  form: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly',
  },
  textStyle: {
    color: INDUSTRIAL_COLORS.secondary200,
    fontFamily: 'Gluten Bold',
    fontSize: 18,
    textAlign: 'center',
  },
  customInputStyle: {
    color: INDUSTRIAL_COLORS.secondary900,
    backgroundColor: INDUSTRIAL_COLORS.gray200,
    minHeight: 50,
  },
  custom: {
    color: INDUSTRIAL_COLORS.secondary500,
  },
  multiline: {
    minHeight: 120,
    textAlignVertical: 'top',
    padding: SPACERS.spacer0,
  },
});
