import React, { Component } from 'react';
import './myPics.css';
import ImageGallery from 'react-image-gallery';
//import "node_modules/react-image-gallery/styles/css/image-gallery.css";
import "react-image-gallery/styles/css/image-gallery.css";

export default class MyPics extends Component {

  render() {
  	const images = [
      {
        original: 'https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg',
        thumbnail: 'https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg',
      },{
        original: 'http://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg',
        thumbnail: 'http://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg',
      }
     ];

    return (
      <div className='my-pics'>
        <ImageGallery
        items={images}
        slideInterval={2000}
        showThumbnails={false}
        showPlayButton={false}
        showNav={false}
       	showFullscreenButton={false}
       	infinite={true}
       	autoPlay={true} />
      </div>
    );
  }
}
