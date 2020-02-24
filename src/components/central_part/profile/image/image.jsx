import React from 'react';

import n from './image.module.css';

const Image = (props) => {
    return (
        <div className={n.image}>
            <img src="https://avatars.mds.yandex.net/get-pdb/812271/86250cf6-d898-4479-8c39-d229a36d6671/orig" alt="city"/>
        </div>
    );
}

export default Image;