import React from 'react'
import { } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './components/Home/Home'
import About from './components/About/About'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Icon from 'react-native-vector-icons/Entypo'

const reducer = (state = 22, action) => {
    switch (action.type) {
        case 'AUMENTAR_FONTE':
            return state !== 25 ? state + 1 : state
        case 'DIMINUIR_FONTE':
            return state !== 19 ? state - 1 : state
        case 'RESTAURAR_FONTE':
            return state = 22
        default:
            return state
    }
}

const store = createStore(reducer);

export default function App() {
    const Stack = createStackNavigator();

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            title: 'MovieDB',
                            headerStyle: {
                                backgroundColor: '#032541',
                            },
                            headerTintColor: '#16B7DB',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                alignSelf: 'center',
                                left: '7%'
                            },
                            headerRight: () => {
                                <Icon
                                    name='light-bulb'
                                    size={25}
                                    color='#FFF'
                                    style={{ right: '75%' }}
                                />
                            }
                        }}
                    />
                    <Stack.Screen
                        name="About"
                        component={About}
                        options={{
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
        </Provider>
    );
}