/**
 * @date 7/14/22 6:36 AM
 * @author Yunsong Zhang
 * */
import {View, Text, Button} from 'react-native';
import React from 'react';

Movie.navigationOptions = {
    tabBarLabel: 'Movie',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    // tabBarIcon: ({tintColor}) => (
    //     <Image
    //         source={require('./chats-icon.png')}
    //         style={[styles.icon, {tintColor: tintColor}]}
    //     />
    // ),
};

export default function Movie() {
    return (
        <View><Text>Movie</Text></View>
        // <Button
        //     onPress={() => this.props.navigation.navigate('Notifications')}
        //     title="Go to notifications"
        // />
    );
}