import React, { PureComponent } from 'react';
import DefaultLabel from './subcomponents/defaultLabel/defaultLabel';
import DynamicLabel from './subcomponents/dynamicLabel/dynamicLabel';


//exporting entire class
// under the hood, triggers PureComponent lifecycle and executes the render function
// if an error occurs, you get a named component name in the stacktrace
// which is pretty dope
// pure vs. functional; which one to use? -> 
/**
 * Technical reason for pure: PureComponent is a paired down offshoot of a full blown component. PureComponent is a shallow comparison of props 
 * (better for props that are primitives)
 * Component does a full re-render based on prop comparison -> heftier but it's better for cases where object data changes a lot
 * Reason for functional: just spits it out, as dumb as it gets
 */
export default class TextLabel extends PureComponent {
    render() {
        return (this.props.label ? <DynamicLabel label={this.props.label} /> : <DefaultLabel />);

    }
}