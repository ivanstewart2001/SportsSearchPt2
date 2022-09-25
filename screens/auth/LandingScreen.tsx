import { Button, Text, View } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { AuthScreenProp } from "../../types/screens/types"

function LandingScreen() {
    const navigation = useNavigation<AuthScreenProp>()

    return (
        <View>
            <Text>Sports Search Part 2</Text>
            <Button title='Login' onPress={() => navigation.navigate('Login')} />
            <Button title='Sign Up' onPress={() => navigation.navigate('SignUp')} />
            <Button title='Forgot Password' onPress={() => navigation.navigate('ForgotPassword')} />
        </View>
    )
}

export default LandingScreen