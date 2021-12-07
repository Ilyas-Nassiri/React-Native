import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Modal} from 'react-native'


const InputItem = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  
  const inputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addHandler = () => {
    props.onpress(enteredGoal);
    setEnteredGoal('');
  }
    return (
        <Modal visible={props.visibility} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder='Enter a course'
                value={enteredGoal} onChangeText={inputHandler}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='CANCEL' color='red' onPress={props.cancel}/>
                    </View>
                    <View style={styles.button}>
                        <Button title='ADD' onPress={addHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({ 
    
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  input: {
    padding: 7,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection:'row', 
    width: '80%', 
    justifyContent:'space-around'
  },
  button: {
      width: '40%',
      borderRadius: 15
  }
  })


export default InputItem;