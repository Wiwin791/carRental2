import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButton, Text } from '@react-navigation/elements';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import bell from '../assets/bell.png';
import Icon from 'react-native-vector-icons/Feather'
import { Home } from './screens/Home';
import { Profile } from './screens/Profile';
import { Settings } from './screens/Settings';
import { Updates } from './screens/Updates';
import { NotFound } from './screens/NotFound';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import { AccountScreen } from './screens/AccountScreen';
import AmbulanceScreen from './screens/AmbulanceScreen';
import DriverScreen from './screens/DriverScreen';
import StaffScreen from './screens/StaffScreen';
import InventoryScreen from './screens/InventoryScreen';
import AmbulanceLocationScreen from './screens/AmbulanceLocation';
import PatientRegistrationScreen from './screens/PatientRegistrationScreen';

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        title: 'Home',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Icon
              name="home"  // Use a Feather icon
              size={size}   // Adjust size according to the tab size
              color={color} // Apply the tint color
            />
        ),
      },
    },
    Updates: {
      screen: Updates,
      options: {
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Image
            source={bell}
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    },

    Account: {
      screen: AccountScreen,
      options: {
        title: 'Account',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Icon
              name="user"  // Use a Feather icon
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
        headerRight: () => (
          <HeaderButton onPress={navigation.goBack}>
            <Text></Text>
          </HeaderButton>
        ),
      }),
    },

    Login: {
      screen: LoginScreen,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerRight: () => (
          <HeaderButton onPress={navigation.goBack}>
            <Text></Text>
          </HeaderButton>
        ),
      }),
    },

    Ambulance: {
      screen: AmbulanceScreen,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerRight: () => (
          <HeaderButton onPress={navigation.goBack}>
            <Text></Text>
          </HeaderButton>
        ),
      }),
    },

    Driver: {
      screen: DriverScreen,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerRight: () => (
          <HeaderButton onPress={navigation.goBack}>
            <Text></Text>
          </HeaderButton>
        ),
      }),
    },

    Staff: {
      screen: StaffScreen,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerRight: () => (
          <HeaderButton onPress={navigation.goBack}>
            <Text></Text>
          </HeaderButton>
        ),
      }),
    },

    PatientRegistration: {
      screen: PatientRegistrationScreen,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerRight: () => (
          <HeaderButton onPress={navigation.goBack}>
            <Text></Text>
          </HeaderButton>
        ),
      }),
    },

    Inventory: {
      screen: InventoryScreen,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerRight: () => (
          <HeaderButton onPress={navigation.goBack}>
            <Text></Text>
          </HeaderButton>
        ),
      }),
    },

    AmbulanceLocation: {
      screen: AmbulanceLocationScreen,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerRight: () => (
          <HeaderButton onPress={navigation.goBack}>
            <Text></Text>
          </HeaderButton>
        ),
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
