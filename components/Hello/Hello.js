// @flow

import React, { Component, Fragment } from 'react';

import { Header } from 'semantic-ui-react';

type Props = {
    title: string
};
  
class Hello extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Header as='h1'>Hello { this.props.title }</Header>
            </Fragment>
        );
    }
}

export default Hello;
