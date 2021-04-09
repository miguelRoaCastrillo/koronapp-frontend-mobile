import React , { Suspense, lazy } from 'react';
import SplashScreen from '@/scenes/SplashScreen';
import { createStackNavigator } from '@react-navigation/stack';

const AuthNavigatorConfig = {
  initialRouteName: 'GetStarted',
  header: null,
  headerMode: 'none',
};

const AuthStack = createStackNavigator();

const GetStartedScene = lazy( () => import("@/scenes/GetStarted") );
const LoginScene      = lazy( () => import("@/scenes/Login") );
const SignUpScene     = lazy( () => import("@/scenes/SignUp") );

const AuthNavigator = () => {
    return(
        <Suspense fallback={SplashScreen}>            
            <AuthStack.Navigator {...AuthNavigatorConfig}>
                <AuthStack.Screen name="GetStarted" component={GetStartedScene} />
                <AuthStack.Screen name="Login" component={ LoginScene } />
                <AuthStack.Screen name="SignUp" component={ SignUpScene } />                
            </AuthStack.Navigator>
        </Suspense>
    )
}

export default AuthNavigator;