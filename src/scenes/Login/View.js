import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from '@/theme';


export const LoginView = ({ navigation, ...otherProps }) => {

    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.primary }}>
            <Text>
                Ingresa
            </Text>
            <TouchableOpacity onPress={ () => navigation.navigate('SignUp') }>
                <Text style={ styles.button }>
                    Go to SignUp
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => navigation.goBack() }>
                <Text style={ styles.button }>
                    Go back
                </Text>
            </TouchableOpacity>            
        </View>
    );
    
};

export const styles = StyleSheet.create({
    button:{
        marginTop: 10,
        marginBottom: 10,
        padding: 20,
        backgroundColor: '#3CDDDF',
        color: 'white',
        borderRadius: 10,
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default LoginView;