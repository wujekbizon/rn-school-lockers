import {useEffect} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {useTypedSelector} from '../hooks/useTypedSelector';
import Toast from 'react-native-toast-message';
import {CustomCard, SideModal} from '../components';
import {INDUSTRIAL_COLORS, SPACERS} from '../constants/style';

const LockerDashboard = () => {
  const {currentLocker} = useTypedSelector(state => state.auth);

  useEffect(() => {
    Toast.show({
      type: 'success',
      text1: `Welcome ${currentLocker?.student}`,
    });
  }, []);

  return (
    <>
      <SideModal />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>{currentLocker?.title}</Text>
          <Image
            source={{
              uri: `https://res.cloudinary.com/dpnig0xon/image/upload/${currentLocker?.img}`,
            }}
            alt="avatar"
            style={styles.image}
          />
        </View>
        <CustomCard locker={currentLocker} />
      </ScrollView>
    </>
  );
};
export default LockerDashboard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: SPACERS.spacer1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SPACERS.spacer1,
    marginBottom: SPACERS.spacer1,
    backgroundColor: INDUSTRIAL_COLORS.secondary200,
    borderRadius: SPACERS.smBorder,
  },
  text: {
    fontFamily: 'Open Sans Bold',
    fontSize: 20,
    color: INDUSTRIAL_COLORS.text100,
  },
  image: {
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: SPACERS.smBorder,
  },
});
