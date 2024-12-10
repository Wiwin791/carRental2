import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  Image,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SummaryReservationScreen() {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const rentalDetails = {
    projectName: "Support Project Cipunagaraa",
    workingDay: "Working Day",
    name: "Hasan",
    regNo: "929838728",
    phone: "088293110522",
    passengers: "4 People",
    departureDate: "28 Feb 24 (08:00)",
    returnDate: "28 Feb 24 (16:00)",
    vehicle: "Yaris",
    passengerList: [
      "2401141930 - Mrs. X",
      "2401141930 - Mrs. X",
      "2401141930 - Mrs. X"
    ],
    attachments: ["1. Keterangan_Perjalanan.pdf"]
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Rental Details</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.projectInfo}>
          <Text style={styles.projectTitle}>"{rentalDetails.projectName}"</Text>
          <Text style={styles.workingDay}>{rentalDetails.workingDay}</Text>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Nama</Text>
            <Text style={styles.value}>{rentalDetails.name}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>No Reg</Text>
            <Text style={styles.value}>{rentalDetails.regNo}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>No Telp</Text>
            <Text style={styles.value}>{rentalDetails.phone}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Passenger</Text>
            <Text style={styles.value}>{rentalDetails.passengers}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Keberangkatan</Text>
            <Text style={styles.value}>{rentalDetails.departureDate}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Kembali</Text>
            <Text style={styles.value}>{rentalDetails.returnDate}</Text>
          </View>
        </View>

        <View style={styles.vehicleSection}>
          <Text style={styles.sectionTitle}>{rentalDetails.vehicle}</Text>
          <View style={styles.driverInfo}>
            <Text style={styles.label}>Nama Driver</Text>
            <Text style={styles.value}>-</Text>
          </View>
          <View style={styles.driverInfo}>
            <Text style={styles.label}>No Telpon</Text>
            <Text style={styles.value}>-</Text>
          </View>
          <View style={styles.driverInfo}>
            <Text style={styles.label}>Penyedia Layanan</Text>
            <Text style={styles.value}>-</Text>
          </View>
          <View style={styles.infoNote}>
            <Ionicons name="information-circle-outline" size={20} color="#666" />
            <Text style={styles.infoText}>
              Nama Driver akan muncul ketika pihak pool telah terkonfirmasi dengan penyedia layanan
            </Text>
          </View>
        </View>

        <View style={styles.locationSection}>
          <View style={styles.locationHeader}>
            <Ionicons name="location-outline" size={24} color="#4CAF50" />
            <Text style={styles.locationText}>Karawang Plant</Text>
          </View>
        </View>

        <View style={styles.passengerSection}>
          <Text style={styles.sectionTitle}>Passenger</Text>
          {rentalDetails.passengerList.map((passenger, index) => (
            <View key={index} style={styles.passengerItem}>
              <Text style={styles.passengerText}>{passenger}</Text>
            </View>
          ))}
        </View>

        <View style={styles.attachmentSection}>
          <Text style={styles.sectionTitle}>Lampiran Perjalanan</Text>
          {rentalDetails.attachments.map((attachment, index) => (
            <View key={index} style={styles.attachmentItem}>
              <Text style={styles.attachmentText}>{attachment}</Text>
            </View>
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.cancelButton]}
            onPress={() => console.log('Cancel pressed')}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, styles.submitButton]}
            onPress={() => setShowConfirmModal(true)}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal
        visible={showConfirmModal}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.warningIcon}>
              <Ionicons name="warning" size={48} color="#FFA000" />
            </View>
            <Text style={styles.modalText}>
              Request anda kami lanjutkan, anda akan dihubungi pihak pool lewat nomor telefon anda adalah nomor Whatsapp
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.noButton]}
                onPress={() => setShowConfirmModal(false)}
              >
                <Text style={styles.noButtonText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.modalButton, styles.yesButton]}
                onPress={() => {
                  setShowConfirmModal(false);
                  // Handle confirmation
                }}
              >
                <Text style={styles.yesButtonText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#8B0000',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 50 : 16,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    marginLeft: 8,
    fontWeight: '500',
  },
  content: {
    flex: 1,
  },
  projectInfo: {
    backgroundColor: '#FFF3E0',
    padding: 16,
    alignItems: 'center',
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  workingDay: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  detailsContainer: {
    padding: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 14,
    color: '#666',
  },
  value: {
    fontSize: 14,
    fontWeight: '500',
  },
  vehicleSection: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 16,
  },
  driverInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  infoNote: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  infoText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 8,
    flex: 1,
  },
  locationSection: {
    padding: 16,
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    padding: 12,
    borderRadius: 8,
  },
  locationText: {
    marginLeft: 8,
    color: '#4CAF50',
    fontSize: 14,
  },
  passengerSection: {
    padding: 16,
  },
  passengerItem: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  passengerText: {
    fontSize: 14,
  },
  attachmentSection: {
    padding: 16,
  },
  attachmentItem: {
    backgroundColor: '#E8F5E9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  attachmentText: {
    fontSize: 14,
    color: '#4CAF50',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  button: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#8B0000',
  },
  submitButton: {
    backgroundColor: '#8B0000',
  },
  cancelButtonText: {
    color: '#8B0000',
    fontSize: 16,
    fontWeight: '500',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    width: '80%',
    alignItems: 'center',
  },
  warningIcon: {
    marginBottom: 16,
  },
  modalText: {
    textAlign: 'center',
    marginBottom: 24,
    fontSize: 14,
    lineHeight: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  modalButton: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 4,
    minWidth: 80,
    alignItems: 'center',
  },
  noButton: {
    backgroundColor: '#f5f5f5',
  },
  yesButton: {
    backgroundColor: '#8B0000',
  },
  noButtonText: {
    color: '#666',
  },
  yesButtonText: {
    color: '#fff',
  },
});