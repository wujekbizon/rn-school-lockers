import {useEffect} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Logo from '../../assets/images/logo.png';
import {INDUSTRIAL_COLORS} from '../constants/style';

const Splash = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={Logo} style={styles.image} />
      <Text style={styles.logoTitle}>School Lockers</Text>
    </SafeAreaView>
  );
};
export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: INDUSTRIAL_COLORS.primary500,
  },
  image: {
    width: '100%',
    objectFit: 'cover',
  },
  logoTitle: {
    fontSize: 28,
    color: INDUSTRIAL_COLORS.secondary200,
    textTransform: 'uppercase',
    fontFamily: 'Gluten Bold',
    marginVertical: 30,
  },
});
