// @flow

import React, { Component, Fragment } from 'react';

type Props = {};
  
class ProfileImage extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className="profile-image"></div>
            </Fragment>
        );
    }
}

export default ProfileImage;
