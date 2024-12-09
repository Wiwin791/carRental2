import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

type RentalFormProps = {
  type: 'self-drive' | 'with-driver' | 'only-driver';
  onSubmit: () => void;
};

export default function RentalForm({ type, onSubmit }: RentalFormProps) {
  const [persons, setPersons] = React.useState(1);
  const [days, setDays] = React.useState(1);

  const buttonTitle = type === 'self-drive' ? 'Next' : 'Search';

  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <View style={styles.iconLabel}>
          <Feather name="map-pin" size={20} color="#666" />
          <Text style={styles.label}>location Pickup</Text>
        </View>
        <TouchableOpacity style={styles.input}>
          <Text style={styles.inputText}>Select location</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formGroup}>
        <View style={styles.iconLabel}>
          <Feather name="calendar" size={20} color="#666" />
          <Text style={styles.label}>Pickup Date</Text>
        </View>
        <TouchableOpacity style={styles.input}>
          <Text style={styles.inputText}>Wednesday, 11 September 2024 (08:00)</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formGroup}>
        <View style={styles.iconLabel}>
          <Feather name="clock" size={20} color="#666" />
          <Text style={styles.label}>Duration</Text>
        </View>
        <View style={styles.counterContainer}>
          <TouchableOpacity 
            style={styles.counterButton}
            onPress={() => days > 1 && setDays(days - 1)}
          >
            <Feather name="minus" size={20} color="#666" />
          </TouchableOpacity>
          <Text style={styles.counterText}>{days} day</Text>
          <TouchableOpacity 
            style={styles.counterButton}
            onPress={() => setDays(days + 1)}
          >
            <Feather name="plus" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.formGroup}>
        <View style={styles.iconLabel}>
          <Feather name="user" size={20} color="#666" />
          <Text style={styles.label}>Person</Text>
        </View>
        <View style={styles.counterContainer}>
          <TouchableOpacity 
            style={styles.counterButton}
            onPress={() => persons > 1 && setPersons(persons - 1)}
          >
            <Feather name="minus" size={20} color="#666" />
          </TouchableOpacity>
          <Text style={styles.counterText}>{persons} Person</Text>
          <TouchableOpacity 
            style={styles.counterButton}
            onPress={() => setPersons(persons + 1)}
          >
            <Feather name="plus" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>

      {type === 'only-driver' && (
        <View style={styles.formGroup}>
          <View style={styles.iconLabel}>
            <Feather name="truck" size={20} color="#666" />
            <Text style={styles.label}>Vehicle Type</Text>
          </View>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>Choose vehicle type</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity 
        style={styles.submitButton}
        onPress={onSubmit}
      >
        <Text style={styles.submitButtonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  iconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  inputText: {
    color: '#333',
    fontSize: 14,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  counterButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#8B0000',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

