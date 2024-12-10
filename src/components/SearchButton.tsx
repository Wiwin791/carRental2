import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface SearchButtonProps {
  onPress: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.searchButton}
      onPress={onPress}
    >
      <Text style={styles.searchButtonText}>Search</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  searchButton: {
    backgroundColor: '#8B0000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SearchButton;
