import React, { Component } from 'react';
import './myPics.css';
// import ImageGallery from 'react-image-gallery';
//import "node_modules/react-image-gallery/styles/css/image-gallery.css";
// import "react-image-gallery/styles/css/image-gallery.css";

export default class MyPics extends Component {
  constructor(props){
    super(props);
    this.state = {
      loadClass: 'me'
    }
  }
  
  onLoad(){
    this.setState({loadClass: this.state.loadClass + ' loaded'});
  }

  render() {
    let classN = this.state.loadClass ? this.state.loadClass : 'me';
    console.log('changing class', classN);
    return (
      <img ref='img' className={classN} onLoad={this.onLoad.bind(this)} src='./assets/me.jpg'/>
    );
  }
}
