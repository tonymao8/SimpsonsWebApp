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
  getQuotes = async term => {
    const response = await simpsons.get();
    this.setState({ images: response.data });
  };

  sortImages() {
    const leftList = this.state.images.filter(
      word => word.characterDirection === 'Left'
    );
    const rightList = this.state.images.filter(
      word => word.characterDirection === 'Right'
    );
    return { left: leftList, right: rightList };
  }

  render() {
    var data = this.sortImages(this.state.images);
    return (
      <div className="container">
        <button className="btn" onClick={this.getQuotes}>
          Get Quotes
        </button>
        <div className="container--left">
          <ImageList images={data.left} />
        </div>
        <div className="container--right">
          <ImageList images={data.right} />
        </div>
      </div>
    );
  }
}

export default App;
