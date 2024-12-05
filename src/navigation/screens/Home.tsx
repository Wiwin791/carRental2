import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, SafeAreaView, StatusBar } from 'react-native';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export function Home() {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#e74c3c" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard</Text>
      </View>
      
      <View style={styles.content}>
        <Image
          source={require('../../assets/ambulance.jpg')}
          style={styles.ambulanceImage}
          resizeMode="contain"
        />
        
        <View style={styles.menuGrid}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Ambulance')}
          >
            <View style={styles.iconContainer}>
              <Feather name="bell" size={24} color="#e74c3c" />
            </View>
            <Text style={styles.menuText}>Ambulance</Text>
            <Text style={styles.subText}>5 Ambulances</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Driver')}
          >
            <View style={styles.iconContainer}>
              <Feather name="truck" size={24} color="#e74c3c" />
            </View>
            <Text style={styles.menuText}>Driver</Text>
            <Text style={styles.subText}>7 Drivers</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Staff')}
          >
            <View style={styles.iconContainer}>
              <Feather name="users" size={24} color="#e74c3c" />
            </View>
            <Text style={styles.menuText}>Staff</Text>
            <Text style={styles.subText}>15 employees</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('PatientRegistration')}
          >
            <View style={styles.iconContainer}>
              <Feather name="clipboard" size={24} color="#e74c3c" />
            </View>
            <Text style={styles.menuText}>Patient Registration</Text>
            <Text style={styles.subText}>Register here</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Inventory')}
          >
            <View style={styles.iconContainer}>
              <Feather name="package" size={24} color="#e74c3c" />
            </View>
            <Text style={styles.menuText}>Inventory</Text>
            <Text style={styles.subText}>Item list</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('AmbulanceLocation')}
          >
            <View style={styles.iconContainer}>
              <Feather name="map-pin" size={24} color="#e74c3c" />
            </View>
            <Text style={styles.menuText}>Ambulance Location</Text>
            <Text style={styles.subText}>Track location</Text>
          </TouchableOpacity>
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
    backgroundColor: '#e74c3c',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 15,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  ambulanceImage: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuItem: {
    width: '30%',
    aspectRatio: 1,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
    marginBottom: 4,
  },
  subText: {
    fontSize: 10,
    color: '#666',
    textAlign: 'center',
  },
});