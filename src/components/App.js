import React from 'react';
import simpsons from '../api/simpsons';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };
  onClick = async term => {
    const response = await simpsons.get();
    this.setState({ images: response.data });
    this.forceUpdate();
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <button className="ui primary button" onClick={this.onClick}>
          Get Quote
        </button>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
