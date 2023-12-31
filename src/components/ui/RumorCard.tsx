import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  GestureResponderEvent,
} from 'react-native';
import {useState} from 'react';
import type {Rumor} from '../../types/lockersState';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import IconButton from './IconButton';
import {INDUSTRIAL_COLORS, SPACERS} from '../../constants/style';
import DeleteRumorModal from './DeleteRumorModal';
import {calculateDaysAgo} from '../../utils/calculateDaysAgo';

type RumorCardProps = {
  item: Rumor;
  onDeleteRumor: (event: GestureResponderEvent) => void;
  onEditRumor: () => void;
};

const RumorCard: React.FC<RumorCardProps> = ({
  item,
  onDeleteRumor,
  onEditRumor,
}) => {
  const {currentLocker, lockers} = useTypedSelector(state => state.auth);
  const [liked, setLiked] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const {content, _id, likes, title, userId, createdAt, updatedAt} = item;

  const handleLikeRumor = () => {
    setLiked(!liked);
  };

  const humanReadableDate = calculateDaysAgo(createdAt);

  return (
    <>
      <View style={styles.card}>
        {!isDeleteModalOpen && (
          <View style={{flex: 1}}>
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
                    onPress={onEditRumor}
                    style={styles.customIconStyle}
                  />
                  <Text>|</Text>
                  <IconButton
                    icon="trash-bin-sharp"
                    color={INDUSTRIAL_COLORS.error800}
                    size={18}
                    onPress={() => setIsDeleteModalOpen(true)}
                    style={styles.customIconStyle}
                  />
                </View>
              )}
            </View>
            <View style={styles.date}>
              <Text style={styles.dateText}>
                Created {humanReadableDate === 0 && 'today'}
                {humanReadableDate === 1 && 'yestarday'}
                {humanReadableDate >= 2 && `${humanReadableDate} days ago.`}
              </Text>
            </View>
          </View>
        )}
        {isDeleteModalOpen && (
          <DeleteRumorModal
            onPress={onDeleteRumor}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
          />
        )}
      </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    color: INDUSTRIAL_COLORS.primary100,
  },
  likes: {
    fontFamily: 'Gluten Bold',
    fontSize: 18,
    color: INDUSTRIAL_COLORS.secondary500,
  },
  customIconStyle: {
    margin: 0,
  },
  date: {paddingTop: SPACERS.spacer0},
  dateText: {
    fontSize: 10,
    fontFamily: 'Open Sans SemiBold',
    color: INDUSTRIAL_COLORS.primary500,
  },
});
