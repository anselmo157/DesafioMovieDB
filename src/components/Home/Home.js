import React, { useState, useRef } from 'react'
import { View, Text, Button, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import Carousel from 'react-native-snap-carousel'
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
    <Text style={styles.title}>{item.title}</Text>
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
                    id: 30,
                })}>
                    <Image
                        source={require('../../../assets/images.jpg')}
                        style={styles.carouselImg}
                    />
                    <Text style={styles.carouselText}>O Justiceiro</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const renderItem = ({ item }) => {

        return (
            <View>
                <Item
                    item={item}
                />
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
    )
}
