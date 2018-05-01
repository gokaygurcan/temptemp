// @flow

import React, { Component, Fragment } from 'react';

import MainLayout from '../../layouts/main';
import ProjectDetails from '../../components/ProjectDetails';

type Props = {};
  
class Dummy extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainLayout title='Hello World | Projects | Dummy Project'>
                <Fragment>
                    Dummy Project!
                </Fragment>
            </MainLayout>
        );
    }
}

export default Dummy;
