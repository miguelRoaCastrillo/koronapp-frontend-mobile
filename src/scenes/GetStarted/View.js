import React, { useState } from "react";
import { View , Text } from "react-native";
import { TextField } from "./../../components/TextField/TextField.js"
import { PasswordField } from "./../../components/PasswordField/PasswordField.js";

export default GetStartedView = () => {

    const [pass, setPass] = useState();
    const [email, setEmail] = useState();

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Get Started
            </Text>
            <TextField label={'E-Mail'} placeholder={'Ingrese su E-Mail'} onChangeText={text=>setEmail(text)} />
            <PasswordField label={'Contraseña'} placeholder={'Ingrese la contraseña'} onChangeText={text=>setPass(text)} />            
            <View>
                <Text>
                    {'El E-Mail es: ' + email}
                </Text>
                <Text>
                    {'La constraseña es:' + pass }
                </Text>
            </View>
        </View>
    );
}