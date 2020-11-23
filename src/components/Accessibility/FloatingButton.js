import React from 'react'
import { View, StyleSheet, Animated, TouchableWithoutFeedback, Button } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'

class ButtonFont extends React.Component {
    animation = new Animated.Value(0)

    toggleMenu = () => {
        const toValue = this.open ? 0 : 1

        Animated.spring(this.animation, {
            toValue,
            friction: 5,
            useNativeDriver: false,
        }).start();

        this.open = !this.open;
    }

    render() {
        const plusStyle = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -80],
                    })
                }
            ]
        }

        const minusStyle = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -140],
                    })
                }
            ]
        }

        const refreshStyle = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -200],
                    })
                }
            ]
        }

        const opacity = this.animation.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 0, 1]
        })

        return (
            <View style={[styles.container]}>
                <TouchableWithoutFeedback onPress={() => this.props.increaseFonteSize()}>
                    <Animated.View style={[styles.button, styles.secondary, plusStyle, opacity]}>
                        <Icon
                            name='plus'
                            size={20}
                            color='#F02A4B'
                        />
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => {this.props.decreaseFonteSize()}}>
                    <Animated.View style={[styles.button, styles.secondary, minusStyle, opacity]}>
                        <Icon
                            name='minus'
                            size={20}
                            color='#F02A4B'
                        />
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => {this.props.recoveryFonteSize()}}>
                    <Animated.View style={[styles.button, styles.secondary, refreshStyle, opacity]}>
                        <Icon
                            name='refresh'
                            size={20}
                            color='#F02A4B'
                        />
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.button, styles.menu]}>
                        <Icon
                            name='font'
                            size={20}
                            color='#FFF'
                        />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseFonteSize: () => dispatch({ type: 'AUMENTAR_FONTE' }),
        decreaseFonteSize: () => dispatch({ type: 'DIMINUIR_FONTE' }),
        recoveryFonteSize: () => dispatch({ type: 'RESTAURAR_FONTE' }),
    }
}

export default connect(null, mapDispatchToProps)(ButtonFont)

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: '10%',
        bottom: '5%',
    },
    button: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 10,
        shadowColor: '#F02A4B',
        shadowOpacity: 0.3,
        shadowOffset: { height: 10 }
    },
    menu: {
        backgroundColor: '#F02A4B'
    },
    secondary: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        backgroundColor: '#FFF'
    }
})