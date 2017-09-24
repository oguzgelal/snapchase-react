import React, { Component } from 'react'
import { TouchableHighlight, Text } from 'react-native'
import Button from './Button'

export default class FBLoginButton extends Component {

    render() {
        return (
            <Button type="facebook" injectProps={this.props} />
        )
    }
}
