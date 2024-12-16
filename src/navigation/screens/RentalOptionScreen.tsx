import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
  Modal,
  FlatList
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function RentalForm() {
  const navigation = useNavigation();
  const [rentalType, setRentalType] = useState("");
  const [showRentalDropdown, setShowRentalDropdown] = useState(false);
  const [agenda, setAgenda] = useState("");
  const [purpose, setPurpose] = useState("");
  const [showPurposeDropdown, setShowPurposeDropdown] = useState(false);
  const [passengers, setPassengers] = useState(1);
  const MAX_PASSENGERS = 8;
  const [departure, setDeparture] = useState("");
  const [showDepartureDropdown, setShowDepartureDropdown] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showReturnDatePicker, setShowReturnDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedReturnDate, setSelectedReturnDate] = useState(new Date());
  const [showDestinationModal, setShowDestinationModal] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState('');
  const [destination, setDestination] = useState("");

  const rentalTypes = ["Driver", "Vehicle", "Driver + Vehicle"];
  const purposes = [
    "Working Day",
    "Non Working Day / More Than One Day",
    "Guest",
    "Personal",
    "Pool",
  ];
  const departures = [
    "Head Office",
    "Sunter 1",
    "Sunter 2",
    "Karawang 3",
    "Karawang 1 & 2",
  ];

  const destinations = [
    { id: '1', name: 'New York' },
    { id: '2', name: 'Los Angeles' },
    { id: '3', name: 'Chicago' },
    { id: '4', name: 'Houston' },
    { id: '5', name: 'Phoenix' },
  ];
  const renderDestinationItem = ({ item }) => (
    <TouchableOpacity
      style={styles.destinationItem}
      onPress={() => {
        setSelectedDestination(item.name);
        setShowDestinationModal(false);
      }}
    >
      <Text style={styles.destinationItemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios" ? true : false); // On iOS, keep the picker visible after selection
    setSelectedDate(currentDate);
  };

  const handleReturnDateChange = (event, selectedReturnDate) => {
    const currentReturnDate = selectedReturnDate || date;
    setShowReturnDatePicker(Platform.OS === "ios" ? true : false); // On iOS, keep the picker visible after selection
    setSelectedReturnDate(currentReturnDate);
  };

  const formattedRentalDate = selectedDate.toLocaleString("en-GB", {
    weekday: "long", 
    day: "2-digit", 
    month: "long", 
    year: "numeric", 
  });

  const formattedReturnDate = selectedReturnDate.toLocaleString("en-GB", {
    weekday: "long", 
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Rent</Text>
      </View> */}
  
      <View style={styles.form}>
        <Text style={styles.label}>
          Rental <Text style={styles.required}>*</Text>
        </Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setShowRentalDropdown(!showRentalDropdown)}
        >
          <Text style={styles.dropdownText}>
            {rentalType || "Rental Type"}
          </Text>
          <Ionicons
            name={showRentalDropdown ? "chevron-up" : "chevron-down"}
            size={24}
            color="#666"
          />
        </TouchableOpacity>
  
        {showRentalDropdown && (
          <View style={styles.dropdownList}>
            {rentalTypes.map((type) => (
              <TouchableOpacity
                key={type}
                style={styles.dropdownItem}
                onPress={() => {
                  setRentalType(type);
                  setShowRentalDropdown(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{type}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
  
        <Text style={styles.label}>
          Agenda <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="enter your agenda"
          value={agenda}
          onChangeText={setAgenda}
        />
  
        {/* purposes */}
        <Text style={styles.label}>
          Purposes <Text style={styles.required}>*</Text>
        </Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setShowPurposeDropdown(!showPurposeDropdown)}
        >
          <Text style={styles.dropdownText}>
            {purpose || "Select Purposes"}
          </Text>
          <Ionicons
            name={showPurposeDropdown ? "chevron-up" : "chevron-down"}
            size={24}
            color="#666"
          />
        </TouchableOpacity>
  
        {showPurposeDropdown && (
          <View style={styles.dropdownList}>
            {purposes.map((type) => (
              <TouchableOpacity
                key={type}
                style={styles.dropdownItem}
                onPress={() => {
                  setPurpose(type);
                  setShowPurposeDropdown(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{type}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
  
        <View style={styles.passengerCounter}>
          <Text style={styles.label}>
            Total Passenger <Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.counter}>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() => setPassengers(Math.max(1, passengers - 1))}
            >
              <Text style={styles.counterButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.counterText}>{passengers}</Text>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() => setPassengers(Math.min(8, passengers + 1))}
            >
              <Text style={styles.counterButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
  
        {/* departure */}
        <Text style={styles.label}>
          Departure <Text style={styles.required}>*</Text>
        </Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setShowDepartureDropdown(!showDepartureDropdown)}
        >
          <Text style={styles.dropdownText}>
            {departure || "Select Departure"}
          </Text>
          <Ionicons
            name={showDepartureDropdown ? "chevron-up" : "chevron-down"}
            size={24}
            color="#666"
          />
        </TouchableOpacity>
  
        {showDepartureDropdown && (
          <View style={styles.dropdownList}>
            {departures.map((type) => (
              <TouchableOpacity
                key={type}
                style={styles.dropdownItem}
                onPress={() => {
                  setDeparture(type);
                  setShowDepartureDropdown(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{type}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
  
        {/* Destination List */}
        <Text style={styles.label}>
          Destination List
        </Text>
        <TouchableOpacity
          style={styles.destinationButton}
          onPress={() => setShowDestinationModal(true)}
        >
          <Ionicons name="location-outline" size={24} color="#FF9800"/>
          <Text style={styles.destinationText}>
            {destination || "Location"}
          </Text>
        </TouchableOpacity>

        <Modal
          visible={showDestinationModal}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setShowDestinationModal(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Destination</Text>
              <FlatList
                data={destinations}
                renderItem={renderDestinationItem}
                keyExtractor={(item) => item.id}
              />
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setShowDestinationModal(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
  
        {/* Date Picker */}
        <Text style={styles.label}>
          Rental Date <Text style={styles.required}>*</Text>
        </Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.dropdownText}>{formattedRentalDate}</Text>
          <Ionicons name="calendar" size={24} color="#666" />
        </TouchableOpacity>
  
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
  
        {/* Return Date Picker */}
        <Text style={styles.label}>
          Return Date <Text style={styles.required}>*</Text>
        </Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setShowReturnDatePicker(true)}
        >
          <Text style={styles.dropdownText}>{formattedReturnDate}</Text>
          <Ionicons name="calendar" size={24} color="#666" />
        </TouchableOpacity>
  
        {showReturnDatePicker && (
          <DateTimePicker
            value={selectedReturnDate}
            mode="date"
            display="default"
            onChange={handleReturnDateChange}
          />
        )}
  
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('DataPelengkap')}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#8B0000",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 50 : 16,
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    marginLeft: 16,
    fontWeight: "500",
  },
  form: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },
  required: {
    color: "red",
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  dropdownText: {
    fontSize: 16,
    color: "#333",
  },
  dropdownList: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginTop: -14,
    marginBottom: 16,
    backgroundColor: "white",
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  dropdownItemText: {
    fontSize: 16,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  passengerCounter: {
    marginBottom: 16,
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 8,
  },
  counterButton: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 18,
  },
  counterButtonText: {
    fontSize: 20,
    color: "#333",
  },
  counterText: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    color: "#333",
  },
  nextButton: {
    backgroundColor: "#8B0000",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginTop: 16,
  },
  nextButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  destinationButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF3E0",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  destinationText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#FF9800",
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    width: '80%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 16,
    textAlign: 'center',
  },
  destinationItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  destinationItemText: {
    fontSize: 16,
    color: '#333',
  },
  closeButton: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#8B0000',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
