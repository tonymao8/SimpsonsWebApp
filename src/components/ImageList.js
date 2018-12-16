import React from 'react';
import '../styles/scss/App.scss';

class ImageList extends React.Component {
  render() {
    var imageCards = this.props.data.map(image => {
      return (
        <div className="card">
          <img
            className="card__img"
            src={image.image}
            alt="Simpson Character"
          />
          <text>{image.quote}</text>'
        </div>
      );
    });
    return <div> {imageCards} </div>;
  }
}
export default ImageList;
