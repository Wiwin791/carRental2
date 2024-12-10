import React from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { Text, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import RentalFormWithDriver from '../../../components/RentalFormWithDriver';

export default function WithDriverScreen() {

  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('#820300');
  }, []);

  const navigation = useNavigation();

  return (
    <ImageBackground 
      source={require('../../../../assets/withDriver.png')}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity 
            style={styles.navButton}
            onPress={() => navigation.goBack()}
          >
            <Feather name="chevron-left" size={25} color="white" />
          </TouchableOpacity>
          <View style={styles.headerTime}>
            <Text style={styles.timeText}>9:30</Text>
          </View>
        </View>
        <View style={styles.formContainer}>
          <RentalFormWithDriver
            onSearch={() => navigation.navigate('ChooseCar')}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: '27%', 
  },
  container: {
    flex: 1,
    marginBottom: 150
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'transparent',
  },
  backButton: {
    padding: 5,
  },
  headerTime: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: -1,
  },
  timeText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  navButton: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
