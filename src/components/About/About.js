import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

export default function About({ route }) {

    return (
        <View>
            <Image
                style={styles.image}
                source={require('../../../assets/images.jpg')}
            />
            <Text style={styles.title}>O Justiceiro</Text>
            <View style={styles.boxAbout}>
                <Text style={styles.textAbout}>{route.params.about}</Text>
            </View>
        </View>
    )
}