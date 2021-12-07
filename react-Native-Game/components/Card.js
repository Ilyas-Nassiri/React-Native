import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Card = props => {
    return(
        <View style={{ ...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        //shadow works just in IOS
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        //Elevation for ANDROID
        elevation: 7,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10
    },
})

export default Card;