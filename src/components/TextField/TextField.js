import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native';

export const TextField = ({...otherProps}) => {

    const { value, placeholder, label, onChangeText } = otherProps; 

    return(
        <View style = { styles.container } >
            <Text style={ styles.label }>
                { label }
            </Text>        
            <View style={ styles.containerInput }>
                <TextInput                    
                    value = { value }
                    placeholder = { placeholder }
                    style = { styles.textInput }  
                    onChangeText = { onChangeText }                     
                />        
            </View>            
        </View>  
    );

}

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        marginBottom: 10
    },
    containerInput: {
        marginTop: 5,        
        flexDirection: "row",
        width: 320,
        height: 60, 
        backgroundColor: '#EDEDED',                        
        borderWidth: 1,
        borderColor: '#DDDDDD',
        borderRadius: 10,
        padding: 8  
    },
    label:{
        color: '#3A3A3A',
        textAlign: 'left'
    }
});

export default TextField;
