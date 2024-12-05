import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import ListItem from '../../components/ListItem';

const drivers = [
  { id: '1', name: 'John Doe', status: 'On Duty', license: 'DL-123456' },
  { id: '2', name: 'Jane Smith', status: 'Off Duty', license: 'DL-789012' },
  { id: '3', name: 'Mike Johnson', status: 'On Leave', license: 'DL-345678' },
];

export default function DriverScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={drivers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            details={[
              { label: 'Status', value: item.status },
              { label: 'License', value: item.license },
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