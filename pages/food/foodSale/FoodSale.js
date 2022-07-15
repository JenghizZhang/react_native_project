/**
 * @date 7/14/22 11:00 PM
 * @author Yunsong Zhang
 * */
import {View, Text, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import {globalColor} from "../../../utils/globalStyle";
import discounts from "../../../utils/Discounts.json";
import Bar from "../bar/Bar";
const {width} = Dimensions.get("window");
export default function FoodSale(props) {
    let renderItem = ({item}) => {
        let pic = item.pic;
        return (
            <View style={styles.saleIndividual}>
                {
                    pic == "lemon" ?
                        <View style={{marginLeft: 5, marginRight: 5}}>
                            <Image source={require('../../../res/lemon.png')} style={[styles.saleImg]}></Image>
                            <Text style={styles.saleTitle}>{item.title}</Text>
                            <View style={styles.salePriceWrapper}>
                                <Text style={styles.vipPrice}>$ {item.vipPrice}</Text>
                                <Text style={styles.salePrice}>$ {item.salePrice}</Text>
                            </View>
                        </View>
                        :
                        <View>
                            <Image source={{uri: pic}} style={styles.saleImg}></Image>
                            <Text style={styles.saleTitle}>{item.title}</Text>
                            <View style={styles.salePriceWrapper}>
                                <Text style={styles.vipPrice}>$ {item.vipPrice}</Text>
                                <Text style={styles.salePrice}>$ {item.salePrice}</Text>
                            </View>
                        </View>

                }
                {/*<Image source={require('../../../res/mrfish.jpg')} style={{width: 20, height: 20}}></Image>*/}
            </View>
        );
    };

    return (
        <View {...props}>
            <Bar title="On Sale!"></Bar>

            <FlatList
                numColumns={3}
                data={discounts}
                renderItem={renderItem}
                columnWrapperStyle={styles.saleWrapper}
            ></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({

    saleWrapper: {
        // borderWidth: 1
    },
    saleIndividual: {
        // borderWidth: 2
        justifyContent: "space-between"
    },
    saleImg: {
        // width: 10,
        height: 80,
        width: (width - 10 - 10) / 3,
    },
    saleTitle: {
        fontSize: 12,
        fontWeight: "bold",
    },
    vipPrice: {
        color: globalColor,
        marginRight:4
    },
    salePrice: {
        fontSize: 11,
        textDecorationLine: "line-through",
    },
    salePriceWrapper: {
        flexDirection: "row",
        alignItems: "baseline",
    }
});