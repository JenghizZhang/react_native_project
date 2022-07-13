import React, { Component } from 'react'
import { View, FlatList, Text} from 'react-native'

const arr_data=[
    {
        id:1,
        data:10
    },
    {
        id:2,
        data:20
    },
    {
        id:3,
        data:30
    },
    {
        id:4,
        data:40
    },
]

export default class App1 extends Component {

    constructor(props){
        super(props)
        this.state = {
            arr_data
        }
    }

    renderDate({item}){   //这个函数决定了每一项的展示方式    item就是每一项数据
        return(
            <Text>{item.id}、{item.data}</Text>
        )
    }
    render() {
        return (
            <View>
                <FlatList 
                    numColumns={2}    //每行显示多少项
                    data={this.state.arr_data}   //数据源
                    renderItem= {this.renderDate}   //渲染函数
                />
            </View>
        )
    }
}
