import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import ListItem from '../../components/ListItem';

const locations = [
  { id: '1', number: 'AMB-001', location: 'City Hospital', status: 'Stationary' },
  { id: '2', number: 'AMB-002', location: 'Downtown', status: 'Moving' },
  { id: '3', number: 'AMB-003', location: 'North District', status: 'Moving' },
];

export default function AmbulanceLocationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={locations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.number}
            details={[
              { label: 'Location', value: item.location },
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