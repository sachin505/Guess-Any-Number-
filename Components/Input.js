import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native';


const Input = (props) => {
    return (<View>
        <TextInput {...props} style={{ ...styles.inputText, ...props.style }} />
    </View>
    )
}

const styles = StyleSheet.create({
    inputText: {
        height: 60,
        borderBottomColor: "black",
        borderBottomWidth: 1,
    }
})
export default Input;