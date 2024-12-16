import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";

const { width } = Dimensions.get('window');

export default function Home() {
  const navigation = useNavigation();

  React.useEffect(() => {
    StatusBar.setBarStyle("light-content");
    StatusBar.setBackgroundColor("#820300");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>WELCOME</Text>
            <Text style={styles.userName}>Adrian - 0370</Text>
          </View>
          <TouchableOpacity style={styles.notificationBadge}>
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <TouchableOpacity style={styles.statsCard}>
            <MaterialCommunityIcons
              name="car-side"
              size={26}
              color="#820300"
            />
            <Text style={styles.carHistoryText}>Car History</Text>
            <Text style={styles.statsNumber}>12 Reservations</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statsCard}>
            <MaterialCommunityIcons
              name="ticket-percent"
              size={24}
              color="#820300"
            />
            <Text style={styles.historyVouchers}>History Vouchers</Text>
            <Text style={styles.statsNumber}>03 Vouchers</Text>
          </TouchableOpacity>
        </View>

        {/* Service Grid */}
        <View style={styles.servicesGrid}>
          <TouchableOpacity style={styles.serviceItem}>
            <View style={styles.serviceIconContainer}>
              <Image
                source={require("../../assets/image/pollCarReservee.png")}
                style={{ width: 61, height: '100%' }}
              />
            </View>
            <Text style={styles.serviceText}>Pool Car{"\n"}Reserve</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.serviceItem}>
            <View style={styles.serviceIconContainer}>
              <Image source={require("../../assets/image/commuternn.png")}
              style={{ width: '100%', height: 53 }} />

            </View>
            <Text style={styles.serviceText}>Commuter</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.serviceItem}
            onPress={() => navigation.navigate("RentalOptions")}
          >
            <View style={styles.serviceIconContainer}>
              <Image
                source={require("../../assets/image/carRental&Drivingg.png")}
                style={{ width: 67, height: '100%' }}
              />
            </View>
            <Text style={styles.serviceText}>Car Rental{"\n"}& Driver</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.serviceItem}>
            <View style={styles.serviceIconContainer}>
              <Image source={require("../../assets/image/approvall.png")}
              style={{ width: 28, height: '100%' }}
               />
            </View>
            <Text style={styles.serviceText}>Approval</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.serviceItem}>
            <View style={styles.serviceIconContainer}>
              <Image source={require("../../assets/image/passApprovall.png")}
              style={{ width: 48, height: '100%' }}
               />
            </View>
            <Text style={styles.serviceText}>Pass Approval</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.serviceItem}>
            <View style={styles.serviceIconContainer}>
              <Image source={require("../../assets/image/checkUnitt.png")}
              style={{ width: 64, height: '100%' }} />
            </View>
            <Text style={styles.serviceText}>Check Units</Text>
          </TouchableOpacity>
        </View>

        {/* Promo Banner */}
        <Image
          source={require("../../assets/yarisCross.png")}
          style={styles.promoBanner}
          resizeMode="cover"
        />

        {/* Reservation Steps */}
        <View style={styles.stepsContainer}>
          <Text style={styles.stepsTitle}>Reservation Information</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.stepCard}>
              <View style={styles.stepIconContainer}>
                <Image 
                  source={require("../../assets/image/calender.png")}
                  style={styles.stepIcon}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.stepTextContainer}>
                <Text style={styles.stepTitle}>Set your schedule</Text>
                <Text style={styles.stepDescription}>
                  Select and set the date of your trip
                </Text>
              </View>
            </View>

            <View style={styles.stepCard}>
              <View style={styles.stepIconContainer}>
                <Image 
                  source={require("../../assets/image/chooseYourCar.png")}
                  style={styles.stepIcon}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.stepTextContainer}>
                <Text style={styles.stepTitle}>Choose your Car</Text>
                <Text style={styles.stepDescription}>Ease of choosing a car</Text>
              </View>
            </View>

            <View style={styles.stepCard}>
              <View style={styles.stepIconContainer}>
                <Image 
                  source={require("../../assets/image/setYourRoute.png")}
                  style={styles.stepIcon}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.stepTextContainer}>
                <Text style={styles.stepTitle}>Set Your Route</Text>
                <Text style={styles.stepDescription}>
                  Choose the travel route and your destination
                </Text>
              </View>
            </View>
          </ScrollView>

          <TouchableOpacity style={styles.helpCenter}>
            <View style={styles.helpCenterContent}>
              <MaterialCommunityIcons
                name="help-circle"
                size={24}
                color="#820300"
              />
              <View style={styles.helpCenterText}>
                <Text style={styles.helpCenterTitle}>Help Center</Text>
                <Text style={styles.helpCenterDescription}>
                  24 Support hours and solutions
                </Text>
              </View>
            </View>
            <Feather name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>
        </View>
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
    backgroundColor: "#820300",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 120,
  },
  welcomeText: {
    color: "#fff",
    opacity: 0.8,
    fontSize: 12,
  },
  userName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 45,
  },
  notificationBadge: {
    padding: 8,
    marginBottom: 40,
  },
  statsContainer: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 15,
    marginTop: -40,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    height: 75
  },
  statsCard: {
    flexDirection: "row", 
    alignItems: "center", 
    flex: 1,
    justifyContent: "center", 
    paddingVertical: 10,
    position: "relative",
  },
  carHistoryText: {
    fontSize: 11,
    color: "#999",
    position: "absolute",
    top: 0,
    left: -12,
    right: 0,
    textAlign: "center",
  },
  historyVouchers: {
    fontSize: 11,
    color: "#999",
    position: "absolute",
    top: 0,
    left: 30,
    right: 0,
    textAlign: "center",
  },
  statsNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#820300",
    marginLeft: 8,
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 15,
  },
  serviceItem: {
    width: "33.33%",
    alignItems: "center",
    marginBottom: 20,
  },
  serviceIconContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  serviceText: {
    fontSize: 13,
    color: "#333",
    textAlign: "center",
  },
  promoBanner: {
    width: "95%",
    height: 177,
    marginBottom: 20,
    marginLeft: 10,
  },
  stepsContainer: {
    padding: 15,
    backgroundColor: '#fff'
  },
  stepsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  stepCard: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 15,
    width: width * 0.4,
    height: 170,
    justifyContent: 'center',
  },
  stepIconContainer: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  stepIcon: {
    width: '100%',
    height: '100%',
  },
  stepTextContainer: {
    alignItems: 'center',
    textAlign: 'center',
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  stepDescription: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  helpCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 10
  },
  helpCenterContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  helpCenterText: {
    marginLeft: 15,
  },
  helpCenterTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  helpCenterDescription: {
    fontSize: 12,
    color: "#666",
  },
});

