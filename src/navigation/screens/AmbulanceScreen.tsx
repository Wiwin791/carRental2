import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import ListItem from '../../components/ListItem';
import { useNavigation } from '@react-navigation/native';

const ambulances = [
  { id: '1', number: 'AMB-001', status: 'Available', driver: 'John Doe' },
  { id: '2', number: 'AMB-002', status: 'On Call', driver: 'Jane Smith' },
  { id: '3', number: 'AMB-003', status: 'Maintenance', driver: 'Mike Johnson' },
];

export default function AmbulanceScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ambulances}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.number}
            details={[
              { label: 'Status', value: item.status },
              { label: 'Driver', value: item.driver },
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