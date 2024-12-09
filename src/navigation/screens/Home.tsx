import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>WELCOME</Text>
            <Text style={styles.userName}>Adrian - 0370</Text>
          </View>
          <TouchableOpacity style={styles.notificationBadge}>
            <MaterialCommunityIcons name="bell-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <TouchableOpacity style={styles.statsCard}>
            <Text style={styles.statsNumber}>12</Text>
            <Text style={styles.statsLabel}>Reservations</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statsCard}>
            <Text style={styles.statsNumber}>05</Text>
            <Text style={styles.statsLabel}>Vouchers</Text>
          </TouchableOpacity>
        </View>

        {/* Service Grid */}
        <View style={styles.servicesGrid}>
          <TouchableOpacity style={styles.serviceItem}>
            <View style={styles.serviceIconContainer}>
            <Image
          source={require('../../assets/image/pollCarService.png')}
          />
            </View>
            <Text style={styles.serviceText}>Pool Car{'\n'}Reserve</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.serviceItem}>
            <View style={styles.serviceIconContainer}>
            <Image
          source={require('../../assets/image/Commuterz.png')}
          />
            </View>
            <Text style={styles.serviceText}>Commuter</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.serviceItem} onPress={() => navigation.navigate('RentalOptions')}>
            <View style={styles.serviceIconContainer}>
            <Image
          source={require('../../assets/image/carRental&Driving.png')}
          />
            </View>
            <Text style={styles.serviceText}>Car Rental{'\n'}& Driver</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.serviceItem}>
            <View style={styles.serviceIconContainer}>
            <Image
          source={require('../../assets/image/Approval.png')}
          />
            </View>
            <Text style={styles.serviceText}>Approval</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.serviceItem}>
            <View style={styles.serviceIconContainer}>
            <Image
          source={require('../../assets/image/PassApproval.png')}
          />
            </View>
            <Text style={styles.serviceText}>Pass Approval</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.serviceItem}>
            <View style={styles.serviceIconContainer}>
            <Image
          source={require('../../assets/image/checkUnit.png')}
          />
            </View>
            <Text style={styles.serviceText}>Check Units</Text>
          </TouchableOpacity>
        </View>

        {/* Promo Banner */}
        <Image
          source={require('../../assets/yarisCross.png')}
          style={styles.promoBanner}
          resizeMode="cover"
        />

        {/* Reservation Steps */}
        <View style={styles.stepsContainer}>
          <Text style={styles.stepsTitle}>Reservation Information</Text>
          
          <TouchableOpacity style={styles.stepCard}>
            <View style={styles.stepIconContainer}>
            <Image
          source={require('../../assets/image/schedule.png')}
          />
            </View>
            <View style={styles.stepTextContainer}>
              <Text style={styles.stepTitle}>Set your schedule</Text>
              <Text style={styles.stepDescription}>Choose your rental period</Text>
            </View>
            <Feather name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.stepCard}>
            <View style={styles.stepIconContainer}>
            <Image
          source={require('../../assets/image/chooseCar.png')}
          />
            </View>
            <View style={styles.stepTextContainer}>
              <Text style={styles.stepTitle}>Choose your Car</Text>
              <Text style={styles.stepDescription}>Select a car that suits you</Text>
            </View>
            <Feather name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.stepCard}>
            <View style={styles.stepIconContainer}>
              <MaterialCommunityIcons name="car-key" size={24} color="#DC2626" />
            </View>
            <View style={styles.stepTextContainer}>
              <Text style={styles.stepTitle}>Get your car</Text>
              <Text style={styles.stepDescription}>Complete your rental process</Text>
            </View>
            <Feather name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.helpCenter}>
            <View style={styles.helpCenterContent}>
              <MaterialCommunityIcons name="help-circle" size={24} color="#DC2626" />
              <View style={styles.helpCenterText}>
                <Text style={styles.helpCenterTitle}>Help Center</Text>
                <Text style={styles.helpCenterDescription}>24 Support hours and solutions</Text>
              </View>
            </View>
            <Feather name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#DC2626',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    color: '#fff',
    opacity: 0.8,
    fontSize: 12,
  },
  userName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  notificationBadge: {
    padding: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 15,
    marginTop: -20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statsCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  statsNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DC2626',
  },
  statsLabel: {
    fontSize: 14,
    color: '#666',
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 15,
  },
  serviceItem: {
    width: '33.33%',
    alignItems: 'center',
    marginBottom: 20,
  },
  serviceIconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  serviceText: {
    fontSize: 13,
    color: '#333',
    textAlign: 'center',
  },
  promoBanner: {
    width: '95%',
    height: 177,
    marginBottom: 20,
    marginLeft: 10,
  },
  stepsContainer: {
    padding: 15,
  },
  stepsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  stepCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  stepIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#FEE2E2',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  stepTextContainer: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  stepDescription: {
    fontSize: 12,
    color: '#666',
  },
  helpCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  helpCenterContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  helpCenterText: {
    marginLeft: 15,
  },
  helpCenterTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  helpCenterDescription: {
    fontSize: 12,
    color: '#666',
  },
  bottomNav: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  bottomNavItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomNavText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  bottomNavActive: {
    color: '#DC2626',
  },
});

