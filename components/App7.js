/**
 * @date 7/13/22 1:16 AM
 * @author Yunsong Zhang
 * */
import {View, Button, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

export default function App7() {
    let [num, setNum] = React.useState(0);
    let click = () => {
        // alert('123');
        setNum(++num);
    };
    return (
        <View>
            <Text>{num}</Text>
            <Button title="按钮中的文本" color="skyblue" style={{margin: 10, borderWidth: 10, borderColor: "green"}}
                    onPress={click}></Button>
            <TouchableOpacity style={styles.btn} onPress={click}><Text>点击自增</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        width: 100,
        height: 100,
        backgroundColor: "pink",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    }
});