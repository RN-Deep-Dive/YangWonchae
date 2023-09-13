import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FriendScreen from './src/screens/FriendScreen';
import ChatScreen from './src/screens/ChatScreen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Fontisto, Ionicons } from '@expo/vector-icons';
import BookmarkScreen from './src/screens/BookmarkScreen';
import ETCScreen from './src/screens/ETCScreen';


// console.log(Platform.OS, 'statusBarHeight', statusBarHeight)
// console.log(Platform.OS, 'bottomSpace', bottomSpace)

const Tab = createBottomTabNavigator();

export default function App() {
  const navOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      
      if (route.name === 'Friends') {
        iconName = focused ? 'persons' : 'person'
        return <Fontisto name={iconName} size={size} color={color} />
      } else if (route.name === 'Chat') {
        iconName = focused ? 'chatbubble' : 'chatbubble-outline'
      } else if (route.name === 'Bookmark') {
        iconName = focused ? 'ios-pricetag' : 'ios-pricetag-outline'
      } else if (route.name === 'ETC') {
        iconName = focused ? 'add-circle' : 'add-circle-outline'
      }
      
      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />
    }
  })

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <Tab.Navigator screenOptions={navOptions}>
          <Tab.Screen name="Friends" component={FriendScreen} options={{ headerShown: false }} />
          <Tab.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
          <Tab.Screen name="Bookmark" component={BookmarkScreen} options={{ headerShown: false }} />
          <Tab.Screen name="ETC" component={ETCScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}