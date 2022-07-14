/**
 * @date 7/13/22 7:49 PM
 * @author Yunsong Zhang
 * */
import {View, Text, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

const {height, width, scale} = Dimensions.get('window');

export default class App_login extends Component {
    press = (e) => {
        // console.log(e.target)
        alert('服务器未启动，无法完成该操作');
    };

    render() {
        return (
            <View style={styles.container}>
                {/*版心盒子*/}
                <View style={styles.wrapper}>
                    {/*头像*/}
                    <Image source={require('./res/avatar.jpg')} style={styles.avatar} />
                    {/*用户名密码*/}
                    <TextInput
                        style={[styles.txtInput, styles.username]}
                        placeholder="请输入用户名"
                        placeholderTextColor="gray"
                     />
                    <TextInput style={styles.txtInput}
                               placeholder="请输入密码"
                               placeholderTextColor="gray"
                               secureTextEntry={true}
                    />
                    {/*登录按钮*/}
                    <TouchableOpacity
                        style={styles.loginBtn}
                        activeOpacity={0.7}
                    >
                        {/* 和文字相关的属性，都加在 Text组件上(无继承效果)*/}
                        <Text style={styles.loginTxt}>登 录</Text>
                    </TouchableOpacity>
                    {/*忘记密码和注册新用户*/}
                    <View style={styles.btns}>
                        <TouchableOpacity activeOpacity={0.5} onPress={this.press}>
                            <Text>忘记密码</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={this.press}>
                            <Text>注册新用户</Text>
                        </TouchableOpacity>
                    </View>
                    {/*其他方式*/}
                    <View style={styles.bottomBox}>
                        <View style={styles.line} />
                        <Text style={styles.bottomTxt}>其他方式登录</Text>
                        <View style={styles.bottomImages}>
                            <TouchableOpacity activeOpacity={0.5}>
                                <Image source={require('./res/icon1.png')} style={styles.bottomImage}/>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5}>
                                <Image source={require('./res/icon2.png')} style={[styles.bottomImage,styles.bottomImageSnd]}/>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5}>
                                <Image source={require('./res/icon3.png')} style={styles.bottomImage}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
    },
    wrapper: {
        width: '90%',
        height,
        // backgroundColor: "white",
        alignItems: 'center',
    },
    avatar: {
        height: 70,
        width: 70,
        borderRadius: 35,
        borderColor: 'white',
        borderWidth: 1,
        marginTop: '30%',
        marginBottom: '10%',
    },
    txtInput: {
        width: '100%',
        backgroundColor: 'white',
        height: '5%',
        paddingLeft: 10,
        paddingRight: 10,
    },
    username: {
        marginBottom: 3,
    },
    loginBtn: {
        width: '100%',
        height: 30,
        backgroundColor: 'skyblue',
        borderRadius: 10,
        marginTop: 50,
    },
    loginTxt: {
        textAlign: 'center',
        lineHeight: 30,
        color: '#fff',
    },
    btns: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        // marginTop: 10
    },
    bottomBox: {
        width: '100%',
        position: 'absolute',
        bottom: 50,
        alignItems: 'center',
    },
    line: {
        width: '100%',
        height: 1 / scale,
        backgroundColor: '#999',
    },
    bottomTxt: {
        width: 100,
        marginTop: -9,
        backgroundColor: '#eee',
        textAlign: 'center',
        fontSize: 12,
    },
    bottomImages: {
        flexDirection: 'row',
        marginTop: 10,
    },
    bottomImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    bottomImageSnd: {
        marginLeft: 20,
        marginRight: 20,
    },
});
