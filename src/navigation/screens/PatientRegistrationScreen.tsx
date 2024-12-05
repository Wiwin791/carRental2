import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, TextInput, TouchableOpacity, Text } from 'react-native';

export default function PatientRegistrationScreen() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contact: '',
    address: '',
    medicalHistory: '',
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Patient Name"
            value={formData.name}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Age"
            keyboardType="numeric"
            value={formData.age}
            onChangeText={(text) => setFormData({ ...formData, age: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Contact Number"
            keyboardType="phone-pad"
            value={formData.contact}
            onChangeText={(text) => setFormData({ ...formData, contact: text })}
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Address"
            multiline
            value={formData.address}
            onChangeText={(text) => setFormData({ ...formData, address: text })}
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Medical History"
            multiline
            value={formData.medicalHistory}
            onChangeText={(text) => setFormData({ ...formData, medicalHistory: text })}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Register Patient</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  form: {
    padding: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});