/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Record from './screens/Record';
import WaveScreen from './screens/Wave';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import {MaterialCommunityIcons} from '@expo/vector-icons';
import {StatusBar} from 'react-native';

Ionicons.loadFont();

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: ({color, size}) => (
                <Ionicons name="ios-home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Record"
            component={Record}
            options={{
              headerShown: false,
              tabBarIcon: ({color, size}) => (
                <Ionicons name="mic-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Wave"
            component={WaveScreen}
            options={{
              headerShown: false,
              /* tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="waveform"
                  color={color}
                  size={size}
                />
              ), */
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
