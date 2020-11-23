import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class CustomText extends React.Component {
    render() {
        return (
            <Text style={{fontSize: this.props.fontSize, fontWeight: 'bold'}}>{this.props.children}</Text>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        fontSize:state
    }
}

export default connect(mapStateToProps)(CustomText);