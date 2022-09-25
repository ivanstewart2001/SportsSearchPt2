import { Button, Text, View } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { MainScreenProp } from "../../types/screens/types"

function LoginScreen() {
    const navigation = useNavigation<MainScreenProp>()

    return (
        <View>
            <Text>LoginScreen</Text>
            <Button title="Login" onPress={() => navigation.navigate('Main')}/>
        </View>
    )
}

export default LoginScreen