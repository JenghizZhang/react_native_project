/**
 * @date 7/13/22 1:47 AM
 * @author Yunsong Zhang
 * */
import {View, Text, Image} from 'react-native';
import React, {Component} from 'react';
import img from '../res/amazon.jpg';

export default class App8 extends Component {
    render() {
        return (
            <View>
                <Text>App8</Text>
                <Image source={img} style={{width: "100%", height: "30%"}} resizeMethod={"scale"}></Image>
                <Image source={require("../res/amazon.jpg")} style={{width: "100%", height: "30%"}}></Image>
                <Image source={{uri:"https://img1.baidu.com/it/u=1966616150,2146512490&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500"}} style={{width: "100%", height: "30%"}}></Image>
            </View>
        );
    }
}