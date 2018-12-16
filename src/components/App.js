import React from 'react';
import simpsons from '../api/simpsons';
import ImageList from './ImageList';
import '../styles/scss/App.scss';
import { callbackify } from 'util';

class App extends React.Component {
  state = {
    images: [],
    data: {
      left: [],
      right: []
    }
  };
  getQuotes = async term => {
    const response = await simpsons.get();
    this.setState({ images: response.data });
    this.sortImages(this.state.images);
  };

  sortImages() {
    const leftList = this.state.images.filter(
      word => word.characterDirection === 'Left'
    );
    const rightList = this.state.images.filter(
      word => word.characterDirection === 'Right'
    );

    this.setState({ data: { left: leftList, right: rightList } });
  }

  render() {
    return (
      <div className="container">
        <button className="btn" onClick={this.getQuotes}>
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
