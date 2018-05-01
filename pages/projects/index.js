// @flow

import React, { Component, Fragment } from 'react';

import MainLayout from '../../layouts/main';

type Props = {};
  
class Projects extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainLayout title='Hello World | Projects'>
                <Fragment>
                    Projects!
                </Fragment>
            </MainLayout>
        );
    }
}

export default Projects;
