import React from 'react';
import simpsons from '../api/simpsons';
import ImageList from './ImageList';
import '../styles/App.scss';

class App extends React.Component {
  state = { images: [] };
  onClick = async term => {
    const response = await simpsons.get();
    this.setState({ images: response.data });
    //this.forceUpdate();
  };

  render() {
    return (
      <div id="parent">
        <div
          className="ui left aligned container"
          style={{ marginTop: '10px', maxWidth: '50%' }}
        >
          <button className="ui primary button" onClick={this.onClick}>
            Get Quotes
          </button>
          <ImageList images={this.state.images} />
        </div>
        <div
          className="ui right aligned container"
          style={{ marginTop: '10px', maxWidth: '50%' }}
        >
          Done
        </div>
      </div>
    );
  }
}

export default App;
