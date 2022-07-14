/**
 * @date 7/14/22 5:33 AM
 * @author Yunsong Zhang
 * */
import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Food from '../../pages/food/Food';
import Movie from '../../pages/movie/Movie';
import Hotel from '../../pages/hotel/Hotel';
import Bank from '../../pages/bank/Bank';
import {globalColor} from '../../utils/globalStyle'

const Tab = createBottomTabNavigator();

export default function Nav() {
    return (
        <View style={{flex: 1}}>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: globalColor,
                    tabBarStyle: {
                        backgroundColor: "#eee",
                        height: 60,
                    },
                    tabBarItemStyle: {
                        paddingBottom: 8,
                    },
                    swipeEnabled: true
                }}
                initialRouteName="food"

            >
                <Tab.Screen
                    name="food" component={Food}
                    options={{
                        tabBarLabel: 'Food',
                        tabBarIcon: ({focused, color, size}) => (
                            <Image
                                source={require('../../res/icon_food.png')}
                                style={{height: size, width: size, tintColor: color}}
                            ></Image>
                        )
                    }}
                />
                <Tab.Screen
                    name="movie" component={Movie}
                    options={{
                        tabBarLabel: 'Movie',
                        tabBarIcon: ({focused, color, size}) => (
                            <Image
                                source={require('../../res/icon_movie.png')}
                                style={{height: size, width: size, tintColor: color}}
                            ></Image>
                        )
                    }}
                />
                <Tab.Screen
                    name="hotel" component={Hotel}
                    options={{
                        tabBarLabel: 'Hotel',
                        tabBarIcon: ({focused, color, size}) => (
                            <Image
                                source={require('../../res/icon_hotel.png')}
                                style={{height: size, width: size, tintColor: color}}
                            ></Image>
                        )
                    }}
                />
                <Tab.Screen
                    name="bank" component={Bank}
                    options={{
                        tabBarLabel: 'Wallet',
                        tabBarIcon: ({focused, color, size}) => (
                            <Image
                                source={require('../../res/icon_bank.png')}
                                style={{height: size, width: size, tintColor: color}}
                            ></Image>
                        )
                    }}
                />
            </Tab.Navigator>
        </View>
    );
}
