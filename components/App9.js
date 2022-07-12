// 9、WebView组件

import React, { Component } from 'react'
import {WebView} from 'react-native'

export default class App9 extends Component {
    render() {
        return (
  
            <WebView source={{   uri:"https://m.jd.com/"}}></WebView>

        )
    }
}
