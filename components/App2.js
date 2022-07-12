// 2、 View组件  初步认识ScrollView组件
import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

export default class App2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* View组件默认情况下超出的内容不可见 */}
                {/* 把ScrollView加载需要出现滚动条的盒子内部， 默认出现的是竖向滚动条 */}
                <ScrollView horizontal>
                    <Text>
                    你好！！！你好！！！你好！！！你好！！！你好！！！你好！！！你好！！！你好！！！你好！！！你好！！！你好！！！你好！！！你好！！！你好！！！你好！！！你好！！！你好！！！你好！！！你好！！！你好！！！你好！！！33333
                    </Text>    
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width:100,
        height:100,
        backgroundColor: "pink"
    }
})