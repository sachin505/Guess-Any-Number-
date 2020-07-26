import React from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'

const Card = (props) => {
    return (<View style={{ ...style.card, ...props.style }}>{props.children}</View>)
}

const style = StyleSheet.create({
    card: {
        elevation: 8,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10
    }

})
export default Card;
