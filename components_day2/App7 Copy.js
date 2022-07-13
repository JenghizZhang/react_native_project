// 7、Button按钮组件  TouchableOpacity组件

import React, { Component } from 'react'
import {View, Button, Text, StyleSheet, TouchableOpacity} from 'react-native'
 
export default class App7 extends Component {

    constructor(props){
        super(props)

        this.state = {
            num:20
        }

        this.handlePress = this.handlePress.bind(this)
    }

    handlePress(){
        
        this.setState({
            num:this.state.num+1
        })
    }
    render() {
        return (
            <View>
                <Text>{this.state.num}</Text>
                <Button title="按钮中的文本" color="skyblue" onPress={this.handlePress} style={styles.btn}></Button>
                <TouchableOpacity onPress={this.handlePress} style={styles.btn}><Text>点击自增</Text></TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    btn:{
        width:100,
        height:100,
        backgroundColor:"pink",
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center"
    }
})