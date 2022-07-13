import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
export default function App1() {
    return (
        <View style={styles.viewContainer}>
            <Text style={styles.text}>
                这是一个react native的文本元素
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color1: 'red',
        backgroundColor: "yellow",
        borderColor: 'green',
        borderWidth: 10,
        textAlign: 'center',
    },
    viewContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink",
    }
})
