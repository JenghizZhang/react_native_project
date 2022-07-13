// 1、 自定义组件

// 引入核心模块
import React,{Component} from "react"
import {View, Text, StyleSheet} from "react-native"

// 创建并导出组件
export default class App1 extends Component{
    render(){
        return(
            
            <View style={styles.container}>
                <Text style={styles.txt1}>你好，ReactNative! </Text>   
            </View>
            
        )
    }
}

// 样式代码
const styles = StyleSheet.create({
    txt1:{
        color:"red"
    },
    container:{
        backgroundColor:"#ccc"
    }
})