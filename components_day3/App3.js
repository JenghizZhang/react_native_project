/**
 * @date 7/13/22 7:13 PM
 * @author Yunsong Zhang
 * */
import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

export default function App3() {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="请输入..."
                placeholderTextColor="pink"
                underlineColorAndroid="lightgrey"
                secureTextEntry
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        // backgroundColor: "red",
        borderWidth: 3,
        borderColor: "lightpink",
        marginTop: 20,
        padding:10,
    }
});