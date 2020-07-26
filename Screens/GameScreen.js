import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Alert, ScrollView, Dimensions } from 'react-native'
import Card from '../Components/Card'
import NumberContainer from '../Components/NumberContainer'



const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNumber = Math.floor(Math.random() * (max - min)) + min;
    if (rndNumber === exclude) {
        return generateRandomNumber(min, max, exclude)
    }
    else {
        return rndNumber;
    }
}

const GameScreen = (props) => {
    const initialGuess = generateRandomNumber(1, 100, props.choiceOfUser)
    const [currentGuess, setCurrentGuess] = useState([initialGuess])
    const [PastNumber, setPastNumber] = useState([initialGuess]);


    const currentLow = useRef(1)
    const currentHigh = useRef(100)


    const compareValue = (direction) => {
        if ((direction === 'lower' && currentGuess < props.choiceOfUser) || (direction === 'greater' && currentGuess > props.choiceOfUser)) {
            Alert.alert('Don\'t lie', 'you know this is wrong ......', [{ text: 'Sorry...!', style: 'cancel' }])
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess
        }
        else {
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber)
        setPastNumber(currPastGuess => [nextNumber, ...currPastGuess])
    };
    const { choiceOfUser, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === choiceOfUser) {
            onGameOver(PastNumber.length)
        }
    }, [currentGuess, choiceOfUser, onGameOver])

    return (
        <View style={styles.screen}>
            <Text style={{ alignItems: 'center' }}>Oppnent's Guess</Text>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button style={{ width: 80 }} title="Lower" onPress={compareValue.bind(this, 'lower')} />
                <Button style={{ width: 80 }} title="Greater" onPress={compareValue.bind(this, 'greater')} />
            </Card>
            <ScrollView>
                {PastNumber.map(currentPastNumber => <View key={currentPastNumber}><Text>{currentPastNumber}</Text></View>)}
            </ScrollView>
        </View>
    )

}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: Dimensions.get('window').height > 600 ? 20 : 10,
        width: "80%",
        //maxWidth: "80%",
        minWidth: 300

    }
})
export default GameScreen;