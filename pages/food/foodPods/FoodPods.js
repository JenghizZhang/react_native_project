/**
 * @date 7/15/22 12:08 AM
 * @author Yunsong Zhang
 * */
import {View, Text, StyleSheet, Image, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import {globalColor} from "../../../utils/globalStyle";
import Bar from "../bar/Bar";

const {scale} = Dimensions.get("window");

export default function FoodPods(props) {
    let arr = new Array(9).fill('');
    return (
        <View {...props}>
            <Bar title="Restaurant"></Bar>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    arr.map((_, index) => (
                        <View key={index}>

                            <View style={styles.item}>
                                <Image style={styles.itemImage}
                                       source={{uri: 'https://www.washingtonpost.com/resizer/Y8B2f3IF5ZZSZqdR-EI8wyvGDmc=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/KXWS4XFKMQ5QBN7KGRHVEYJBD4.jpg'}}></Image>
                                <View style={styles.itemRight}>
                                    <Text style={styles.itemTitle}>店名</Text>
                                    <View>
                                        <View style={styles.scoreAndPrice}>
                                            <Text>评分</Text>
                                            <Text style={styles.itemPrice}>$ 12.00</Text>
                                        </View>
                                        <Text style={styles.itemType}>服务有哪些</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>


        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        paddingTop: 5,
        paddingBottom: 5,
        borderTopWidth: 1 / scale,
        borderTopColor: "rgba(0,0,0,0.1)"
    },
    itemImage: {
        height: 80,
        width: 80,
    },
    itemRight: {
        marginLeft: 10,
        flex: 1
    },
    itemTitle: {
        fontWeight: "bold",
    },
    scoreAndPrice: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",

    },
    itemPrice: {
        color: globalColor,
        fontSize: 16,
    },
    itemType: {
        fontSize: 12,
        color: "rgba(0,0,0,0.25)"
    }
});