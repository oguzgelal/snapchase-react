import React, { Component } from 'react'
import { TouchableHighlight, Text } from 'react-native'
import { ButtonStyles } from '../theme'

export default class Button extends Component {

    _getSizeButton() {
        if (this.props.size === 'large') { return ButtonStyles.large; }
        return ButtonStyles.medium;
    }

    _getSizeText() {
        if (this.props.size === 'large') { return ButtonStyles.largeText; }
        return ButtonStyles.mediumText;
    }

    _getStyleButton() {
        if (this.props.type && ButtonStyles[this.props.type]) { return ButtonStyles[this.props.type]; }
        return ButtonStyles.regular;
    }
    _getStyleText() {
        if (this.props.type && ButtonStyles[this.props.type + 'Text']) { return ButtonStyles[this.props.type + 'Text']; }
        return ButtonStyles.regularText;
    }

    render() {
        // pass on the props object from sub components
        if (this.props.injectProps) {
            this.props = Object.assign({}, this.props, this.props.injectProps);
            delete this.props.injectProps;
        }

        return (
            <TouchableHighlight style={[
                ButtonStyles.base,
                this._getSizeButton(),
                this._getStyleButton(),
                this.props.style
            ]} onPress={this.props.onPress}>

                <Text style={[
                    ButtonStyles.baseText,
                    this._getSizeText(),
                    this._getStyleText()
                ]}>{this.props.text}
                </Text>

            </TouchableHighlight>
        )
    }
}
