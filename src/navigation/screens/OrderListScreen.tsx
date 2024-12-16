import React from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

StatusBar.setBarStyle('light-content'); // Untuk status bar dengan teks gelap
StatusBar.setHidden(false);
const orderData = [
  { id: '1', car: 'Innova', date: '2024-09-15', status: 'Completed' },
  { id: '2', car: 'Camry', date: '2024-09-10', status: 'Ongoing' },
  { id: '3', car: 'Corolla', date: '2024-09-05', status: 'Cancelled' },
  { id: '4', car: 'Fortuner', date: '2024-08-28', status: 'Completed' },
  { id: '5', car: 'Yaris', date: '2024-08-20', status: 'Completed' },
];

const OrderItem = ({ item }) => (
  <TouchableOpacity style={styles.orderItem}>
    <View style={styles.orderInfo}>
      <Text style={styles.orderCar}>{item.car}</Text>
      <Text style={styles.orderDate}>{item.date}</Text>
    </View>
    <View style={styles.orderStatus}>
      <Text style={[styles.orderStatusText, 
        item.status === 'Completed' ? styles.statusCompleted :
        item.status === 'Ongoing' ? styles.statusOngoing :
        styles.statusCancelled
      ]}>
        {item.status}
      </Text>
      <Feather name="chevron-right" size={24} color="#666" />
    </View>
  </TouchableOpacity>
);

export default function OrderListScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order History</Text>
      </View>

      <FlatList
        data={orderData}
        renderItem={({ item }) => <OrderItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#820300',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  listContent: {
    padding: 20,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  orderInfo: {
    flex: 1,
  },
  orderCar: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  orderDate: {
    fontSize: 14,
    color: '#666',
  },
  orderStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderStatusText: {
    fontSize: 14,
    fontWeight: '600',
    marginRight: 10,
  },
  statusCompleted: {
    color: '#10B981',
  },
  statusOngoing: {
    color: '#3B82F6',
  },
  statusCancelled: {
    color: '#EF4444',
  },
});

