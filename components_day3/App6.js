// 6、图片文字展示案例

import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

export default class App5 extends Component {
    render() {
        return (
            <View>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.box}>
                        <Image source={require("../res/banner1.png")} style={styles.img}/>
                        <Text style={styles.title}>
                            前端让IT互联有魅力
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <Image source={require("../res/banner2.png")} style={styles.img}/>
                        <Text style={styles.title}>
                            Java薪未来
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <Image source={require("../res/banner3.png")} style={styles.img}/>
                        <Text style={styles.title}>
                            全栈UI设计
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    // box:{
    //     width:360,
    //     height:201,
    // },
    img: {
        width: 360,
        height: 201
    },
    title: {
        width: 360,
        height: 30,
        textAlignVertical: "center",
        // lineHeight:30,
        // padding: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "absolute",
        bottom: 0,
        color: "#fff",
        paddingLeft: 10
    }
});