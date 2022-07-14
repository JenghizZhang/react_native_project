// 3、TextInput组件

import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

export default class App3 extends Component {
    render() {
        return (
            <View>
                <TextInput style={styles.txtInput} 
                    placeholder="请输入..."
                    placeholderTextColor="#ccc"
                    maxLength={8}
                    underlineColorAndroid="transparent"
                    // secureTextEntry={true}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    txtInput:{
        borderWidth:1,
        borderColor:"#000",
        marginTop:50,
        // padding:0,
        height:40
    }
})