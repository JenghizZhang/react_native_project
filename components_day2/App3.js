import React from 'react'
import { View, Text, Dimensions, StyleSheet} from 'react-native'
const { width, height, scale } = Dimensions.get('window')

export default function App3() {
    return (
        <View>
            <Text>
                <Text>屏幕的宽度是：{width}</Text>
                <Text>屏幕的高度是：{height}</Text>
                <Text>屏幕的像素比是：{scale}</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})
