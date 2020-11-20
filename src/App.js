import React from 'react'
import {  } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { fetchGenres } from './api/index'
import Home from './components/Home/Home'
import About from './components/About/About'

export default function App () {
    const Stack = createStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    options = {{
                        title: 'MovieDB',
                        headerStyle: {
                            backgroundColor: '#032541',
                        },
                        headerTintColor: '#16B7DB',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                    }}
                />
                <Stack.Screen   
                    name="About" 
                    component={About}
                    options = {{
                        title: 'Sobre o filme',
                        headerStyle: {
                            backgroundColor: '#032541',
                        },
                        headerTintColor: '#16B7DB',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}