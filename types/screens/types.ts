import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { DrawerNavigationProp }  from '@react-navigation/drawer'
import { NavigationProp, RouteProp } from '@react-navigation/native'

export type RootStackParamList = {
    // Auth Routes
    Landing: undefined,
    Login: undefined,
    SignUp: undefined,
    ForgotPassword: undefined,

    // Main Route
    Main: undefined,
}

// Auth
export type AuthStackParamList = {
    Landing: undefined,
    Login: undefined,
    SignUp: undefined,
    ForgotPassword: undefined,
}
export type AuthScreenProp = NativeStackNavigationProp<AuthStackParamList>

// Main
export type MainStackParamList = {
    Main: undefined
}
export type MainScreenProp = NativeStackNavigationProp<MainStackParamList>

export type DrawerParamList = {
    basketballBottomTabs: undefined,
    footballBottomTabs: undefined,
}

