import React, { useState } from "react";
import { View , Text } from "react-native";
import  { PasswordField } from "./../../components/PasswordField/PasswordField.js";
import { TextField } from "./../../components/TextField/TextField.js";

export default GetStartedView = () => {

    //Estado con todos los datos
    const [data, setData] = useState(); 
    const [pass, setPass] = useState();

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Get Started                
            </Text>            
            <TextField label={ 'E-mail' } placeholder={ 'Ingrese su E-Mail' } onChangeText={ setData }/>            
            <PasswordField label={ 'Contraseña' } placeholder={ 'Ingrese contraseña' } onChangeText={ setPass }/>            
            <Text>
                El E-Mail es: {data}                
            </Text>
            <Text>
                La password es: {pass}
            </Text>
            <Text>Hola git</Text>
        </View>
    );
}