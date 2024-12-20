import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButton, Text } from '@react-navigation/elements';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import Home from './screens/Home';
import { Profile } from './screens/Profile';
import { Settings } from './screens/Settings';
import { NotFound } from './screens/NotFound';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import AccountScreen from './screens/AccountScreen';
import RentalOptionsScreen from './screens/RentalOptionScreen';
import OrderListScreen from './screens/OrderListScreen';
import DataPelengkapForm from './screens/DataPelengkapScreen';
import ChooseCarScreen from './screens/ChooseCarScreen';
import SummaryReservationScreen from './screens/SummaryReservation';
import DetailHistoryScreen from './screens/DetailHistory';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AddDrivingLicenseScreen from './screens/drivingLicense/AddDrivingLicense';
import DrivingLicenseScreen from './screens/drivingLicense/drivingLicenseScreen';
import AddSIMScreen from './screens/drivingLicense/addSimScreen';
import SIMScreen from './screens/drivingLicense/simSCreen';

StatusBar.setBarStyle('light-content'); // Untuk status bar dengan teks gelap

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        title: 'Home',
        headerShown: true,
        headerStyle: {
          backgroundColor: 'transparent',
          height: 32,
        },
        statusBarStyle: 'light-content',
        tabBarIcon: ({ color, size }) => (
          <Ionicons
              name="home"  // Use a Feather icon
              size={size}   // Adjust size according to the tab size
              color={color} // Apply the tint color
            />
        ),
      },
    },
    
    Order: {
      screen: OrderListScreen,
      options: {
        headerShown: true,
        headerStyle: {
          backgroundColor: 'transparent',
          height: 32,
        },
        title: 'Order List',
        tabBarIcon: ({ color, size }) => (
          <Ionicons
              name="list"  // Use a Feather icon
              size={size}   // Adjust size according to the tab size
              color={color} // Apply the tint color
            />
        ),
      },
    },

    Account: {
      screen: AccountScreen,
      options: {
        title: 'Profile',
        headerShown: false,
        headerStyle: {
          backgroundColor: 'transparent',
          height: 32,
        },
        tabBarIcon: ({ color, size }) => (
          <Ionicons
              name="person-outline"  // Use a Feather icon
              size={size}   // Adjust size according to the tab size
              color={color} // Apply the tint color
            />
        ),
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: HomeTabs,
      options: {
        title: 'Home',
        headerShown: false,
      },
    },
    Profile: {
      screen: Profile,
      linking: {
        path: ':user(@[a-zA-Z0-9-_]+)',
        parse: {
          user: (value) => value.replace(/^@/, ''),
        },
        stringify: {
          user: (value) => `@${value}`,
        },
      },
    },
    Settings: {
      screen: Settings,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerRight: () => (
          <HeaderButton onPress={navigation.goBack}>
            <Text>Close</Text>
          </HeaderButton>
        ),
      }),
    },
    NotFound: {
      screen: NotFound,
      options: {
        title: '404',
      },
      linking: {
        path: '*',
      },
    },

    Register: {
      screen: RegisterScreen,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerShown: false,
      }),
    },

    Login: {
      screen: LoginScreen,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerShown: false,
      }),
    },

    RentalOptions: {
      screen: RentalOptionsScreen,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerShown: true,
        headerStyle: {
          backgroundColor: '#820300',
        },
        headerTitleStyle: {
          color: 'white', // Warna teks judul
          fontWeight: 'bold', // Teks judul menjadi bold
        },
        title: ' Rent',
        // headerLeft: () => (
        //   <TouchableOpacity onPress={() => navigation.goBack()}>
        //     <Ionicons 
        //       name="arrow-back" 
        //       size={24} 
        //       color="white" 
        //     />
        //   </TouchableOpacity>
        // ),
      }),
    },

    DataPelengkap: {
      screen: DataPelengkapForm,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerShown: true,
        headerStyle: {
          backgroundColor: '#820300',
        },
        headerTitleStyle: {
          color: 'white', // Warna teks judul
          fontWeight: 'bold', // Teks judul menjadi bold
        },
        title: ' Data Pelengkap',
        // headerLeft: () => (
        //   <TouchableOpacity onPress={() => navigation.goBack()}>
        //     <Ionicons 
        //       name="arrow-back" 
        //       size={24} 
        //       color="white" 
        //     />
        //   </TouchableOpacity>
        // ),
      }),
    },

    ChooseCar: {
      screen: ChooseCarScreen,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerShown: false,
      }),
    },

    SummaryReservation: {
      screen: SummaryReservationScreen,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerShown: true,
        headerStyle: {
          backgroundColor: '#820300',
        },
        headerTitleStyle: {
          color: 'white', // Warna teks judul
          fontWeight: 'bold', // Teks judul menjadi bold
        },
        title: ' Rental Details',
        // headerLeft: () => (
        //   <TouchableOpacity onPress={() => navigation.goBack()}>
        //     <Ionicons 
        //       name="arrow-back" 
        //       size={24} 
        //       color="white" 
        //     />
        //   </TouchableOpacity>
        // ),
      }),
    },

    DetailHistory: {
      screen: DetailHistoryScreen,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerShown: true,
        headerStyle: {
          backgroundColor: '#820300',
        },
        headerTitleStyle: {
          color: 'white', // Warna teks judul
          fontWeight: 'bold', // Teks judul menjadi bold
        },
        title: ' Reservation Process',
        // headerLeft: () => (
        //   <TouchableOpacity onPress={() => navigation.goBack()}>
        //     <Ionicons 
        //       name="arrow-back" 
        //       size={24} 
        //       color="white" 
        //     />
        //   </TouchableOpacity>
        // ),
      }),
    },

    DrivingLicense: {
      screen: DrivingLicenseScreen,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerShown: true,
        headerStyle: {
          backgroundColor: '#820300',
        },
        headerTitleStyle: {
          color: 'white', // Warna teks judul
          fontWeight: 'bold', // Teks judul menjadi bold
        },
        title: 'Driving License',
        // headerLeft: () => (
        //   <TouchableOpacity onPress={() => navigation.goBack()}>
        //     <Ionicons 
        //       name="arrow-back" 
        //       size={24} 
        //       color="white" 
        //     />
        //   </TouchableOpacity>
        // ),
      }),
    },

    AddDrivingLicense: {
      screen: AddDrivingLicenseScreen,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerShown: true,
        headerStyle: {
          backgroundColor: '#820300',
        },
        headerTitleStyle: {
          color: 'white', // Warna teks judul
          fontWeight: 'bold', // Teks judul menjadi bold
        },
        title: 'Add Driving License',
        // headerLeft: () => (
        //   <TouchableOpacity onPress={() => navigation.goBack()}>
        //     <Ionicons 
        //       name="arrow-back" 
        //       size={24} 
        //       color="white" 
        //     />
        //   </TouchableOpacity>
        // ),
      }),
    },

    AddSIM: {
      screen: AddSIMScreen,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerShown: true,
        headerStyle: {
          backgroundColor: '#820300',
        },
        headerTitleStyle: {
          color: 'white', // Warna teks judul
          fontWeight: 'bold', // Teks judul menjadi bold
        },
        title: 'Tambahkan SIM',
        // headerLeft: () => (
        //   <TouchableOpacity onPress={() => navigation.goBack()}>
        //     <Ionicons 
        //       name="arrow-back" 
        //       size={24} 
        //       color="white" 
        //     />
        //   </TouchableOpacity>
        // ),
      }),
    },
    simList: {
      screen: SIMScreen,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerShown: false,
      }),
    },

  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
