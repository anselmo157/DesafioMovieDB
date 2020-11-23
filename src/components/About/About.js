import React from 'react'
import { View, Image, Text} from 'react-native'
import styles from './styles'
import CustomText from '../Accessibility/CustomText'
import FloatingButton from '../Accessibility/FloatingButton'

export default function About({ route }) {
    return (
        <View style={{flex: 1}}>
            <Image
                style={styles.image}
                source={require('../../../assets/images.jpg')}
            />
            <Text style={styles.title}>O Justiceiro</Text>
            <View style={styles.boxAbout}>
                <CustomText style={styles.textAbout}>{route.params.about}</CustomText>
            </View>
            <FloatingButton/>
        </View>
        
    )
}
