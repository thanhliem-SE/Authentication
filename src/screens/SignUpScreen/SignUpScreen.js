import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons'
const SignUpScreen = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");


    const onRegisterPressed = () => {
        console.warn("onRegisterPressed");
    }

    const onPrivacyPolicy = () => {
        console.warn("onPrivacyPolicy");
    }

    const onTermOfUse = () => {
        console.warn("onTermOfUse");
    }

    const onSignInPress = () => {
        console.warn("onSignInPress");
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>
                <CustomInput placeholder="Username" value={username} setValue={setUsername} />
                <CustomInput placeholder="Email" value={email} setValue={setEmail} />
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
                <CustomInput placeholder="Repeat Password" value={repeatPassword} setValue={setRepeatPassword} secureTextEntry />
                <CustomButton text="Register" onPress={onRegisterPressed} />
                <Text style={styles.text}>By registering, you confirm that you accept our
                    <Text style={styles.link} onPress={onTermOfUse}> Term of Use </Text>and
                    <Text style={styles.link} onPress={onPrivacyPolicy}> Privacy Policy </Text>
                </Text>
                <SocialSignInButtons />
                <CustomButton text="Have an account? Sign In" onPress={onSignInPress} type="TERTIARY" />
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

export default SignUpScreen


