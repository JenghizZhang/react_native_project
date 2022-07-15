/**
 * @date 7/14/22 5:31 PM
 * @author Yunsong Zhang
 * */
import {View, Text, Image, TextInput, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {globalColor} from "../../../utils/globalStyle";

const {width} = Dimensions.get("window");
const place = ["Atlanta", "Athens", "Duluth"];

export default function FoodTop(props) {
    return (
        <View {...props}>
            <SelectDropdown
                data={place}
                onSelect={() => {
                }}
                renderDropdownIcon={isOpened => {
                    return isOpened ? <Text style={{fontSize: 10}}>▲</Text> : <Text style={{fontSize: 10}}>▼</Text>;
                }}
                selectedRowTextStyle={{color: globalColor}}
                rowStyle={{backgroundColor: "#eee"}}
                defaultValueByIndex={0}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                dropdownIconPosition={'right'}
                rowTextStyle={{fontSize: 13,}}
            ></SelectDropdown>
            <View style={styles.searchContainer}>
                <Image source={require("../../../res/icon_search.png")} style={styles.searchIcon}></Image>
                <TextInput placeholder="type in what you like" style={styles.searchInput}></TextInput>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('User')}>
                <Image source={require("../../../res/icon_user.png")} style={styles.user}></Image>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    dropdown1BtnStyle: {
        width: 80,
        height: "100%",
        backgroundColor: 'rgba(0,0,0,0)',
        // backgroundColor: 'green',
        padding: 0,
    },
    dropdown1BtnTxtStyle: {
        color: 'white',
        textAlign: 'left',
        fontSize: 11,
        padding: 0,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        height: 30,
        borderRadius: 15,
        width: width - 80 - 20 - 30,
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginLeft: 5
    },
    searchInput: {
        flex: 1,
        height: 40,
    },
    user: {
        width: 30,
        height: 30,
    }
});