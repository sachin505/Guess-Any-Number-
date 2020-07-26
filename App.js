import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header'
import StartGameScreen from './Screens/StartGameScreen'
import GameScreen from './Screens/GameScreen'
import GameOverScreen from './Screens/GameOverScreen';
import * as Font from 'expo-font'
import { AppLoading } from 'expo';
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [numberOfRounds, setNumberOfRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);
  const fetchFonts = () => {
    return Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
  }
  if (!dataLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => { setDataLoaded(true) }}
      onError={(err) => console.log(err)}
    />
  }
  const startOverGame = () => {
    setNumberOfRounds(0)
    setUserNumber(null)
  }

  const StartGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);

  };
  const gameOverHandler = (numofRounds) => {
    setNumberOfRounds(numofRounds)
  }
  let content = (<StartGameScreen onStartGame={StartGameHandler} />)
  if (userNumber && numberOfRounds <= 0) {
    content = (<GameScreen choiceOfUser={userNumber} onGameOver={gameOverHandler} />)
  }
  else if (numberOfRounds > 0) {
    content = (<GameOverScreen roundsNumber={numberOfRounds} userNumber={userNumber} startOverGame={startOverGame} />)
  }
  return (
    <View style={styles.container}>
      <Header title="Guess Any Number"></Header>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 36,
  },
});
