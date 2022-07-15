/**
 * @date 7/14/22 6:36 AM
 * @author Yunsong Zhang
 * */
import {View, StyleSheet, ScrollView, SectionList} from 'react-native';
import React from 'react';
import FoodTop from "./foodTop/FoodTop";
import {globalColor} from "../../utils/globalStyle";
import FoodMenu from "./foodMenu/FoodMenu";
import FoodSale from "./foodSale/FoodSale";
import FoodPods from "./foodPods/FoodPods";

export default function Food() {
    return (
        <View style={{flex: 1, backgroundColor: "#eee"}}>
            {/*FoodTop*/}
            <FoodTop style={styles.topContainer}></FoodTop>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/*FoodMenu*/}
                <FoodMenu style={styles.menuContainer}></FoodMenu>
                {/*Sale*/}
                <FoodSale style={styles.saleContainer}></FoodSale>
                {/*FoodPods*/}
                <FoodPods style={styles.podContainer}></FoodPods>
            </ScrollView>
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
        backgroundColor: "white",
        marginBottom: 10,
        height: 155,
    },
    saleContainer: {
        backgroundColor: "white",
        height: 160,
        marginBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 10,
    },
    podContainer: {
        backgroundColor: "white",
        marginBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 10,
    }
});