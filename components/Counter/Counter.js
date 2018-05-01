// @flow

import React, { Component, Fragment } from 'react';

import { Button, Container } from 'semantic-ui-react';

type Props = {};
  
class Counter extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    onClickHandler = () => {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(this.state);
        });
    }

    render() {
        return (
            <Fragment>
                <Container as='p' content={ this.state.count } />
                <Button onClick={ this.onClickHandler }>
                    Click Here
                </Button>
            </Fragment>
        );
    }
}

export default Counter;
