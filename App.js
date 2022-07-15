/**
 * @date 7/14/22 5:17 AM
 * @author Yunsong Zhang
 * */
import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Launcher from './components/launcher';
import Nav from './components/nav';
import User from './components/user/User';

const Stack = createNativeStackNavigator();
export default function App() {
    let [showLaunch, setShowLaunch] = useState(true);
    useEffect(() => {
        // 在此可以执行任何带副作用操作
        let timer = setTimeout(() => setShowLaunch(false), 2000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <View style={styles.container}>
            {/*<Text>App</Text>*/}
            {showLaunch ? <Launcher></Launcher> :
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Nav" screenOptions={{headerShown:false}}>
                        <Stack.Screen name="Nav" component={Nav}/>
                        <Stack.Screen name="User" component={User}/>
                    </Stack.Navigator>

                </NavigationContainer>}
            {/*{showLaunch ? <Launcher></Launcher> : <NavigationContainer><Nav></Nav></NavigationContainer>}*/}
            {/*{showLaunch ? <Launcher></Launcher> : <User></User>}*/}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});