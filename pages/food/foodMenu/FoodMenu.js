/**
 * @date 7/14/22 7:05 PM
 * @author Yunsong Zhang
 * */
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import React from 'react';

const {width} = Dimensions.get("window");

export default function FoodMenu(props) {
    return (
        <View {...props}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.box}>
                    <Text>1</Text>
                    <Text style={styles.boxBottom}>qwe</Text>
                </View>
                <View style={[styles.box, {backgroundColor: "#fcf"}]}>
                    <Text>2</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        width,
        height: 200,
        backgroundColor: "red"
    },
    boxBottom: {
        position: "absolute",
        bottom: 0,
        backgroundColor:""
    },
});