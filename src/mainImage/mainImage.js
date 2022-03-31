import React from 'react';

import './mainImage.css';

import matt from './matt-frame.jpg';

class MainImage extends React.Component {
    render () {
    return (
            <div>
              <img src={matt} id="matt" alt="Matt Robinson" />
            </div>
    )
    }
}

export default MainImage;