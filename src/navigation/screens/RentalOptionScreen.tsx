import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type RentalOptionProps = {
  title: string;
  description: string;
  image: any;
  onPress: () => void;
};

const RentalOption = ({ title, description, image, onPress }: RentalOptionProps) => (
  <TouchableOpacity style={styles.optionCard} onPress={onPress}>
    <View style={styles.optionContent}>
      <View style={styles.optionInfo}>
        <Image source={image} style={styles.optionImage} />
        <View style={styles.optionText}>
          <Text style={styles.optionTitle}>{title}</Text>
          <Text style={styles.optionDescription}>{description}</Text>
        </View>
      </View>
      <Feather name="chevron-right" size={24} color="#DC2626" />
    </View>
  </TouchableOpacity>
);

export default function RentalOptionsScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Car Rental</Text>
          <Text style={styles.headerSubtitle}>What type of car rental do you need?</Text>
        </View>
      </View>

      {/* Options */}
      <View style={styles.optionsContainer}>
        <RentalOption
          title="Self Drive"
          description="The choice when you need personal space"
          image={require('../../assets/selfDrive.png')}
          onPress={() => navigation.navigate('SelfDrive')}
        />

        <RentalOption
          title="With Driver"
          description="Choice for convenience"
          image={require('../../assets/withDrive.png')}
          onPress={() => navigation.navigate('WithDriver')}
        />

        <RentalOption
          title="Only Drivers"
          description="Option when the vehicle already exists"
          image={require('../../assets/onlyDrivers.png')}
          onPress={() => navigation.navigate('OnlyDriver')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    paddingTop: 10,
    backgroundColor: '#fff',
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // Position the back button at the top left
    left: 20,
    top: 20,
  },
  headerTextContainer: {
    alignItems: 'center',
    marginTop: 10
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  optionsContainer: {
    padding: 20,
  },
  optionCard: {
    backgroundColor: '#FFF5F5',
    borderRadius: 12,
    marginBottom: 16,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionImage: {
    width: 80,
    height: 60,
    marginRight: 15,
  },
  optionText: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
  },
});

