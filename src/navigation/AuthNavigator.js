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

const AuthNavigator = () => {
    return(
        <Suspense fallback={SplashScreen}>
            <AuthStack.Navigator {...AuthNavigatorConfig}>
                <AuthStack.Screen name="GetStarted" component={GetStartedScene} />
            </AuthStack.Navigator>
        </Suspense>
    )
}

export default AuthNavigator;