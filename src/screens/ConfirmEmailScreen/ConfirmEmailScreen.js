import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons'
const ConfirmEmailScreen = () => {
    const [confirmCode, setConfirmCode] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");


    const onConfirmPress = () => {
        console.warn("onConfirmPress");
    }

    const onResendCodePress = () => {
        console.warn("onResendCodePress");
    }

    const onSignInPress = () => {
        console.warn("onSignInPress");
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm your email</Text>
                <CustomInput placeholder="Enter you confirmation code" value={confirmCode} setValue={setConfirmCode} />
                <CustomButton text="Confirm" onPress={onConfirmPress} />
                <CustomButton text="Resend Code" onPress={onResendCodePress} type="SECONDARY" />
                <CustomButton text="Back to Sign In" onPress={onSignInPress} type="TERTIARY" />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
        marginBottom: 20,
    },
    title: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 24,
        margin: 10,
        color: '#051C60',
    },
    text: {
        color: "gray",
        marginVertical: 10,
    },
    link: {
        color: "#FDB075",
    }
})

export default ConfirmEmailScreen


