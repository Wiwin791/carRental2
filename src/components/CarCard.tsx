import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface CarCardProps {
  name: string;
  available: boolean;
  imageUrl: string;
  onSelect: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ name, available, imageUrl, onSelect }) => {
  return (
    <View style={styles.card}>
      <View style={styles.topRightCircle} />
      <Text style={styles.carName}>{name}</Text>
      <Text style={[styles.availability, available ? styles.availableText : styles.unavailableText]}>
        {available ? 'Available' : 'Unavailable'}
      </Text>
      <Image source={{ uri: imageUrl }} style={styles.carImage} />
      <TouchableOpacity style={styles.selectButton} onPress={onSelect}>
        <Text style={styles.selectButtonText}>select</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  topRightCircle: {
    position: 'absolute',
    top: -20,
    right: -20,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
  },
  carName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  availability: {
    fontSize: 16,
    marginBottom: 15,
  },
  availableText: {
    color: 'green',
  },
  unavailableText: {
    color: 'red',
  },
  carImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  selectButton: {
    backgroundColor: '#8B0000',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },
  selectButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CarCard;

