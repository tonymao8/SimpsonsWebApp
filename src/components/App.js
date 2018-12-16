import React from 'react';
import simpsons from '../api/simpsons';
import ImageList from './ImageList';
import '../styles/scss/App.scss';

class App extends React.Component {
  state = {
    images: [],
    data: {
      left: [],
      right: []
    }
  };
  renderContent = async term => {
    const response = await simpsons.get();
    this.setState({ images: response.data });
  };

  // sortImages(image_list) {
  //   var arrayLength = image_list.length;
  //   //var leftList = [];
  //   //var rightList = [];
  //   for (let i = 0; i < arrayLength; i++) {
  //     if (image_list[i].characterDirection === 'Left') {
  //       this.data.left.push(image_list[i]);
  //     } else {
  //       this.data.right.push(image_list[i]);
  //     }
  //   }
  //   // this.setState({data:{
  //   //   left: leftList,
  //   // right: rightList}});
  // }

  render() {
    const images = this.state.images;
    var arrayLength = images.length;
    //var leftList = [];
    //var rightList = [];
    for (let i = 0; i < arrayLength; i++) {
      if (images[i].characterDirection === 'Left') {
        this.data.left.push(images[i]);
      } else {
        this.data.right.push(images[i]);
      }
    }
    //this.sortImages(images);
    return (
      <div className="container">
        <button className="btn" onClick={this.renderContent}>
          Get Quotes
        </button>
        <div className="container--left">
          <ImageList images={this.state.data.left} />
        </div>
        <div className="container--right">
          <ImageList images={this.state.data.right} />
        </div>
      </div>
    );
  }
}

export default App;
