import React from 'react';
import simpsons from '../api/simpsons';
import ImageList from './ImageList';
import '../styles/scss/App.scss';

class App extends React.Component {
  state = {
    images: {
      left: [],
      right: []
    }
  };
  getQuotes = async term => {
    const response = await simpsons.get();
    var data = this.sortImages(response.data);
    this.setState({
      images: {
        left: data.left,
        right: data.right
      }
    });
  };

  sortImages(images) {
    const leftList = images.filter(word => word.characterDirection === 'Left');
    const rightList = images.filter(
      word => word.characterDirection === 'Right'
    );
    return { left: leftList, right: rightList };
  }

  render() {
    return (
      <div className="container">
        <button className="btn" onClick={this.getQuotes}>
          Get Quotes
        </button>
        <div className="container--left">
          <ImageList images={this.state.images.left} />
        </div>
        <div className="container--right">
          <ImageList images={this.state.images.right} />
        </div>
      </div>
    );
  }
}

export default App;
