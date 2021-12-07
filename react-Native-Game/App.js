import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo'

import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartTheGame from './screens/StartTheGame';

const fetchFont = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

 

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  const gameOverHandler = (numberRound) => {
    setGuessRound(numberRound);
  }

  const gameRestartHandler = () => {
    setGuessRound(0);
    setUserNumber(null);

  }


  let content = <StartTheGame onStartGame={startGameHandler} />;

  if(userNumber && guessRound <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  } else if(guessRound > 0)
    content = <GameOverScreen userNumber={userNumber} numberGuess={guessRound} onRestart={gameRestartHandler}/>

  return (
    <View style={styles.container}>
		<Header title='Guess the Number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1
  },
});
