import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SIMCard {
  type: string;
  name: string;
  licenseNo: string;
  validDate: string;
  status: 'Active' | 'Inactive';
}

const simCards: SIMCard[] = [
  {
    type: 'SIM A',
    name: 'Adnan Mahfuzhon',
    licenseNo: '123456xxxxxxxxxxxxx',
    validDate: '13 Sep 2024',
    status: 'Active',
  },
  {
    type: 'SIM B1',
    name: 'Adnan Mahfuzhon',
    licenseNo: '123456xxxxxxxxxxxxx',
    validDate: '13 Sep 2024',
    status: 'Active',
  },
];

export default function SIMScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}> 
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={styles.headerTitle}>SIM</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Add Button */}
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => navigation.navigate('AddSIM')}
        >
          <Ionicons name="add" size={24} color="white" />
          <Text style={styles.buttonText}>Tambahkan SIM</Text>
        </TouchableOpacity>

        {/* SIM Cards */}
        {simCards.map((sim, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{sim.type}</Text>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>{sim.status}</Text>
              </View>
            </View>

            <View style={styles.cardContent}>
              <View style={styles.field}>
                <Text style={styles.fieldLabel}>Name</Text>
                <Text style={styles.fieldValue}>{sim.name}</Text>
              </View>
              <View style={styles.field}>
                <Text style={styles.fieldLabel}>Driving License No.</Text>
                <Text style={styles.fieldValue}>{sim.licenseNo}</Text>
              </View>
              <View style={styles.field}>
                <Text style={styles.fieldLabel}>Valid Date</Text>
                <Text style={styles.fieldValue}>{sim.validDate}</Text>
              </View>
            </View>

            <View style={styles.cardActions}>
              <TouchableOpacity style={styles.deleteButton}>
                <Ionicons name="trash-outline" size={16} color="#DC2626" />
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.updateButton}>
                <Ionicons name="pencil-outline" size={16} color="#F97316" />
                <Text style={styles.updateButtonText}>Update</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
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
  content: {
    flex: 1,
    padding: 16,
  },
  addButton: {
    backgroundColor: '#DC2626',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  statusBadge: {
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#059669',
    fontSize: 12,
    fontWeight: '500',
  },
  cardContent: {
    marginBottom: 16,
  },
  field: {
    marginBottom: 12,
  },
  fieldLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  fieldValue: {
    fontSize: 14,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 12,
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
  },
  deleteButtonText: {
    color: '#DC2626',
    marginLeft: 4,
    fontSize: 14,
  },
  updateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFEDD5',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
  },
  updateButtonText: {
    color: '#F97316',
    marginLeft: 4,
    fontSize: 14,
  },
});

