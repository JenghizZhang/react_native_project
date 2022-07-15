/**
 * @date 7/14/22 7:05 PM
 * @author Yunsong Zhang
 * */
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';

const {width} = Dimensions.get("window");

export default class FoodMenu extends React.Component {
    render() {
        return (
            <View {...this.props}>
                {/*<ScrollView*/}
                {/*    horizontal*/}
                {/*    pagingEnabled*/}
                {/*    showsHorizontalScrollIndicator={false}*/}
                {/*>*/}
                {/*    <View style={styles.box}>*/}
                {/*        <Text>1</Text>*/}
                {/*    </View>*/}
                {/*    <View style={[styles.box, {backgroundColor: "#fcf"}]}>*/}
                {/*        <Text>2</Text>*/}
                {/*    </View>*/}
                {/*</ScrollView>*/}
                <View style={styles.wrapper}>
                    <Swiper autoplay>
                        <View style={styles.slide1}>
                            <Text style={styles.text}>Hello Swiper</Text>
                        </View>
                        <View style={styles.slide2}>
                            <Text style={styles.text}>Beautiful</Text>
                        </View>
                    </Swiper>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        width,
        height: 200,
        backgroundColor: "white"
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold'
    }
});