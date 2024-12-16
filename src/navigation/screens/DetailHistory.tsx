import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function DetailHistoryScreen() {
    const navigation = useNavigation();
  const processSteps = [
    { icon: 'document-text-outline', label: 'Request submitted', status: 'completed' },
    { icon: 'checkmark-circle-outline', label: 'Approval & Check', status: 'current' },
    { icon: 'car-outline', label: 'Unit Pick & Used', status: 'pending' },
    { icon: 'return-down-back-outline', label: 'Unit Returns', status: 'pending' },
    { icon: 'checkmark-done-outline', label: 'Completed', status: 'pending' },
  ];

  const approvalHistory = [
    {
      status: 'Approved',
      timestamp: 'Di Buat: February 24, 2024, 09:30 am',
      completed: true,
    },
    {
      status: 'Waiting for approval',
      timestamp: 'sedang menunggu persetujuan',
      completed: false,
    },
  ];

  return (
    <ScrollView style={styles.container}>

      <View style={styles.content}>
        <View style={styles.reservationCard}>
          <Text style={styles.reservationNumber}>RY-91288</Text>
          <View style={styles.carDetails}>
            <View style={styles.carImageContainer}>
            <Image source={require("../../assets/yarisDetail.png")}
                style={styles.carImage}
              />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.carModel}>Yaris</Text>
              <Text style={styles.separator}>--</Text>
              <Text style={styles.passengerCount}>4 People</Text>
              <Text style={styles.date}>28 Feb 24 (08:00)</Text>
              <Text style={styles.date}>28 Feb 24 (08:00)</Text>
              <TouchableOpacity>
                <Text style={styles.tapDetail}>Tap for detail</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.processTracker}>
          {processSteps.map((step, index) => (
            <View key={index} style={styles.processStep}>
              <View style={[
                styles.stepIcon,
                step.status === 'completed' && styles.stepCompleted,
                step.status === 'current' && styles.stepCurrent
              ]}>
                <Ionicons 
                  name={step.icon} 
                  size={20} 
                  color={step.status === 'pending' ? '#999' : '#fff'} 
                />
              </View>
              <Text style={[
                styles.stepLabel,
                step.status === 'pending' && styles.stepPending
              ]}>
                {step.label}
              </Text>
            </View>
          ))}
        </View>

        <Text style={styles.statusText}>Being processed</Text>

        <View style={styles.approvalHistory}>
          <Text style={styles.historyTitle}>Approval History</Text>
          {approvalHistory.map((item, index) => (
            <View key={index} style={styles.historyItem}>
              <View style={styles.historyDot} />
              <View style={styles.historyContent}>
                <Text style={[
                  styles.historyStatus,
                  item.completed && styles.historyCompleted
                ]}>
                  {item.status}
                </Text>
                <Text style={styles.historyTimestamp}>{item.timestamp}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
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
    padding: 16,
  },
  reservationCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  reservationNumber: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
  },
  carDetails: {
    flexDirection: 'row',
  },
  carImageContainer: {
    flex: 1,
    backgroundColor: '#FFE4E1',
    borderRadius: 8,
    overflow: 'hidden',
  },
  carImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
  },
  detailsContainer: {
    flex: 1,
    paddingLeft: 16,
  },
  carModel: {
    fontSize: 18,
    fontWeight: '500',
  },
  separator: {
    fontSize: 16,
    color: '#666',
    marginVertical: 4,
  },
  passengerCount: {
    fontSize: 14,
    color: '#666',
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  tapDetail: {
    color: '#8B0000',
    fontSize: 14,
    marginTop: 8,
  },
  processTracker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  processStep: {
    alignItems: 'center',
    flex: 1,
  },
  stepIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  stepCompleted: {
    backgroundColor: '#4CAF50',
  },
  stepCurrent: {
    backgroundColor: '#FFA000',
  },
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
  },
  stepPending: {
    color: '#999',
  },
  statusText: {
    textAlign: 'center',
    color: '#FFA000',
    fontSize: 14,
    marginBottom: 24,
  },
  approvalHistory: {
    paddingTop: 16,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 16,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  historyDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ddd',
    marginTop: 4,
    marginRight: 12,
  },
  historyContent: {
    flex: 1,
  },
  historyStatus: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  historyCompleted: {
    color: '#333',
  },
  historyTimestamp: {
    fontSize: 14,
    color: '#999',
  },
});

