import React, { useState } from "react";
import { View , Text } from "react-native";
import { PasswordField } from "./../../components/PasswordField/PasswordField.js";

export default GetStartedView = () => {

    const [pass, setPass] = useState();

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Get Started
            </Text>
            <PasswordField label={'Contraseña'} placeholder={'Ingrese la contraseña'} onChangeText={text=>setPass(text)}/>            
            <View>
                <Text>
                    {'La constraseña es:' + pass }
                </Text>
            </View>
        </View>
    );
}