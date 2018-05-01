// @flow

import React, { Component, Fragment } from 'react';
import { Divider } from 'semantic-ui-react';

import MainLayout from '../layouts/main';
import ProfileImage from '../components/ProfileImage';


import Counter from '../components/Counter';
import Hello from '../components/Hello';

type Props = {};

class App extends Component<Props> {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <MainLayout>
                <ProfileImage />


            </MainLayout>
        );
    }
}

export default App;

/*
                <Hello title={ 'world' } />

                <Divider as='br' />

                <Counter value={ 0 } />
*/