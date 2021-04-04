import React from "react";
import { View , Text } from "react-native";
import  { PasswordField } from "./../../components/PasswordField/PasswordField.js"

export default GetStartedView = () => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Get Started                
            </Text>
            <PasswordField placeholder={'Contraseña'}/>
        </View>
    );
}