// 8、Image组件

import React, { Component } from 'react'
import { View,Text, Image, StyleSheet} from 'react-native'
import Img from "../res/logo.png"

export default class App8 extends Component {
    render() {
        return (
            <View>
                <Text>方式一：</Text>
                <Image source={Img}/>
                <Text>方式二：</Text>
                <Image source={require("../res/logo.png")}/>
                <Text>方式三：</Text>
                <Image source={{uri:"https://www.baidu.com/img/pc_1c6e30772d5e4103103bd460913332f9.png"}} style={styles.img}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    img:{
        width: 300,
        height: 100
    }
})