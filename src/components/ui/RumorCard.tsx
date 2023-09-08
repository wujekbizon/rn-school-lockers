import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useState} from 'react';
import type {Rumor} from '../../types/lockersState';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import IconButton from './IconButton';
import {INDUSTRIAL_COLORS, SPACERS} from '../../constants/style';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useActions} from '../../hooks/useActions';
import DeleteRumorModal from './DeleteRumorModal';

const RumorCard: React.FC<Rumor> = ({
  content,
  _id,
  likes,
  title,
  userId,
  createdAt,
  updatedAt,
}) => {
  const {currentLocker} = useTypedSelector(state => state.lockers);
  const {isDeleteRumorModalOpen} = useTypedSelector(state => state.rumors);
  const {openDeleteRumorModal} = useActions();
  const [liked, setLiked] = useState(false);

  const handleLikeRumor = () => {
    setLiked(!liked);
    console.log('dispatch rumor thunk with update');
  };

  const handleEditRumor = () => {
    console.log(_id);
    console.log('dispatch rumor thunk with edit');
  };

  return (
    <>
      {<DeleteRumorModal _id={_id} />}
      {!isDeleteRumorModalOpen && (
        <View style={styles.card}>
          <View style={styles.title}>
            <Text style={styles.text}>{title}</Text>
          </View>
          <ScrollView style={styles.contentContainer}>
            <Text style={styles.content}>{content}</Text>
          </ScrollView>
          <View style={styles.icons}>
            <Text style={styles.text}>
              Likes: <Text style={styles.likes}>{likes}</Text>
            </Text>
            {currentLocker?._id !== userId && (
              <IconButton
                icon={liked ? 'heart' : 'heart-outline'}
                color={INDUSTRIAL_COLORS.secondary500}
                size={24}
                onPress={handleLikeRumor}
                style={styles.customIconStyle}
              />
            )}

            {currentLocker?._id === userId && (
              <View style={styles.rightIcons}>
                <IconButton
                  icon="pencil"
                  color={INDUSTRIAL_COLORS.secondary900}
                  size={19}
                  onPress={handleEditRumor}
                  style={styles.customIconStyle}
                />
                <Text>|</Text>
                <IconButton
                  icon="trash-bin-sharp"
                  color={INDUSTRIAL_COLORS.error800}
                  size={18}
                  onPress={() => openDeleteRumorModal()}
                  style={styles.customIconStyle}
                />
              </View>
            )}
          </View>
        </View>
      )}
    </>
  );
};
export default RumorCard;
const styles = StyleSheet.create({
  card: {
    height: 200,
    flex: 1,
    backgroundColor: INDUSTRIAL_COLORS.gray200,
    marginBottom: SPACERS.spacer1,
    borderRadius: SPACERS.smBorder,
    padding: SPACERS.spacer1,
  },
  title: {
    marginBottom: SPACERS.spacer0,
    borderBottomWidth: 1,
    borderBottomColor: INDUSTRIAL_COLORS.gray400,
  },
  contentContainer: {
    paddingTop: SPACERS.spacer1,
  },
  content: {
    color: INDUSTRIAL_COLORS.secondary900,
    fontSize: 16,
    fontFamily: 'Open Sans SemiBold',
    paddingBottom: SPACERS.spacer2,
    marginBottom: SPACERS.spacer3,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SPACERS.spacer0,
    backgroundColor: INDUSTRIAL_COLORS.gray400,
    borderRadius: SPACERS.smBorder,
  },

  rightIcons: {
    width: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  likes: {
    fontFamily: 'Gluten Bold',
    fontSize: 18,
    color: INDUSTRIAL_COLORS.secondary500,
  },
  customIconStyle: {
    margin: 0,
  },
});
