import React from 'react';
import { 
  StyleSheet, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  Image, 
  Dimensions,
  ScrollView,
} from 'react-native';
import { Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const cars = [
  {
    id: '1',
    name: 'Innova',
    status: 'Available',
    image: require('../../assets/innova.png'),
  },
  {
    id: '2',
    name: 'Camry',
    status: 'Available',
    image: require('../../assets/innova.png'),
  },
];

export default function ChooseCarScreen() {
    const navigation = useNavigation();
  const [selectedCar, setSelectedCar] = React.useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerTitle}>Choose your car</Text>
          <Text style={styles.headerSubtitle}>Kindly select the car you would prefer to utilize</Text>
        </View>
      </View>

      <ScrollView 
        horizontal 
        pagingEnabled 
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const slide = Math.round(
            event.nativeEvent.contentOffset.x / Dimensions.get('window').width
          );
          setSelectedCar(slide);
        }}
        scrollEventThrottle={16}
      >
        {cars.map((car, index) => (
          <View key={car.id} style={styles.carSlide}>
            <View style={styles.carInfo}>
              <Text style={styles.carName}>{car.name}</Text>
              <Text style={styles.carStatus}>{car.status}</Text>
            </View>
            <Image source={car.image} style={styles.carImage} resizeMode="contain" />
          </View>
        ))}
      </ScrollView>

      <View style={styles.navigation}>
        <TouchableOpacity 
          style={[styles.navButton, selectedCar === 0 && styles.navButtonDisabled]}
          disabled={selectedCar === 0}
          onPress={() => {
            // Handle previous car
          }}
        >
          <Feather name="chevron-left" size={24} color={selectedCar === 0 ? '#ccc' : '#fff'} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.navButton, selectedCar === cars.length - 1 && styles.navButtonDisabled]}
          disabled={selectedCar === cars.length - 1}
          onPress={() => {
            // Handle next car
          }}
        >
          <Feather name="chevron-right" size={24} color={selectedCar === cars.length - 1 ? '#ccc' : '#fff'} />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.warning}>
          <Feather name="info" size={20} color="#DC2626" />
          <Text style={styles.warningText}>
            The selection of cars is based solely on the model, and the former plate number is determined by the system. The car selection can be changed at any time by the pool admin.
          </Text>
        </View>
        <TouchableOpacity style={styles.selectButton}>
          <Text style={styles.selectButtonText}>select</Text>
        </TouchableOpacity>
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
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  carSlide: {
    width: Dimensions.get('window').width,
    padding: 20,
    alignItems: 'center',
  },
  carInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  carName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  carStatus: {
    fontSize: 14,
    color: '#666',
  },
  carImage: {
    width: '100%',
    height: 200,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  navButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8B0000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButtonDisabled: {
    backgroundColor: '#f5f5f5',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  warning: {
    flexDirection: 'row',
    backgroundColor: '#FEE2E2',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  warningText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 12,
    color: '#DC2626',
  },
  selectButton: {
    backgroundColor: '#8B0000',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  selectButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

