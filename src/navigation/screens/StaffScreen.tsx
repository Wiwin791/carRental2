import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import ListItem from '../../components/ListItem';

const staff = [
  { id: '1', name: 'Sarah Wilson', role: 'Paramedic', shift: 'Morning' },
  { id: '2', name: 'Tom Brown', role: 'EMT', shift: 'Evening' },
  { id: '3', name: 'Lisa Davis', role: 'Nurse', shift: 'Night' },
];

export default function StaffScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={staff}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            details={[
              { label: 'Role', value: item.role },
              { label: 'Shift', value: item.shift },
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