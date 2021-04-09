import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'

export const SignUpView = ({ navigation, ...otherProps }) => {

    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <Text>
                Hi i'm the SignUp!
            </Text>
            <TouchableOpacity onPress={ () => navigation.navigate('Login')}>
                <Text style={ styles.button }>
                    Go to Login
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

export default SignUpView;