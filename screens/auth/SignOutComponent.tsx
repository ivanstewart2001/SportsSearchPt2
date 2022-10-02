import IconButton from "../../components/UI/IconButton"
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from "react-redux";
import { AppDispatch } from '../../store/store'
import { logoutHandler } from '../../store/auth'
import { AuthScreenProp } from "../../types/screens/types";

function SignOutComponent() {
    const navigation = useNavigation<AuthScreenProp>()
    const dispatch = useDispatch<AppDispatch>()

    return (
        <IconButton 
            icon='log-out-outline'
            size={24}
            onPressProp={() => {
                dispatch(logoutHandler())
                navigation.navigate('Landing')
            }}
            title=' '
            componentStyles={{}}
            titleStyles={{}}
            containerStyles={{}}
      />
    )
}

export default SignOutComponent