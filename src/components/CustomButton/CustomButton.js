import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const CustomButton = ({ text, onPress, type = "PRIMARY", bgColor, fgColor }) => {
    return (
        <Pressable
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? { backgroundColor: bgColor } : {}
            ]}
            onPress={onPress}>
            <Text
                style={[
                    styles.text,
                    styles[`text_${type}`],
                    fgColor ? { color: fgColor } : {}
                ]}>
                {text}</Text>
        </Pressable >
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    container_PRIMARY: {
        backgroundColor: 'dodgerblue',
    },
    container_TERTIARY: {
    },
    container_SECONDARY: {
        borderColor: 'dodgerblue',
        borderWidth: 2,
    },
    text: {
        fontWeight: "bold",
    },
    text_PRIMARY: {
        color: "white",
    },
    text_SECONDARY: {
        color: "dodgerblue",
    },
    text_TERTIARY: {
    },
})

export default CustomButton
