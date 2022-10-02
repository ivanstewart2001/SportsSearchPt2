export function prettifyErrorMessage(errorMessage:string) {
    if (errorMessage === 'auth/invalid-email') {
        return 'Incorrect Email'
    } else if (errorMessage === 'auth/wrong-password') {
        return 'Incorrect Pasword'
    } else if (errorMessage === 'auth/user-not-found') {
        return 'User Not Found'
    } else if (errorMessage === 'auth/email-already-in-use') {
        return 'Email already in use'
    } else {
        return 'Unknown Error'
    }
}