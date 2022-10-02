import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { MainScreenProp } from "../../types/screens/types"
import { useState } from "react"
import LoadingOverlay from "../../components/UI/LoadingOverlay"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store/store"

function ForgotPasswordScreen() {
    const [email, setEmail] = useState('')

    const dispatch = useDispatch<AppDispatch>()
    const navigation = useNavigation<MainScreenProp>()

    function navigateToLanding() {

    }

    function submit() {
        dispatch()
        // navigate back to landing
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Sports Search</Text>
                <Text style={styles.subTitle}>News | Stats | Reports | Schedules | Comparisons</Text>
            </View>

            <View style={styles.textInputContainer}>
                <TextInput 

                />
            </View>

            <Button />
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

export default ForgotPasswordScreen