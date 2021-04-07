import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

export const PasswordField = ({...otherProps}) => {

    const [encriptado, setEncriptado] = useState(true);

    const onIconPress = () =>{
        if(encriptado == true){
            setEncriptado(false);
        }else if(encriptado == false){
            setEncriptado(true);
        }
    }

    const {value, placeholder, label, onChangeText} = otherProps; 

    return(
        <View style = { styles.container }>
            <Text style = { styles.label }>
                { label }
            </Text>
            <View style={styles.containerInput}>
                <TextInput   
                    value={value}
                    placeholder={placeholder}
                    style={styles.textInput}
                    secureTextEntry={encriptado}
                    onChangeText = { onChangeText }
                />
                <TouchableOpacity onPress={onIconPress} style={styles.eye}>
                    <Icon name="eye" size={20} />            
                </TouchableOpacity>            
            </View>
        </View>        
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        marginBottom: 10
    },
    containerInput:{
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
    eye: {
        justifyContent: 'center'                
    },
    textInput:{
        flex: 1
    },
    label:{
        color: '#3A3A3A',
        textAlign: 'left'
    }
});

export default PasswordField;
