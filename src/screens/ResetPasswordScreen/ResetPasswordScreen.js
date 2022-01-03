import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
const ResetPasswordScreen = () => {
    const [confirmCode, setConfirmCode] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    const onSendPress = () => {
        // validate
        navigation.navigate("HomeScreen");
    }


    const onSignInPress = () => {
        navigation.navigate("SignInScreen");
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Reset Password</Text>
                <CustomInput placeholder="Code" value={confirmCode} setValue={setConfirmCode} />
                <CustomInput placeholder="Enter your new password" value={password} setValue={setPassword} />
                <CustomButton text="Submit" onPress={onSendPress} />
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

export default ResetPasswordScreen


