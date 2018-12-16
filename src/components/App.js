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

  sortImages(image_list) {
    var arrayLength = image_list.length;
    for (let i = 0; i < arrayLength; i++) {
      if (image_list[i].characterDirection === 'Left') {
        this.state.data.left.push(image_list[i]);
      } else {
        this.state.data.right.push(image_list[i]);
      }
    }
  }

  render() {
    const images = this.state.images;
    this.sortImages(images);
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
