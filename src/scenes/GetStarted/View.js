import React from "react";
import { View , Text, TouchableOpacity, StyleSheet } from "react-native";


export const GetStartedView = ({ navigation }) => {

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Get Started
            </Text>         
            <TouchableOpacity onPress={ () => navigation.navigate('Login') }>
                <Text style={styles.button}>
                    Go to Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => navigation.navigate('SignUp') }>
                <Text style={styles.button}>
                    Go to SignUp
                </Text>
            </TouchableOpacity>
        </View>
    );
}

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

export default GetStartedView;