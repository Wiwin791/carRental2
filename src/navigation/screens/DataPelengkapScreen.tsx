import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
  Switch,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function DataPelengkapForm() {
    const navigation = useNavigation();
  const [paymentType, setPaymentType] = useState('');
  const [showPaymentDropdown, setShowPaymentDropdown] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [passengers, setPassengers] = useState([
    { name: '', isEmployee: false },
    { name: '', isEmployee: false },
    { name: '', isEmployee: false },
  ]);

  const paymentTypes = ['Cash', 'Transfer', 'Credit Card'];

  const updatePassenger = (index: number, field: 'name' | 'isEmployee', value: string | boolean) => {
    const newPassengers = [...passengers];
    newPassengers[index] = { ...newPassengers[index], [field]: value };
    setPassengers(newPassengers);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Data pelengkap</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>
          Payment<Text style={styles.required}>*</Text>
        </Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setShowPaymentDropdown(!showPaymentDropdown)}
        >
          <Text style={styles.dropdownText}>
            {paymentType || 'Payment Type'}
          </Text>
          <Ionicons
            name={showPaymentDropdown ? 'chevron-up' : 'chevron-down'}
            size={24}
            color="#666"
          />
        </TouchableOpacity>

        {showPaymentDropdown && (
          <View style={styles.dropdownList}>
            {paymentTypes.map((type) => (
              <TouchableOpacity
                key={type}
                style={styles.dropdownItem}
                onPress={() => {
                  setPaymentType(type);
                  setShowPaymentDropdown(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{type}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <Text style={styles.label}>
          Phone Number<Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="08xx-xxx-xxx"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
        <View style={styles.infoContainer}>
          <Ionicons name="information-circle-outline" size={20} color="#666" />
          <Text style={styles.infoText}>
            Pastikan Nomor yang anda berikan adalah nomor Whatsapp yang aktif
          </Text>
        </View>

        <Text style={styles.label}>
          Passenger <Text style={styles.required}>*</Text>
        </Text>
        {passengers.map((passenger, index) => (
          <View key={index} style={styles.passengerContainer}>
            <TextInput
              style={styles.passengerInput}
              placeholder="Name"
              value={passenger.name}
              onChangeText={(text) => updatePassenger(index, 'name', text)}
            />
            <View style={styles.employeeToggle}>
              <Text style={styles.employeeText}>Employe</Text>
              <Switch
                value={passenger.isEmployee}
                onValueChange={(value) => updatePassenger(index, 'isEmployee', value)}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={passenger.isEmployee ? '#f5dd4b' : '#f4f3f4'}
              />
            </View>
          </View>
        ))}

        <TouchableOpacity
          style={styles.choiseButton}
          onPress={() => navigation.navigate('ChooseCar')}
        >
          <Text style={styles.choiseButtonText}>Choise Car</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#8B0000',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 50 : 16,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    marginLeft: 8,
    fontWeight: '500',
  },
  form: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  required: {
    color: 'red',
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  dropdownList: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginTop: -14,
    marginBottom: 16,
    backgroundColor: 'white',
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  infoText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 8,
    flex: 1,
  },
  passengerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  passengerInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginRight: 12,
  },
  employeeToggle: {
    alignItems: 'center',
  },
  employeeText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  choiseButton: {
    backgroundColor: '#8B0000',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  choiseButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});