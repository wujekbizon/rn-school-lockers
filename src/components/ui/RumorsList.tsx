import {StyleSheet, FlatList} from 'react-native';
import RumorCard from './RumorCard';
import DeleteRumorModal from './DeleteRumorModal';
import {Rumor} from '../../types/lockersState';
import {useTypedSelector} from '../../hooks/useTypedSelector';

const RumorsList = ({data}: {data: Rumor[]}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item._id}
      renderItem={({item}) => {
        return <RumorCard {...item} />;
      }}
    />
  );
};
export default RumorsList;
const styles = StyleSheet.create({});
