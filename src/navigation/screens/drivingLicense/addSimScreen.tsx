import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

const simTypes = ["Sim A", "Sim B1", "Sim C"];

export default function AddSIMScreen({ navigation }: any) {
  const [selectedType, setSelectedType] = useState("");
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [simNumber, setSimNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = () => {
    // Handle form submission
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.required}>* Wajib diisi</Text>

        {/* SIM Type Dropdown */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>
            Jenis SIM <Text style={styles.required}>*</Text>
          </Text>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setShowTypeDropdown(!showTypeDropdown)}
          >
            <Text>{selectedType || "Pilih jenis SIM anda"}</Text>
            <Ionicons
              name={showTypeDropdown ? "chevron-up" : "chevron-down"}
              size={20}
              color="#666"
            />
          </TouchableOpacity>
          {showTypeDropdown && (
            <View style={styles.dropdownContent}>
              {simTypes.map((type, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedType(type);
                    setShowTypeDropdown(false);
                  }}
                >
                  <Text>{type}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* SIM Number */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>
            Nomor SIM <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan nomor SIM"
            value={simNumber}
            onChangeText={setSimNumber}
          />
        </View>

        {/* Expiry Date */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>
            Masa Berlaku SIM <Text style={styles.required}>*</Text>
          </Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowDatePicker(true)}
          >
            <Text>{expiryDate.toLocaleDateString()}</Text>
          </TouchableOpacity>
        </View>

        {showDatePicker && (
          <DateTimePicker
            value={expiryDate}
            mode="date"
            onChange={(event, date) => {
              setShowDatePicker(false);
              if (date) setExpiryDate(date);
            }}
          />
        )}

        {/* Attachment Section */}
        <Text style={styles.label}>
          Lampiran SIM <Text style={styles.required}>*</Text>
        </Text>
        <View style={styles.attachmentContainer}>
          <TouchableOpacity style={styles.attachmentButton}>
            <Ionicons name="camera" size={24} color="#DC2626" />
            <Text style={styles.attachmentText}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.attachmentButton}>
            <Ionicons name="document" size={24} color="#DC2626" />
            <Text style={styles.attachmentText}>File / Gambar</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.fileInfo}>
          File type: png/jpeg/jpg/pdf. Max Size: 2 MB
        </Text>

        {/* Agreement Checkbox */}
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setAgreed(!agreed)}
        >
          <View style={[styles.checkbox, agreed && styles.checked]}>
            {agreed && <Ionicons name="checkmark" size={16} color="white" />}
          </View>
          <Text style={styles.checkboxLabel}>
            Pengajuan yang saya isi adalah benar dan dapat dipertanggung
            jawabkan serta menyetujui syarat & ketentuan yang berlaku.
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
    backgroundColor: "#fff",
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 8,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  required: {
    color: "#DC2626",
    marginBottom: 16,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 8,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownContent: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 8,
    zIndex: 1000,
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  input: {
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  attachmentContainer: {
    flexDirection: "row",
    gap: 16,
    marginTop: 8,
    marginBottom: 16,
  },
  attachmentButton: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#DC2626",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    flex: 1,
  },
  attachmentText: {
    color: "#DC2626",
    marginTop: 8,
  },
  fileInfo: {
    fontSize: 12,
    color: "#666",
    marginBottom: 24,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 24,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 4,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    backgroundColor: "#DC2626",
    borderColor: "#DC2626",
  },
  checkboxLabel: {
    flex: 1,
    fontSize: 14,
    color: "#666",
  },
  submitButton: {
    backgroundColor: "#DC2626",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonDisabled: {
    opacity: 0.5,
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});