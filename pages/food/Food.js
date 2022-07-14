/**
 * @date 7/14/22 6:36 AM
 * @author Yunsong Zhang
 * */
import {View, Text, Button} from 'react-native';
import React from 'react';

Food.navigationOptions = {
    tabBarLabel: 'Food',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    // tabBarIcon: ({tintColor}) => (
    //     <Image
    //         source={require('./chats-icon.png')}
    //         style={[styles.icon, {tintColor: tintColor}]}
    //     />
    // ),
};

export default function Food() {
    return (
        <View><Text>food</Text></View>
        // <Button
        //     onPress={() => this.props.navigation.navigate('Notifications')}
        //     title="Go to notifications"
        // />
    );
}