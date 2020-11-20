import React from 'react'
import {View, Text} from 'react-native'

export default function About({route}) {
    return(
        <View>
            <Text>Esse é o componente de Sobre do sistema {route.params.id}</Text>
        </View>
    )
}