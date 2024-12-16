import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function AccountScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Profile Info */}
        <View style={styles.profileSection}>
          <Image
            source={require("../../assets/image/chooseYourCar.png")}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Adnan Mahfuzhon</Text>
          <Text style={styles.id}>02335050</Text>
        </View>

        {/* Profile Details */}
        <View style={styles.detailsContainer}>
          {/* Driving License Button */}
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('DrivingLicense')}>
            <View style={styles.menuItemLeft}>
              <Ionicons name="card-outline" size={20} color="#666" />
              <Text style={styles.menuItemText}>Driving License</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </TouchableOpacity>

          {/* Form Fields */}
          <View style={styles.formSection}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>Adnanmahfuzhon@gmail.com</Text>

            <Text style={styles.label}>Role</Text>
            <Text style={styles.value}>Driver</Text>

            <Text style={styles.label}>Perusahaan</Text>
            <View style={styles.editableField}>
              <Text style={styles.value}>PSM</Text>
              <TouchableOpacity>
                <Ionicons name="create-outline" size={20} color="#666" />
              </TouchableOpacity>
            </View>

            <Text style={styles.label}>Divisi</Text>
            <View style={styles.editableField}>
              <Text style={styles.value}>ISTD</Text>
              <TouchableOpacity>
                <Ionicons name="create-outline" size={20} color="#666" />
              </TouchableOpacity>
            </View>

            <Text style={styles.label}>No telepon</Text>
            <Text style={styles.value}>088291110522</Text>

            <Text style={styles.label}>Section</Text>
            <Text style={styles.value}>-</Text>

            <Text style={styles.label}>Line</Text>
            <Text style={styles.value}>-</Text>

            <Text style={styles.label}>Group</Text>
            <Text style={styles.value}>-</Text>

            <Text style={styles.label}>Location</Text>
            <Text style={styles.value}>Karawang 1</Text>
          </View>

          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutButton}>
            <Ionicons name="log-out-outline" size={20} color="#DC2626" />
            <Text style={styles.logoutText}>Keluar</Text>
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
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    backgroundColor: '#820300'
    ,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  id: {
    fontSize: 14,
    color: '#666',
  },
  detailsContainer: {
    padding: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f4f4f5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 24,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    marginLeft: 12,
    color: '#666',
  },
  formSection: {
    gap: 12,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  editableField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEE2E2',
    padding: 12,
    borderRadius: 8,
    marginTop: 32,
  },
  logoutText: {
    color: '#DC2626',
    marginLeft: 8,
    fontWeight: '500',
  },
});

