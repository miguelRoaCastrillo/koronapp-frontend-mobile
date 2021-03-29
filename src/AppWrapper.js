import React from "react";
import RootNavigator from "@/navigation";
import { NavigationContainer } from '@react-navigation/native';

const linking = {

}

export const Wrapper = () => {
    return (
        <NavigationContainer linking={linking} >
            <RootNavigator/>
        </NavigationContainer>
    );
};