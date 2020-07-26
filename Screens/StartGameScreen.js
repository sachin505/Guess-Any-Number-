import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';

import Card from '../Components/Card'
import Colors from "../Constants/Colors"
import Input from '../Components/Input';
import NumberContainer from '../Components/NumberContainer'
const StartGameScreen = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [selectedNumber, setEnteredNumber] = useState();
    const [confirmed, setConfirm] = useState(false);
    const [buttonWidth, setButtonwidth] = useState(Dimensions.get('window').width / 4);




    const numberInputHandler = enteredText => {
        setEnteredValue(enteredText.replace(/[^0-9]/g, ''));
    }

    const ResettingTextField = () => {
        setConfirm(false)
        setEnteredValue('')

    }

    const confirmHandler = () => {
        const choosenNumber = parseInt(enteredValue)
        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert('invalid Number !', 'Number has to be a Number between 1 and 99', [{ text: 'Okay', style: 'destructive', onPress: ResettingTextField }]);
            return;
        }
        setEnteredNumber(choosenNumber)
        setEnteredValue('')
        setConfirm(true)
        Keyboard.dismiss()
    }
    let confirmedOutPut
    if (confirmed) {
        confirmedOutPut = (
            <Card style={styles.summary}>
                <Text>Your Selected Number </Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="Start Game" onPress={() => props.onStartGame(selectedNumber)} />
            </Card>
        )
    }
    useEffect(() => {
        const updateLayOut = () => {
            setButtonwidth(Dimensions.get('window').width / 4)
        }
        Dimensions.addEventListener('change', updateLayOut)
        return (() => {
            Dimensions.removeEventListener('change', updateLayOut)
        })
    })
    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Lets Start The Game !</Text>
                        <Card style={styles.inputContainer}>
                            <Text>Select a Number</Text>
                            <Input style={styles.inputText} maxLength={2} keyboardType='number-pad' blurOnSubmit autoCorrect={false} onChangeText={numberInputHandler} value={enteredValue}></Input>
                            <View style={styles.buttonContainer}>
                                <View style={{ buttonWidth }}><Button title="Reset" onPress={ResettingTextField} color={Colors.accent}></Button></View>
                                <View style={{ buttonWidth }}><Button title="Confirm" color={Colors.primary} onPress={confirmHandler}></Button></View>
                            </View>
                        </Card>
                        {confirmedOutPut}
                    </View >
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold',
    },
    inputContainer: {
        width: "80%",
        minWidth: 300,
        alignItems: 'center',

    },
    textField: {
        borderWidth: 1,
        borderColor: "black",
        width: '100%',
        maxWidth: '80%'
    },
    buttonContainer: {
        flexDirection: 'row',
        padding: 10,
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,

    },

    inputText: {
        width: 50,
        textAlign: 'center'
    },
    summary: {
        margin: 10,
        alignItems: 'center'
    }

})
export default StartGameScreen;
