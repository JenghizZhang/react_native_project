/**
 * @date 7/14/22 7:05 PM
 * @author Yunsong Zhang
 * */
import {View, Text, StyleSheet, ScrollView, Dimensions, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {globalColor} from '../../../utils/globalStyle';
import {data} from '../../../utils/FeatureData.json';

const {width} = Dimensions.get("window");

export default class FoodMenu extends React.Component {
    renderData = ({item}) => {
        return (
            <TouchableOpacity style={styles.slideContainer} activeOpacity={0.5}>
                {/*<Image source={{uri: "hcpjpcopy"}} style={styles.swiperImage}></Image>*/}
                <Image source={{uri: item.image}} style={styles.swiperImage}></Image>
                <Text>{item.title}</Text>
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <View {...this.props}>
                {/*<ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.box}>
                        <Text>1</Text>
                    </View>
                    <View style={[styles.box, {backgroundColor: "#fcf"}]}>
                        <Text>2</Text>
                    </View>
                </ScrollView>*/}
                <View style={styles.wrapper}>
                    <Swiper
                        autoplay
                        showsPagination
                        activeDot={(<View style={{
                            backgroundColor: globalColor,
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                        }}/>)}
                        dot={(<View style={{
                            backgroundColor: 'rgba(0,0,0,.15)',
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                        }}/>)}
                        paginationStyle={{position: 'absolute', bottom: 5,}}
                    >
                        {/*<Swiper autoplay>*/}
                        <View style={styles.slide}>
                            <FlatList
                                numColumns={5}
                                data={data[0]}
                                renderItem={this.renderData}
                            ></FlatList>
                            <FlatList
                                numColumns={5}
                                data={data[1]}
                                renderItem={this.renderData}
                            ></FlatList>
                        </View>
                        <View style={styles.slide}>
                            <FlatList
                                numColumns={5}
                                data={data[2]}
                                renderItem={this.renderData}
                            ></FlatList>
                            <FlatList
                                numColumns={5}
                                data={data[3]}
                                renderItem={this.renderData}
                            ></FlatList>
                        </View>
                    </Swiper>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        // marginTop: 5,
        paddingTop: 5,
        width,
        height: 155,
        backgroundColor: "white"
    },
    slide: {
        // flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    slideContainer: {
        width: width / 5,
        alignItems: "center",
        // borderWidth: 1
    },
    swiperImage: {
        height: 45,
        width: 45,
    },
});