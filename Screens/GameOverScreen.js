import React from 'react'
import { StyleSheet, View, Text, Button, Image, ScrollView, Dimensions } from 'react-native'
import Colors from '../Constants/Colors'

const GameOverScreen = (props) => {

    return (
        <ScrollView>
            <View style={styles.screen}>
                <Text>
                    Game Over
    </Text>
                <Image source={require('../assets/naruto.jpg')} style={styles.imageStyle} />
                <Text> your Phone made <Text style={{ color: Colors.primary }, fontFamily = 'open-sans-bold'}>{props.roundsNumber}</Text> Attemps to guess <Text style={{ color: Colors.accent }}> {props.userNumber}</Text>  </Text>
                <Button onPress={props.startOverGame} title="ReStart Game" />
            </View >
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: { width: '80%', height: 300, borderRadius: 200, }
})
export default GameOverScreen;