import React from 'react';
import { createStackNavigator} from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";

import home from './pages/home';
import meal from './pages/meal';

const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name="home" component={home} />
                <AppStack.Screen name="meal" component={meal} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}