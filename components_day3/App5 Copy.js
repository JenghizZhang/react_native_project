// 5、ScrollView组件的使用

import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';

export default class App5 extends Component {
    render() {
        return (
            <View>
                <ScrollView
                    horizontal = {true}
                    pagingEnabled = {true}
                    showsHorizontalScrollIndicator = {false}
                >
                    <View style={styles.box}><Text>1</Text></View>
                    <View style={[styles.box,styles.box2]}><Text>2</Text></View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    box:{
        width:360,
        height:200,
        backgroundColor:'#ccc',
    },
    box2:{
        backgroundColor:'#fcf',
    },
});
