import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import Colors from '../Constants/Colors'
const Header = (props) => {
    return (<View style={styles.viewContainer}>
        <Text style={styles.textStyles}>
            {props.title}
        </Text>
    </View>)
}
export default Header;
const styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        height: 70,
        //paddingTop: 36,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center'

    },
    textStyles: {
        fontSize: 18,
        fontFamily: 'open-sans-bold'
    }
})