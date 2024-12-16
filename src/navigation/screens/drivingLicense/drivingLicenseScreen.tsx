import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function DrivingLicenseScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>

        {/* Add Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => navigation.navigate('AddSIM')}
        >
          <Ionicons name="card-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Add Driving License</Text>
        </TouchableOpacity>
      </View>

      {/* Empty State */}
      <View style={styles.emptyState}>
        <View style={styles.iconContainer}>
          <Ionicons name="file-tray-outline" size={120} color="#ccc" />
        </View>
        <Text style={styles.emptyText}>No data</Text>
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 16,
    color: '#ccc',
  },
  buttonContainer: {
    padding: 16,
  },
  addButton: {
    backgroundColor: '#A6122A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
});

