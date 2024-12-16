import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'react-native';

export default function AddDrivingLicenseScreen({ navigation }: any) {
  const [type, setType] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [validDate, setValidDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [image, setImage] = useState("");


  const requestPermissions = async () => {
    const mediaPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
    if (mediaPermission.status !== 'granted' || cameraPermission.status !== 'granted') {
      alert('Permission is required to pick images');
    }
  };

  const pickImage = async () => {
    try {
      await requestPermissions(); // Request permission before launching image picker
  
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

  
      if (!result.canceled) {
        setImage(result.assets[0].uri);  // Set the picked image URI
      }
    } catch (error) {
      console.error("Error picking image:", error);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });
    
    if (!result.canceled) {
      setImage(result.assets[0].uri);  // Set the photo URI
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    navigation.goBack();
  };

  useEffect(() => {
    console.log(image);
    
  },[])

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView style={styles.content}>
        <Text style={styles.required}>* Required</Text>

        {/* Form Fields */}
        <View style={styles.formGroup}>
        <Text style={styles.label}>
          Type <Text style={styles.required}>*</Text>
        </Text>
          <TextInput
            style={styles.input}
            placeholder="Select type"
            value={type}
            onChangeText={setType}
          />
        </View>

        <View style={styles.formGroup}>
        <Text style={styles.label}>
          License Number <Text style={styles.required}>*</Text>
        </Text>
          <TextInput
            style={styles.input}
            placeholder="Driving License Number"
            value={licenseNumber}
            onChangeText={setLicenseNumber}
          />
        </View>

        <View style={styles.formGroup}>
        <Text style={styles.label}>
          Valid Date <Text style={styles.required}>*</Text>
        </Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowDatePicker(true)}
          >
            <Text>{validDate.toLocaleDateString()}</Text>
          </TouchableOpacity>
        </View>

        {showDatePicker && (
          <DateTimePicker
            value={validDate}
            mode="date"
            onChange={(event, date) => {
              setShowDatePicker(false);
              if (date) setValidDate(date);
            }}
          />
        )}

        {/* Attachment Section */}
        <Text style={styles.label}>
          Attachment <Text style={styles.required}>*</Text>
        </Text>
        <View style={styles.attachmentContainer}>
          <TouchableOpacity style={styles.attachmentButton}
          onPress={takePhoto}>
            <Ionicons name="camera" size={24} color="#DC2626" />
            <Text style={styles.attachmentText}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.attachmentButton}
          onPress={pickImage}>
            <Ionicons name="document" size={24} color="#DC2626" />
            <Text style={styles.attachmentText}>File / Image</Text>
          </TouchableOpacity>
        </View>

        {image && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.selectedImage} />
            <Text style={styles.imageLabel}>Selected Image</Text>
          </View>
        )}
        <Text style={styles.fileInfo}>File type: png/jpeg/jpg/pdf. Max Size: 2 MB</Text>

        {/* Agreement Checkbox */}
        <TouchableOpacity 
          style={styles.checkboxContainer}
          onPress={() => setAgreed(!agreed)}
        >
          <View style={[styles.checkbox, agreed && styles.checked]}>
            {agreed && <Ionicons name="checkmark" size={16} color="white" />}
          </View>
          <Text style={styles.checkboxLabel}>
            The submission I have filled out is accurate, accountable, and complies with the applicable terms and conditions.
          </Text>
        </TouchableOpacity>

        {/* Submit Button */}
        <TouchableOpacity 
          style={[styles.submitButton, !agreed && styles.submitButtonDisabled]}
          onPress={handleSubmit}
          disabled={!agreed}
        >
          <Text style={styles.submitButtonText}>Kirim</Text>
        </TouchableOpacity>
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
  required: {
    color: '#DC2626',
    marginBottom: 16,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  attachmentContainer: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 8,
    marginBottom: 16,
  },
  attachmentButton: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#DC2626',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    flex: 1,
  },
  selectedImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  imageLabel: {
    fontSize: 14,
    color: '#666',
  },
  attachmentText: {
    color: '#DC2626',
    marginTop: 8,
  },
  fileInfo: {
    fontSize: 12,
    color: '#666',
    marginBottom: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 4,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: '#DC2626',
    borderColor: '#DC2626',
  },
  checkboxLabel: {
    flex: 1,
    fontSize: 14,
    color: '#666',
  },
  submitButton: {
    backgroundColor: '#DC2626',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonDisabled: {
    opacity: 0.5,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

