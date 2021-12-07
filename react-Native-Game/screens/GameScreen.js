import React, {useState, useRef, useEffect} from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import Card from "../components/Card";
import NumberConatainer from "../components/NumberContainer";

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if(rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }else {
        return rndNum;
    }
}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
    const currentLow = useRef(1);
    const currentHight = useRef(100);
    const [round, setRound] = useState(0);
    useEffect(() => {
        if(currentGuess === props.userChoice){
            props.onGameOver(round);
        }
    }, [currentGuess, props.userChoice, props.onGameOver]) 
    
        
    const nextGuessHandler = direction => {
        if((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greather' && currentGuess > props.userChoice)) {
            Alert.alert(
                'Wrong hint',
                'Yhou know that is wrong',
                [{text: 'Sorry!', style: 'cancel'}]
            );
            return;
        }

        if(direction === 'lower')
            currentHight.current = currentGuess;
        else 
            currentLow.current = currentGuess;
        
        const nextRndm = generateRandomBetween(currentLow.current, currentHight.current, currentGuess);
        setCurrentGuess(nextRndm);
        setRound(currRound => currRound + 1)
    }

    return(
        <View style={styles.screen }>
            <Text>Opponent's Guess</Text>
            <NumberConatainer>{currentGuess}</NumberConatainer>
            <Card style={styles.buttonContainer}>
                <Button title='LOWER' onPress={nextGuessHandler.bind(this, 'lower')}/>
                <Button title='GREATHER'onPress={nextGuessHandler.bind(this, 'greather')}/>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
   screen: {
        flex: 1,
        padding: 10,
        marginTop: 30,
        alignItems: 'center',
   },
   buttonContainer: {
       flexDirection: 'row',
       justifyContent: 'space-around',
       marginTop: 20,
       maxWidth: '80%',
       width: 300
   }
})

export default GameScreen;