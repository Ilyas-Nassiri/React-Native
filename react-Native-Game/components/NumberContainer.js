import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const NumberConatainer = props => {
    return(
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.accent,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        fontSize: 20,
        color: Colors.accent
    }
})

export default NumberConatainer;