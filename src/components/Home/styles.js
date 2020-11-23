import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    theme: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBoxContainer: {
        backgroundColor: '#fff',
        elevation: 10,
        borderRadius: 5,
        marginVertical: 10,
        width: '95%',
        flexDirection: 'row',
        alignSelf: 'center'  
    },
    searchBox: {
        padding: 12,
        paddingLeft: 20,
        fontSize: 16
    },
    searchBoxIcon: {
        position: 'absolute',
        right: 20,
        top: 14
    },
    themeIcon: {
        position: 'absolute',
        right: 20,
        top: 14
    },
    carousel: {
        flex: 1,
        overflow: 'visible'
    },
    carouselImg:{
        alignSelf: 'center',
        width: 200,
        height: 300,
        borderRadius: 12,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    carouselText: {
        padding: 15,
        color: '#fff',
        position: 'absolute',
        bottom: 10,
        left: 2,
        fontWeight: 'bold'
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
        left: 20,
    }
})