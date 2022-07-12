// 4、练习题
// 4.1、书写一个满屏的盒子
// 4.2、书写一条最细的线 (高度最小)

import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet} from 'react-native'

const {width, height, scale} = Dimensions.get('window')

export default class App3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>屏幕的宽度是：{width}</Text>
                <Text>屏幕的高度是：{height}</Text>
                <Text>屏幕的像素比是：{scale}</Text>
                <View style={styles.line}></View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        // width:"100%",
        // height:"100%",
        width,
        height,
        backgroundColor:"#ccc"
    },
    line:{
        height:1/scale,
        backgroundColor:"#000"
    }
})