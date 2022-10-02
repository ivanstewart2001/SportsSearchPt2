import { useEffect, useState } from "react"
import { Alert, Button, Dimensions, StyleSheet, Text, TextInput, View } from "react-native"
import { CheckBox } from '@rneui/themed/dist'
import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store"
import { MainScreenProp } from "../../types/screens/types"
import { signUpHandler } from "../../store/auth"
import LoadingOverlay from "../../components/UI/LoadingOverlay"
import { prettifyErrorMessage } from "../../firebase/errorMessages"

function SignUpScreen() {
    const [hidePassword, setHidePassword] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch<AppDispatch>()
    const { authData, loading } = useSelector((state:RootState) => state.auth)

    const navigation = useNavigation<MainScreenProp>()

    function navigateToMain() {
        navigation.navigate('Main')
    }

    useEffect(() => {
        if (!loading && authData.code) {
            Alert.alert(prettifyErrorMessage(authData.code))
            return
        }
        
        if (!loading && authData.email && authData.userId) {
            navigateToMain()
        }

    }, [dispatch, loading])

    function isNumeric(s:any) {
        return !isNaN(s - parseFloat(s));
    }

    function passwordVerification(password:string) {
        const requiredPasswordLength = 8
        const requiredNumberOfNumbers = 1
        const requiredNumberOfSpecialCharacters = 1
        const requiredNumberOfCaptialLetters = 1
        const validSpecialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', ':', ';', '{', '}', '[', ']', '|', '/', '?', '<', '>', ',', '.']
        
        let passWordLengthSatisfied = false
        let numberOfNumbersSatisfied = false
        let specialCharacterNumberSatisfied = false
        let capitalLetterNumberSatisfied = false

        let passwordLength = 0
        let numberOfNumbers = 0
        let numberOfSpecialCharacters = 0
        let numberOfCapitalLetters = 0

        for (var index = 0; index < password.length; index++){
            const currentCharacter = password[index]
            passwordLength += 1
            if (isNumeric(currentCharacter)){
                numberOfNumbers += 1
            } else if (validSpecialCharacters.includes(currentCharacter)){
                numberOfSpecialCharacters += 1
            } else if (currentCharacter.toUpperCase() === currentCharacter){
                numberOfCapitalLetters += 1
            }
        }

        passWordLengthSatisfied = passwordLength >= requiredPasswordLength ? true : false
        numberOfNumbersSatisfied = numberOfNumbers >= requiredNumberOfNumbers ? true : false
        specialCharacterNumberSatisfied = numberOfSpecialCharacters >= requiredNumberOfSpecialCharacters ? true : false
        capitalLetterNumberSatisfied = numberOfCapitalLetters >= requiredNumberOfCaptialLetters ? true : false

        if (passWordLengthSatisfied && numberOfNumbersSatisfied && specialCharacterNumberSatisfied && capitalLetterNumberSatisfied){
            return true
        } else {
            return false
        }
    }

    function submit() {
        if (!passwordVerification(password)) {
            Alert.alert('Invalid password. A valid password must contain at least 8 characters, 1 number, 1 special character, and 1 captial letter.')
            return
        }

        if (!email) {
            Alert.alert('Please enter a valid email')
            return
        }

        dispatch(signUpHandler({email, password}))
    }

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

export default SignUpScreen