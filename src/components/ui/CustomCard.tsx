import {StyleSheet, Text, View, Platform} from 'react-native';
import {INDUSTRIAL_COLORS, SPACERS} from '../../constants/style';
import type {Locker} from '../../types/lockersState';

const CustomCard = ({locker}: {locker: Partial<Locker>}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.studentInfo}>
        <Text style={styles.text}>
          Student Name:{' '}
          <Text
            style={
              locker.privacy === 'public'
                ? styles.publicText
                : styles.privacyText
            }>
            {locker.student}
          </Text>{' '}
        </Text>
        <Text style={styles.text}>
          Locker Status:{' '}
          <Text
            style={
              locker.privacy === 'public'
                ? styles.publicText
                : styles.privacyText
            }>
            {locker.privacy}
          </Text>
        </Text>
      </View>
      <View style={styles.schoolInfo}>
        <Text style={styles.text}>
          School:{' '}
          <Text
            style={
              locker.privacy === 'public'
                ? styles.publicText
                : styles.privacyText
            }>
            {locker.schoolName}
          </Text>
        </Text>
        <Text style={styles.text}>
          Class -{' '}
          <Text
            style={
              locker.privacy === 'public'
                ? styles.publicText
                : styles.privacyText
            }>
            {locker.classroom}
          </Text>{' '}
        </Text>
      </View>
    </View>
  );
};
export default CustomCard;
const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    minHeight: 200,
    backgroundColor: INDUSTRIAL_COLORS.secondary900,
    borderRadius: SPACERS.smBorder,
    shadowColor: INDUSTRIAL_COLORS.gray200,
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 16,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    padding: SPACERS.spacer1,
  },
  studentInfo: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: SPACERS.spacer1,
  },
  schoolInfo: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: SPACERS.spacer1,
  },
  text: {
    color: INDUSTRIAL_COLORS.text100,
    fontSize: 16,
    fontFamily: 'Open Sans Medium',
  },
  publicText: {
    textTransform: 'capitalize',
    color: INDUSTRIAL_COLORS.secondary200,
    fontFamily: 'Gluten Bold',
  },
  privacyText: {
    textTransform: 'capitalize',
    color: INDUSTRIAL_COLORS.error800,
    fontFamily: 'Gluten Bold',
  },
});
