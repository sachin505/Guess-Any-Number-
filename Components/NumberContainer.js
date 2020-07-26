import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Colors from '../Constants/Colors'

const NumberContainer = (props) => {
    return (<View style={styles.container}>
        <Text style={styles.textStyle}>
            {props.children}
        </Text>
    </View>)
}
const styles = StyleSheet.create({
    container: {
        borderColor: Colors.accent,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginVertical: 10,
        padding: 10,


    },
    textStyle: {
        fontSize: 22,
        color: Colors.accent,
    }
})
export default NumberContainer