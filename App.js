/**
 * @date 7/14/22 5:17 AM
 * @author Yunsong Zhang
 * */
import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Launcher from './components/launcher';
import Nav from './components/nav';

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
            {showLaunch ? <Launcher></Launcher> : <NavigationContainer><Nav></Nav></NavigationContainer>}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});