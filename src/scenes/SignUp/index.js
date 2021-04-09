import React from "react";
import SignUpView from "./View";

export const SignUpScene = ({ navigation, ...otherProps }) => {
    return (
        <SignUpView navigation={ navigation }/>
    );
}

export default SignUpView;