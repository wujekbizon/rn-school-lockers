import {StyleSheet, Text, View} from 'react-native';
import type {Rumor} from '../../types/lockersState';
import {useTypedSelector} from '../../hooks/useTypedSelector';

const RumorCard: React.FC<Rumor> = ({content, _id, likes, title, userId}) => {
  const {currentLocker} = useTypedSelector(state => state.lockers);

  return (
    <View style={styles.card}>
      <Text style={styles.content}>{content}</Text>
      {currentLocker?._id === userId && <Text>Delete me</Text>}
      {currentLocker?._id !== userId && <Text>Likes - {likes}</Text>}
    </View>
  );
};
export default RumorCard;
const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  content: {
    color: 'black',
  },
});
