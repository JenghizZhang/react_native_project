// 4、登录界面

import React, { Component } from 'react'
import { 
    View, 
    StyleSheet, 
    Dimensions, 
    Image, 
    TextInput, 
    TouchableOpacity, 
    Text
} from 'react-native'

const {width,height, scale} = Dimensions.get('window')
export default class App4 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrap}>
                    {/* 头像 */}
                    <Image source={require("../../res/avatar.jpg")}  style={styles.avatar}/>
                    {/* 用户名 */}
                    {/* 具备多个样式的写法格式：  style={[styles.txtInput, styles.username]}   */}
                    <TextInput style={[styles.txtInput, styles.username]}
                        placeholder="请输入用户名"
                        placeholderTextColor="#ddd"
                        underlineColorAndroid="transparent"
                    />
                    {/* 密码 */}
                    <TextInput style={styles.txtInput}
                        placeholder="请输入密码"
                        placeholderTextColor="#ddd"
                        underlineColorAndroid="transparent"
                    />
                    {/* 登录按钮 */}
                    <TouchableOpacity style={styles.loginBtn} activeOpacity={0.7}>
                        {/* 和文字相关的属性，都加在 Text组件上(无继承效果)*/}
                        <Text style={styles.loginTxt}>登 录</Text>
                    </TouchableOpacity>
                    {/* 忘记密码&&注册新用户 */}
                    <View style={styles.btns}>
                        <TouchableOpacity activeOpacity={0.9}>
                            <Text>忘记密码</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9}>
                            <Text>注册新用户</Text>
                        </TouchableOpacity>
                    </View>
                    {/* 其他方式登录 */}
                    <View style={styles.bottomBox}>
                        <View style={styles.line}></View>
                        <Text style={styles.bottomTxt}>其他方式登录</Text>
                        <View style={styles.bottomImages}>
                            <TouchableOpacity activeOpacity={0.7}>
                                <Image source={require("../../res/icon1.png")} style={styles.bottomImage}/>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7}>
                                <Image source={require("../../res/icon2.png")} style={[styles.bottomImage,styles.bottomImageSnd]}/>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7}>
                                <Image source={require("../../res/icon3.png")} style={styles.bottomImage}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#eee",
        alignItems:"center"
    },
    wrap:{
        width:320,
        height,
        // backgroundColor:"#ccc",
        alignItems:"center"
    },
    avatar:{
        width:60,
        height:60,
        borderRadius:30,
        borderWidth:1,
        borderColor:"#fff",
        marginTop:50,
        marginBottom:30
    },
    txtInput:{
        width:"100%",
        backgroundColor:"#fff",
        height:40,
        paddingLeft:10
    },
    username:{
        marginBottom:3  
    },
    loginBtn:{
        width:"100%",
        height:30,
        backgroundColor:"skyblue",
        borderRadius:4,
        marginTop:20
    },
    loginTxt:{
        textAlign:"center",
        lineHeight:30,
        color:"#fff"
    },
    btns:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:10
    },
    bottomBox:{
        width:"100%",
        position:"absolute",
        bottom:50,
        alignItems:"center"
    },
    line:{
        width:"100%",
        height:1/scale,
        backgroundColor:"#999"
    },
    bottomTxt:{
        width:100,
        marginTop:-8,
        backgroundColor:"#eee",
        textAlign:"center",
        fontSize:12
    },
    bottomImages:{
        flexDirection:"row",
        marginTop:10
    },
    bottomImage:{
        width:40,
        height:40,
        borderRadius:20
    },
    bottomImageSnd:{
        marginLeft:20,
        marginRight:20
    }
})