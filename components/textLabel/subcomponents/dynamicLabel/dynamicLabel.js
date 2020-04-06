import React, { PureComponent } from 'react';
import { Text } from 'react-native';

export default class DynamicLabel extends PureComponent {
    render() {
        return (<Text>{this.props.label}</Text>);
    }
}