import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { CheckBox } from '@rneui/themed/dist'
import { MainScreenProp } from "../../types/screens/types"
import { useEffect, useState } from "react"
import LoadingOverlay from "../../components/UI/LoadingOverlay"
import { loginHandler } from "../../store/auth"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store"
import { prettifyErrorMessage } from "../../firebase/errorMessages"

function LoginScreen() {
    const [hidePassword, setHidePassword] = useState(true)
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const dispatch = useDispatch<AppDispatch>()
    const { authData, loading } = useSelector((state:RootState) => state.auth)

    const navigation = useNavigation<MainScreenProp>()

    function navigateToMain() {
        navigation.navigate('Main')
    }

    function submit() {
        dispatch(loginHandler({email, password}))
    }

    useEffect(() => {
        if (!loading && authData.code) {
            Alert.alert(prettifyErrorMessage(authData.code))
        }

        if (!loading && authData.email && authData.userId) {
            navigateToMain()
        }

    }, [dispatch, loading])

    if (loading) {
        return <LoadingOverlay />
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Sports Search</Text>
                <Text style={styles.subTitle}>News | Stats | Reports | Schedules | Comparisons</Text>
            </View>

            <View style={styles.textInputContainer}>
                <TextInput 
                    style={styles.textInput} 
                    autoCapitalize="none" 
                    keyboardType="email-address" 
                    onChangeText={setEmail}
                    placeholder='Email'
                />
                <TextInput 
                    style={styles.textInput}
                    autoCapitalize="none"
                    secureTextEntry={hidePassword}
                    onChangeText={setPassword}
                    placeholder='Password'
                />

                <CheckBox
                    title="Hide Password"
                    checked={hidePassword}
                    onPress={() => setHidePassword(!hidePassword)}
                    containerStyle={{
                        backgroundColor: 'transparent'
                    }}
                />

            </View>
            <Button title="Login" onPress={submit}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 36
    },
    subTitle: {
        fontSize: 16
    },
    titleContainer: {
        marginTop: 200,
        alignItems: 'center'
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 6,
        width: 350,
        margin: 5,
        height: 30,
        padding: 5
    },
    textInputContainer: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorText: {
        color: 'red'
    },
    errorContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
})

export default LoginScreen