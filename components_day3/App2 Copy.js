import React, { Component } from 'react'
import { View , StyleSheet ,Image, FlatList, Text} from 'react-native'

const img_data=[
    {
        name:"p01",
        des:"Puma Defy 赛琳娜限定"
    },
    {
        name:"p02",
        des:"圣罗兰 口红礼盒"
    },
    {
        name:"p03",
        des:"大豆家  方头奶奶鞋"
    },
    {
        name:"p04",
        des:"小狗图案不锈钢皂"
    },
    {
        name:"p05",
        des:"YSL限量眼影银盘"
    },
    {
        name:"p06",
        des:"可折叠加厚双面使用榻榻米床垫"
    }

]

export default class App2 extends Component {

    constructor(props){
        super(props)

        this.state = {
            img_data
        }
    }

    renderData({item}){
        return (
            <View>
                <Image source={{uri:item.name}} style={styles.imgContent}/>
                <Text style={styles.txtContent}>{item.des}</Text>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require("../res/youhaohuo.png")}  style={styles.imgTitle}/>

                <FlatList
                    numColumns={3}
                    data={ this.state.img_data }
                    renderItem = { this.renderData }
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ccc",
        paddingLeft:10,
        paddingRight:10,
    },
    imgTitle:{
        width:50,
        height:16,
        marginTop:10,
        marginBottom:10

    },
    imgContent:{
        width:100,
        height:100,
        marginRight:20
    },
    txtContent:{
        width:100,
        height:18,
        marginBottom:10
    }
})
