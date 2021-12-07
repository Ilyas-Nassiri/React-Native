import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import Colors from '../constants/Colors';

const StartTheGame = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [selectedNumber, setselectedNumber] = useState();
    const [confirmed, setConfirmed] = useState(false);

    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }
    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Keyboard.dismiss();
            Alert.alert(
                'Invalid Number',
                'Number has to be between 1 and 99 !',
                [{text: 'Okay',style: 'destructive', onPress: resetInputHandler }]
            )
            setConfirmed(false);
            return;
        }
        setselectedNumber(chosenNumber);
        setEnteredValue('');
        setConfirmed(true);
        Keyboard.dismiss();
    }

    let confirmOutput;
    if(confirmed){
        confirmOutput = 
        <Card style={styles.numberCard}>
            <Text>You selected</Text>
            <NumberContainer>
                {selectedNumber}
            </NumberContainer>
            <Button title='START GAME' onPress={() => props.onStartGame(selectedNumber)}/>
        </Card>
    }
    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new Game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Enter a number</Text>
                    <Input style={styles.input}
                    blurOnSubmit keyboardType='number-pad' 
                    maxLength={2}
                    value={enteredValue}
                    onChangeText={numberInputHandler}/>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button color={Colors.accent} 
                            title='Reset'
                            onPress={resetInputHandler}/>
                        </View>
                        <View style={styles.button}>
                            <Button color={Colors.primary} 
                            title='Confirm'
                            onPress={confirmInputHandler}/>
                        </View>
                    </View>
                </Card>
                {confirmOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        padding: 10,
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginVertical: 20
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 20
    },
    button: {
        width: 100,
        borderRadius: 5,
    },
    numberCard: {
        marginTop: 30,
        alignItems: 'center'
    }
})
export default StartTheGame;