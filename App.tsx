import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

// Navigators
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerParamList, RootStackParamList } from './types/screens/types';
import LandingScreen from './screens/auth/LandingScreen';
import LoginScreen from './screens/auth/LoginScreen';
import SignUpScreen from './screens/auth/SignUpScreen';
import CompareFootballScreen from './screens/main/football/compare/CompareFootballScreen';
import FavoritesFootballScreen from './screens/main/football/favorites/FavoritesFootballScreen';
import SchedulesFootballScreen from './screens/main/football/schedules/SchedulesFootballScreen';
import SearchFootballScreen from './screens/main/football/search/SearchFootballScreen';
import CompareBasketballScreen from './screens/main/basketball/compare/CompareBaksetball';
import FavoritesBasketballScreen from './screens/main/basketball/favorites/FavoritesBasketball';
import NewsBasketballScreen from './screens/main/basketball/news/NewsBasketball';
import SearchBasketballScreen from './screens/main/basketball/search/SearchBaskteball';
import ForgotPasswordScreen from './screens/auth/ForgotPasswordScreen';

// Interfaces / Types
import { TabBarIconProps } from './types/root/App';

const Stack = createNativeStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator<DrawerParamList>()
const BottomTab = createBottomTabNavigator()

function SearchTabBarIcon({ color, size }:TabBarIconProps) {
  return (
    <Ionicons name='search-outline' size={size} color={color} />
  )
}

function CompareTabBarIcon({ color, size }:TabBarIconProps) {
  return (
    <Ionicons name='analytics-outline' size={size} color={color} />
  )
}

function FavoriteTabBarIcon({ color, size }:TabBarIconProps) {
  return (
    <Ionicons name='star-outline' size={size} color={color} />
  )
}


function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name='basketballBottomTabs'
        component={basketballBottomTabs}
        options={{
          title: 'NBA',
          drawerIcon: ({color, size}) => (
            <Ionicons name="basketball-outline" color={color} size={size} />
          )
        }}
      />

      <Drawer.Screen 
        name='footballBottomTabs'
        component={footballBottomTabs}
        options={{
          title: 'NFL',
          drawerIcon: ({color, size}) => (
            <Ionicons name="american-football-outline" color={color} size={size} />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

function footballBottomTabs() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <BottomTab.Screen 
        name='footballSearchScreen'
        component={SearchFootballScreen}
        options={{
          title: 'Search',
          tabBarIcon: SearchTabBarIcon
        }}
      />
      <BottomTab.Screen 
        name='footballCompareScreen'
        component={CompareFootballScreen}
        options={{
          title: 'Compare',
          tabBarIcon: CompareTabBarIcon
        }}
      />
      <BottomTab.Screen 
        name='footballFavoritesScreen'
        component={FavoritesFootballScreen}
        options={{
          title: 'Favorites',
          tabBarIcon: FavoriteTabBarIcon
        }} 
      />
      <BottomTab.Screen 
        name='footballSchedulesScreen'
        component={SchedulesFootballScreen}
        options={{
          title: 'Schedules',
          tabBarIcon: ({color, size}) => <Ionicons name='calendar-outline' size={size} color={color} />
        }}
      />
    </BottomTab.Navigator>
  )
}

function basketballBottomTabs() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <BottomTab.Screen 
        name='basketballNewsScreen'
        component={NewsBasketballScreen}
        options={{
          title: 'News',
          tabBarIcon: ({color, size}) => <Ionicons name='newspaper-outline' size={size} color={color} />
        }}
      />
      <BottomTab.Screen 
        name='basketballSearchScreen'
        component={SearchBasketballScreen}
        options={{
          title: 'Search',
          tabBarIcon: SearchTabBarIcon
        }}
      />
      <BottomTab.Screen 
        name='basketballCompareScreen'
        component={CompareBasketballScreen}
        options={{
          title: 'Compare',
          tabBarIcon: CompareTabBarIcon
        }}
      />
      <BottomTab.Screen 
        name='basketballFavoritesScreen'
        component={FavoritesBasketballScreen}
        options={{
          title: 'Favorites',
          tabBarIcon: FavoriteTabBarIcon
        }} 
      />
    </BottomTab.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator>
            <Stack.Screen 
              name='Landing'
              component={LandingScreen}
              options={{
                headerShown: false
              }}
            />

            <Stack.Screen 
              name='Login'
              component={LoginScreen}
              options={{
                headerShown: true,
                headerBackTitle: 'Back',
                headerTitle: ''
              }} 
            />

            <Stack.Screen 
              name='SignUp'
              component={SignUpScreen}
              options={{
                headerShown: true,
                headerBackTitle: 'Back',
                headerTitle: ''
              }} 
            />

            <Stack.Screen 
              name='ForgotPassword'
              component={ForgotPasswordScreen}
              options={{
                headerShown: true,
                headerBackTitle: 'Back',
                headerTitle: ''
              }} 
            />

            <Stack.Screen 
              name='Main'
              component={DrawerNavigator}
              options={{
                headerShown: false
              }} 
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  }
})