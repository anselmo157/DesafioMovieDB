import React, { useState, useRef } from 'react'
import { View, FlatList, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import CustomText from '../Accessibility/CustomText'
import Icon from 'react-native-vector-icons/FontAwesome'
import Carousel from 'react-native-snap-carousel'
import FloatingButton from '../Accessibility/FloatingButton'
import styles from './styles'

const windowWidth = Dimensions.get('window').width;

const DATA = [
    {
        title: "Ação",
    },
    {
        title: "Aventura",
    },
    {
        title: "Terror",
    },
];

const Item = ({ item }) => (
    <CustomText style={styles.title}>{item.title}</CustomText>
);

export default function Home({ navigation }) {

    const carouselRef = useRef(null);
    const [selectedId, setSelectedId] = useState(null);
    const [lista, setlista] = useState([
        {
            title: 'Justiceiro',
            text: 'Esse filme é uma merda',
        },
        {
            title: 'Justiceiro',
            text: 'Esse filme é uma merda',
        },
        {
            title: 'Justiceiro',
            text: 'Esse filme é uma merda',
        },
        {
            title: 'Justiceiro',
            text: 'Esse filme é uma merda',
        },
        {
            title: 'Justiceiro',
            text: 'Esse filme é uma merda',
        },
    ])

    const _renderCarousel = (item, index) => {
        return (
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('About', {
                    imageAbout: '../../../assets/images.jpg',
                    about: 'O agente do FBI Frank Castle se transforma em um justiceiro após sua esposa e filho terem sido assassinados por criminosos.',
                    id: 30,
                })}>
                    <Image
                        source={require('../../../assets/images.jpg')}
                        style={styles.carouselImg}
                    />
                </TouchableOpacity>
                <View style={styles_.title_view}>
                    <CustomText>Uma Fantastica Fabrica de Chocolate</CustomText>
                </View>
            </View>
        )
    }

    const renderItem = ({ item }) => {

        return (
            <View style={{ height: 475 }}>
                <View style={{ left: '5%', paddingBottom: 10 }}>
                    <Item
                        item={item}
                    />
                </View>
                <Carousel
                    style={styles.carousel}
                    ref={carouselRef}
                    data={lista}
                    renderItem={_renderCarousel}
                    sliderWidth={windowWidth}
                    itemWidth={200}
                    inactiveSlideOpacity={0.5}
                />
            </View>
        );
    };

    return (
        <View style={styles.theme}>
            <ScrollView>
                <View style={styles.searchBoxContainer}>
                    <TextInput
                        placeholder='Buscar Filmes'
                        placeholderTextColor='#666'
                        style={styles.searchBox}
                    />
                    <Icon
                        name='search'
                        size={22}
                        color='#666'
                        style={styles.searchBoxIcon}
                    />
                </View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />
            </ScrollView>
            <FloatingButton />
        </View>
    )
}

const styles_ = StyleSheet.create({
    title_view: {
        alignItems: 'center',
        top: 5
    }
})