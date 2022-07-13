/**
 * @date 7/13/22 6:13 PM
 * @author Yunsong Zhang
 * */
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React, {useState} from 'react';

export default function App2() {
    let [img, setImg] = useState([
        {
            name: "p01",
            des: "Puma Defy 赛琳娜限定"
        },
        {
            name: "p02",
            des: "圣罗兰 口红礼盒"
        },
        {
            name: "p03",
            des: "大豆家  方头奶奶鞋"
        },
        {
            name: "p04",
            des: "小狗图案不锈钢皂"
        },
        {
            name: "p05",
            des: "YSL限量眼影银盘"
        },
        {
            name: "p06",
            des: "可折叠加厚双面使用榻榻米床垫"
        }
    ]);

    return (
        <View style={styles.container}>
            <Text>App1</Text>
            <Image source={require("../res/youhaohuo.png")} style={styles.youhaohuo}></Image>

            <FlatList
                numColumns={3}
                data={img}
                renderItem={({item}) => (
                    <View>
                        <Image source={{uri: item.name}} style={styles.img}></Image>
                        <Text style={{width: 100}}>{item.des}</Text>
                    </View>
                )}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightpink",
        padding: "5%",
        // justifyContent: "center",
        // alignItems: "center"
        // marginLeft:10,
    },
    youhaohuo: {
        width: 50,
        height: 16,
        marginTop: 10,
        marginBottom: 10,
    },
    img: {
        // width:"33%",
        // height:"33%"
        margin: 5,
        width: 100,
        height: 100,
    }
});