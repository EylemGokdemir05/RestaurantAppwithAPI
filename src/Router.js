import 'react-native-gesture-handler';
import React from 'react'
import {View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Main, Restaurants, Details} from './pages'

const Stack = createStackNavigator();

function Router(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainPage">
                <Stack.Screen
                    name="MainPage"
                    component={Main}
                    options={{
                        title:"Anasayfa"
                    }}>
                </Stack.Screen>
                <Stack.Screen
                    name="RestaurantsPage"
                    component={Restaurants}
                    options={{
                        title:"Restaurants"
                    }}>
                </Stack.Screen>
                <Stack.Screen
                    name="DetailsPage"
                    component={Details}
                    options={{
                        title:"Details"
                    }}>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Router;