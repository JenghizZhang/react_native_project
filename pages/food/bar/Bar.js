/**
 * @date 7/15/22 12:23 AM
 * @author Yunsong Zhang
 * */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {globalColor} from "../../../utils/globalStyle";

export default function Bar(props) {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleSale}>{props.title}</Text>
            <TouchableOpacity><Text style={styles.titleMore} activeOpacity={0.5}>More></Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-between"
    },
    titleSale: {
        fontSize: 16,
        color: globalColor,
        paddingLeft: 5,
        fontWeight: "bold"
    },
    titleMore: {
        paddingRight: 5,
    },
});