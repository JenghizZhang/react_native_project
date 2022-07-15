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
// import from "uuid"

export default function Food() {
    let data = [
        {
            title: "",
            data: [0, 1, 2]
        }
    ];
    return (
        <View style={{flex: 1, backgroundColor: "#eee"}}>
            {/*FoodTop*/}
            <FoodTop style={styles.topContainer}></FoodTop>
            {/*<SectionList*/}
            {/*    sections={data}*/}
            {/*    keyExtractor={(item, index) => item + index}*/}
            {/*    renderItem={({item, index}) => {*/}
            {/*        if (index === 0) {*/}
            {/*            return <FoodMenu key={index} style={styles.menuContainer}></FoodMenu>;*/}
            {/*        } else if (index === 1) {*/}
            {/*            return <FoodSale key={index} style={styles.saleContainer}></FoodSale>*/}
            {/*        }else{*/}
            {/*            return <FoodPods key={index} style={styles.podContainer}></FoodPods>*/}
            {/*        }*/}
            {/*    }}*/}
            {/*></SectionList>*/}


            {/*FoodMenu*/}
            <FoodMenu style={styles.menuContainer}></FoodMenu>
            {/*Sale*/}
            <FoodSale style={styles.saleContainer}></FoodSale>

            {/*FoodPods*/}
            <FoodPods style={styles.podContainer}></FoodPods>
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