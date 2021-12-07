import React from 'react';
import { View, Text, StyleSheet, Button, Alert, Image } from "react-native";


const GameOverScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Game Over !</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.image}
                        source={require('../assets/success.jpg')}/>
            </View>
            <Text>The number was: {props.userNumber}</Text>
            <Text>Number of rounds : {props.numberGuess}</Text>
            <Button title='New Game' onPress={props.onRestart}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        width: 250,
        height: 250,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 125,
        overflow: 'hidden',
        marginVertical: 25
    },
    image: {
        width: '100%',
        height: '100%'

    }
})

export default GameOverScreen;