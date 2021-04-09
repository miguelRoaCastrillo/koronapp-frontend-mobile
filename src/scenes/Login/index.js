import React from "react";
import LoginView from "./View";

export const LoginScene = ({ navigation, ...otherProps }) => {
    return (
        <LoginView navigation={ navigation } />
    );
}

export default LoginScene;