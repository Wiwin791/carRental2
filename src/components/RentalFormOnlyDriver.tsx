import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

interface RentalFormProps {
  onSearch: () => void;
}

export default function RentalFormOnlyDriver({ onSearch }: RentalFormProps) {
  const [days, setDays] = useState(1);
  const [persons, setPersons] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const showDatePickerHandler = () => {
    DateTimePickerAndroid.open({
      value: selectedDate,
      onChange: (event, selectedDate) => {
        if (selectedDate) {
          setSelectedDate(selectedDate);
        }
        setShowDatePicker(false);
      },
      mode: "date",
      is24Hour: true,
    });
  };

  const adjustCount = (type: "days" | "persons", increment: boolean) => {
    if (type === "days") {
      setDays((prev) => (increment ? prev + 1 : Math.max(1, prev - 1)));
    } else {
      setPersons((prev) => (increment ? prev + 1 : Math.max(1, prev - 1)));
    }
  };

  const formattedDate = selectedDate.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <View style={styles.formCard}>
      <Text style={styles.formTitle}>Only Driver</Text>

      <TouchableOpacity style={styles.inputGroup}>
        <MaterialIcons name="location-on" size={24} color="#666" />
        <Text style={styles.inputText}>location Pickup</Text>
      </TouchableOpacity>

      {/* Pickup Date */}
      <TouchableOpacity
        style={styles.inputGroup}
        onPress={showDatePickerHandler}
      >
        <MaterialIcons name="event" size={24} color="#666" />
        <View>
          <Text style={styles.inputText}>Pickup Date</Text>
          <Text style={styles.dateText}>{formattedDate}</Text>
        </View>
      </TouchableOpacity>

      {/* Day Counter */}
      <View style={styles.inputGroup}>
        <MaterialIcons name="access-time" size={24} color="#666" />
        <Text style={styles.inputText}>
          {days} day{days > 1 ? "s" : ""}
        </Text>
        <View style={styles.counterButtons}>
          <TouchableOpacity
            style={styles.counterBtn}
            onPress={() => adjustCount("days", false)}
          >
            <Text style={styles.counterBtnText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.counterBtn}
            onPress={() => adjustCount("days", true)}
          >
            <Text style={styles.counterBtnText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputGroup}>
        <MaterialIcons name="person" size={24} color="#666" />
        <Text style={styles.inputText}>
          {persons} {persons > 1 ? "People" : "Person"}
        </Text>
        <View style={styles.counterButtons}>
          <TouchableOpacity
            style={styles.counterBtn}
            onPress={() => adjustCount("persons", false)}
          >
            <Text style={styles.counterBtnText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.counterBtn}
            onPress={() => adjustCount("persons", true)}
          >
            <Text style={styles.counterBtnText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.inputGroup}>
        <MaterialIcons name="directions-car" size={24} color="#666" />
        <Text style={styles.inputText}>Choose vehicle type</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.searchButton} onPress={onSearch}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    margin: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#8B0000",
    marginBottom: 20,
    textAlign: "center",
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
  },
  dateText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 10,
    marginTop: 5,
  },
  counterButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  counterBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  counterBtnText: {
    fontSize: 20,
    color: "#666",
  },
  searchButton: {
    backgroundColor: "#8B0000",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
