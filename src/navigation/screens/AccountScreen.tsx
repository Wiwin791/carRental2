import React from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, StatusBar, ScrollView, Image } from 'react-native';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export function AccountScreen() {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#e74c3c" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Account</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: '/placeholder.svg?height=100&width=100' }}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.name}>Sarah Johnson</Text>
          <Text style={styles.userType}>Registered User</Text>
        </View>

        <View style={styles.infoSection}>
          <InfoItem icon="mail" label="Email" value="sarah.johnson@example.com" />
          <InfoItem icon="phone" label="Phone" value="+1 (555) 987-6543" />
          <InfoItem icon="map-pin" label="Address" value="123 Main St, Anytown, USA" />
          <InfoItem icon="calendar" label="Date of Birth" value="15 May 1985" />
        </View>

        <View style={styles.menuSection}>
          <MenuItem icon="file-text" label="Medical History" onPress={() => navigation.navigate('MedicalHistory')} />
          <MenuItem icon="clock" label="Emergency Contacts" onPress={() => navigation.navigate('EmergencyContacts')} />
          <MenuItem icon="credit-card" label="Payment Methods" onPress={() => navigation.navigate('PaymentMethods')} />
          <MenuItem icon="bell" label="Notifications" onPress={() => navigation.navigate('Notifications')} />
          <MenuItem icon="settings" label="Account Settings" onPress={() => navigation.navigate('AccountSettings')} />
          <MenuItem icon="help-circle" label="Help & Support" onPress={() => navigation.navigate('HelpSupport')} />
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
          <Feather name="log-out" size={20} color="white" />
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <View style={styles.infoItem}>
      <Feather name={icon} size={20} color="#e74c3c" />
      <View style={styles.infoTextContainer}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );
}

function MenuItem({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Feather name={icon} size={20} color="#e74c3c" />
      <Text style={styles.menuItemText}>{label}</Text>
      <Feather name="chevron-right" size={20} color="#999" />
    </TouchableOpacity>
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
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f8d7da',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  userType: {
    fontSize: 16,
    color: '#666',
  },
  infoSection: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  menuSection: {
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

