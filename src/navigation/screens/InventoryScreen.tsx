import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import ListItem from '../../components/ListItem';

const inventory = [
  { id: '1', name: 'First Aid Kit', quantity: 50, status: 'In Stock' },
  { id: '2', name: 'Oxygen Cylinders', quantity: 20, status: 'Low Stock' },
  { id: '3', name: 'Stretchers', quantity: 15, status: 'In Stock' },
];

export default function InventoryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={inventory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            details={[
              { label: 'Quantity', value: item.quantity.toString() },
              { label: 'Status', value: item.status },
            ]}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});