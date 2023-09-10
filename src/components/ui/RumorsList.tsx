import {FlatList} from 'react-native';
import RumorCard from './RumorCard';
import {Rumor} from '../../types/lockersState';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {deleteRumor} from '../../store/thunks/deleteRumor';

type RumorListProps = {data: Rumor[]};

const RumorsList: React.FC<RumorListProps> = ({data}) => {
  const dispatch = useAppDispatch();

  const handleDeleteRumor = (item: Rumor) => {
    dispatch(deleteRumor(item));
  };

  return (
    <FlatList
      data={data}
      keyExtractor={item => item._id}
      renderItem={({item}) => {
        return (
          <RumorCard
            item={item}
            onDeleteRumor={() => handleDeleteRumor(item)}
          />
        );
      }}
    />
  );
};
export default RumorsList;
