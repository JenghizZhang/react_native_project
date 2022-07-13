/**
 * @date 7/13/22 6:13 PM
 * @author Yunsong Zhang
 * */
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React, {useState} from 'react';

export default function App1() {
    let [img, setImg] = useState();

    return (
        <View style={styles.container}>
            <Text>App1</Text>
            <Image source={{uri: "youhaohuo"}} style={styles.youhaohuo}></Image>

            <FlatList>

            </FlatList>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightpink",
        padding: 10,
        // marginLeft:10,
    },
    youhaohuo: {
        width: 50,
        height: 16,
        marginTop: 10,
        marginBottom: 10,
    }
});