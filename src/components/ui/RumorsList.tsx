import {FlatList} from 'react-native';
import RumorCard from './RumorCard';
import {Rumor} from '../../types/lockersState';

type RumorListProps = {data: Rumor[]};

const RumorsList: React.FC<RumorListProps> = ({data}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item._id}
      renderItem={({item}) => {
        return <RumorCard item={item} />;
      }}
    />
  );
};
export default RumorsList;
