import React from "react";
import { View , Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "@/theme";

export const GetStartedView = ({ navigation }) => {

    return(
        <View style={{ 
            flex: 1, 
            paddingHorizontal: 30,
            paddingVertical: 30,
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: Colors.primary
        }}>
            <View style={{
                flex: 1, 
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Text style = {{
                    fontSize: 50,
                    fontWeight: "bold",
                    color: Colors.text
                }}>
                    KoronApp
                </Text> 
            </View>
        
            <TouchableOpacity 
                activeOpacity={1}
                style = {{
                    flexDirection: "row",
                    justifyContent: "center",
                    backgroundColor : Colors.text,
                    width: "100%",
                    borderRadius: 20
                }}
                onPress={ () => navigation.navigate('SignUp') }
            >
                <Text style={styles.button}>
                    Registrate
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                activeOpacity={1}
                style={{
                    marginTop: 15
                }}
                onPress={ () => navigation.navigate('Login') }
            >
                <Text style = {{
                    color: Colors.text
                }}>
                    ¿Ya tienes cuenta? Ingresa
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export const styles = StyleSheet.create({
    button:{
        padding: 18,
        color: "#90B4CE",
        borderRadius: 10,
        fontSize: 20
    }
})

export default GetStartedView;