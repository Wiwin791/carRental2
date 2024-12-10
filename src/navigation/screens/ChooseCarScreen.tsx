import React from 'react';
import { 
  StyleSheet, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  Image, 
  Dimensions,
  FlatList,
  StatusBar
} from 'react-native';
import { Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const cars = [
  {
    id: '1',
    name: 'Innova',
    status: 'Available',
    image: require('../../../assets/innovA.png'),
  },
  {
    id: '2',
    name: 'Calya',
    status: 'No available',
    image: require('../../../assets/calyaZ.png'),
  },
  {
    id: '3',
    name: 'Sienta',
    status: 'Available',
    image: require('../../../assets/sienta.png'),
  },
];

export default function ChooseCarScreen() {

  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('#820300');
  }, []);
  
  const navigation = useNavigation();
  const [selectedCar, setSelectedCar] = React.useState(0);
  const flatListRef = React.useRef(null);

  const handlePrev = () => {
    if (selectedCar > 0) {
      const newIndex = selectedCar - 1;
      setSelectedCar(newIndex);
      flatListRef.current.scrollToIndex({ index: newIndex });
    }
  };

  const handleNext = () => {
    if (selectedCar < cars.length - 1) {
      const newIndex = selectedCar + 1;
      setSelectedCar(newIndex);
      flatListRef.current.scrollToIndex({ index: newIndex });
    }
  };

  const renderItem = ({ item, index }) => {
    const isAvailable = item.status === 'Available';

    return (
      <View style={[styles.carSlide, !isAvailable && styles.disabledCar]}>
        <View style={[styles.carCard, !isAvailable && styles.disabledCard]}>
          <View style={styles.decorativeCircle1} />
          <View style={styles.decorativeCircle2} />
          <View style={styles.carInfo}>
            <Text style={styles.carName}>{item.name}</Text>
            <Text style={styles.carStatus}>{item.status}</Text>
          </View>
          <Image source={item.image} style={styles.carImage} resizeMode="contain" />
          <TouchableOpacity 
            style={[styles.selectButton, !isAvailable && styles.disabledSelectButton]} 
            disabled={!isAvailable} // Disable the button when not available
          >
            <Text style={[styles.selectButtonText, !isAvailable && styles.disabledButtonText]}>
              Select
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Choose your car</Text>
          <Text style={styles.headerSubtitle}>Kindly select the car you would prefer to utilize</Text>
        </View>
      </View>

      <FlatList 
        ref={flatListRef} 
        data={cars}
        horizontal 
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onScroll={(event) => {
          const slide = Math.round(
            event.nativeEvent.contentOffset.x / Dimensions.get('window').width
          );
          setSelectedCar(slide);
        }}
      />

      <View style={styles.navigation}>
        <TouchableOpacity 
          style={[styles.navButton, selectedCar === 0 && styles.navButtonDisabled]}
          disabled={selectedCar === 0}
          onPress={handlePrev} // Handle left button press
        >
          <Feather name="arrow-left" size={24} color={selectedCar === 0 ? '#ccc' : '#fff'} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.navButton, selectedCar === cars.length - 1 && styles.navButtonDisabled]}
          disabled={selectedCar === cars.length - 1}
          onPress={handleNext} // Handle right button press
        >
          <Feather name="arrow-right" size={24} color={selectedCar === cars.length - 1 ? '#ccc' : '#fff'} />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.warning}>
          <Feather name="info" size={20} color="#DC2626" />
          <Text style={styles.warningText}>
            The selection of cars is based solely on the model, and the license plate number is determined by the system. The car selection can be changed at any time by the pool admin.
          </Text>
        </View>
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
    marginBottom: 10,
  },
  headerTextContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
    textAlign: 'center',
    marginTop: -47
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: -20
  },
  carSlide: {
    width: Dimensions.get('window').width,
    padding: 20,
    alignItems: 'center',
  },
  disabledCar: {
    opacity: 1,
  },
  carCard: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  disabledCard: {
    backgroundColor: '#f5f5f5', // Make the card look disabled
  },
  decorativeCircle1: {
    position: 'absolute',
    top: -50,
    left: -50,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#FFF1F2',
  },
  decorativeCircle2: {
    position: 'absolute',
    top: -30,
    right: -30,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFF1F2',
  },
  carInfo: {
    alignItems: 'center',
    marginBottom: 20,
    zIndex: 1,
  },
  carName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  carStatus: {
    fontSize: 14,
    color: '#DC2626',
  },
  carImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  selectButton: {
    width: '100%',
    backgroundColor: '#8B0000',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  disabledSelectButton: {
    backgroundColor: '#ccc', 
  },
  selectButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButtonText: {
    color: '#888', 
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  navButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#8B0000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35
  },
  navButtonDisabled: {
    backgroundColor: '#f5f5f5',
  },
  footer: {
    padding: 20,
    marginBottom: 30
  },
  warning: {
    flexDirection: 'row',
    backgroundColor: '#FFF1F2',
    padding: 15,
    borderRadius: 8,
  },
  warningText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 12,
    color: '#DC2626',
    lineHeight: 16.37,
  },
});
