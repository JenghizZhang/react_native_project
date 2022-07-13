/**
 * @date 7/12/22 10:50 PM
 * @author Yunsong Zhang
 * */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

function Row() {
    return (
        <View style={styles.row}>
            <View style={styles.box1}><Text>123</Text></View>
            <View style={styles.box2}><Text>123</Text></View>
            <View style={styles.box3}><Text>123</Text></View>
        </View>
    );
}

export default function App6() {
    let arr = [1, 1, 1];
    return (
        <View style={styles.container}>
            <Text>Flex 布局练习</Text>
            <View style={styles.box}>
                {arr.map(i=><Row></Row>)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    box: {
        marginTop: 10,
        width: "90%",
        height: 200,
        backgroundColor: "lightpink",

    },
    row: {
        margin: 10,
        flex: 1,
        // backgroundColor: "green",
        borderWidth: 1,
        borderColor: "#000",
        flexDirection: "row",
    },
    box1: {
        flex: 1.5,
        borderWidth: 1,
        borderColor: "green",
    },
    box2: {
        flex: 1,
        borderWidth: 1,
        borderColor: "blue",
    },
    box3: {
        flex: 2,
        borderWidth: 1,
        borderColor: "gray",
    }
});