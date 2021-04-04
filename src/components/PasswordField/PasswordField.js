import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

export const PasswordField = ({...otherProps}) =>{

    const [encriptado, setEncriptado] = useState(true);

    const onIconPress = () =>{
        if(encriptado == true){
            setEncriptado(false);
        }else if(encriptado == false){
            setEncriptado(true);
        }
    }

    const {value, placeholder} = otherProps; {/*Destructuración*/}

    return(
        <View style={styles.container}>
            <TextInput   
                value={value}
                placeholder={placeholder}
                style={styles.textInput}
                secureTextEntry={encriptado}
            />
            <TouchableOpacity onPress={onIconPress} style={styles.eye}>
                <Icon name="eye" size={20} />            
            </TouchableOpacity>            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        marginBottom: 20,        
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
    }
});

export default PasswordField;
