import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class App5 extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <View style={styles.box1}><Text style={{fontSize: 20}}>1</Text></View>
                <View style={styles.box2}><Text style={{fontSize: 40}}>2</Text></View>
                <View style={styles.box3}><Text style={{fontSize: 30}}>3</Text></View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        display:"flex",
        flex:1,
        // flexDirection的4个值：'row'，'row-reverse'，'column'，'column-reverse'
        flexDirection: "row",

        //justifyContent的5个值：'flex-start'，'flex-end'，'center'，'space-between'，'space-around'
        // justifyContent控制主轴方向的对齐方式
        // 'center'  整体居中(仅有两边留白)
        // 'space-between'   仅中间留白
        // 'space-around'  中间和两边都留白
        // justifyContent:'space-around'
        justifyContent:'center',

        //alignItems 控制侧轴方向的对齐方式
        //alignItems属性的5个值：  'flex-start'，'flex-end'，'center'，'stretch'，'baseline'

        // 'stretch'  设置侧轴方向上的拉伸, 高度没有设置值，才能看到效果
        // 'baseline'  设置基线对齐，设置以文字底部来对齐
        // alignItems:'baseline'
        alignItems:'center'
    },
    box1:{
        width:100,
        height:100,
        backgroundColor:"#ccc"
    },
    box2:{
        width:100,
        height:100,
        backgroundColor:"#fcf"
    },
    box3:{
        width:100,
        height:100,
        backgroundColor:"#ffc"
    }
})