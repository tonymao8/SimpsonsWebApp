import React from 'react';
import '../styles/scss/App.scss';

class ImageList extends React.Component {
  render() {
    var imageCards = this.props.images.map(image => {
      return (
        <div className="card">
          <img
            className="card__img"
            src={image.image}
            alt="Simpson Character"
          />
          {image.quote}
        </div>
      );
    });
    return <div> {imageCards} </div>;
  }
}
export default ImageList;
