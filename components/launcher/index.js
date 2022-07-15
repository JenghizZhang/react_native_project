/**
 * @date 7/14/22 5:22 AM
 * @author Yunsong Zhang
 * */
import {StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
import {img} from "react-native/Libraries/Animated/AnimatedWeb";

const {width, height} = Dimensions.get("window");
export default function Launcher() {
    return (
        <Image style={styles.img} source={require("../../res/launcher.jpg")}></Image>
    );
}

const styles = StyleSheet.create({
    img: {
        width,
        height,
    }
});