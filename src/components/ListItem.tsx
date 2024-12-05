import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type ListItemProps = {
  title: string;
  details: { label: string; value: string }[];
};

export default function ListItem({ title, details }: ListItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {details.map((detail, index) => (
        <Text key={index} style={styles.detail}>
          {detail.label}: {detail.value}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  detail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
});