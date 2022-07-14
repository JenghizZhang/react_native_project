/**
 * @date 7/14/22 6:36 AM
 * @author Yunsong Zhang
 * */
import {View, StyleSheet} from 'react-native';
import React from 'react';
import FoodTop from "./foodTop/FoodTop";
import {globalColor} from "../../utils/globalStyle";
import FoodMenu from "./foodMenu/FoodMenu";

export default function Food() {
    return (
        <View style={{flex: 1, backgroundColor: "#eee"}}>
            {/*FoodTop*/}
            <FoodTop style={styles.topContainer}></FoodTop>
            {/*FoodMenu*/}
            <FoodMenu style={styles.menuContainer}></FoodMenu>
        </View>
    );
}
const styles = StyleSheet.create({
    topContainer: {
        height: 40,
        backgroundColor: globalColor,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    menuContainer: {
        backgroundColor: "white"
    }
});