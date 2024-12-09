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
import Home from './screens/Home';
import { Profile } from './screens/Profile';
import { Settings } from './screens/Settings';
import { Updates } from './screens/Updates';
import { NotFound } from './screens/NotFound';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import AccountScreen from './screens/AccountScreen';
import RentalOptionsScreen from './screens/RentalOptionScreen';
import OnlyDriverScreen from './screens/RentalOptions/OnlyDriverScreen';
import SelfDriveScreen from './screens/RentalOptions/SelfDriveScreen';
import WithDriverScreen from './screens/RentalOptions/WithDriverScreen';
import ChooseCarScreen from './screens/ChooseCarScreen';
import OrderListScreen from './screens/OrderListScreen';

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
    Order: {
      screen: OrderListScreen,
      options: {
        headerShown: false,
        title: 'Order List',
        tabBarIcon: ({ color, size }) => (
          <Icon
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
        headerShown: false,
      }),
    },

    OnlyDriver: {
      screen: OnlyDriverScreen,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerShown: false,
      }),
    },

    SelfDrive: {
      screen: SelfDriveScreen,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerShown: false,
      }),
    },

    WithDriver: {
      screen: WithDriverScreen,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerShown: false,
      }),
    },

    ChooseCar: {
      screen: ChooseCarScreen,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerShown: false,
      }),
    },

    OrderList: {
      screen: OrderListScreen,
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
