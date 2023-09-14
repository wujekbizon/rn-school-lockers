import {FlatList} from 'react-native';
import RumorCard from './RumorCard';
import {Rumor} from '../../types/lockersState';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {deleteRumor} from '../../store/thunks/deleteRumor';
import {useActions} from '../../hooks/useActions';

type RumorListProps = {data: Rumor[]};

const RumorsList: React.FC<RumorListProps> = ({data}) => {
  const dispatch = useAppDispatch();
  const {openRumorModal, getEditedRumor} = useActions();

  const handleDeleteRumor = (item: Rumor) => {
    dispatch(deleteRumor(item));
  };

  const handleEditRumor = (item: Rumor) => {
    openRumorModal();
    getEditedRumor(item._id);
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
            onEditRumor={() => handleEditRumor(item)}
          />
        );
      }}
    />
  );
};
export default RumorsList;
