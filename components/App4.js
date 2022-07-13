import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'

const { width, height, scale } = Dimensions.get('window')

export default function App4() {
    return (
        <View style={styles.viewContainer}>
            <Text>屏幕的宽度是：{width}</Text>
            <Text>屏幕的高度是：{height}</Text>
            <Text>屏幕的像素比是：{scale}</Text>
            <View style={{ height: 1/scale, backgroundColor: "green" }}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: "pink",
        flex: 1
    }
})