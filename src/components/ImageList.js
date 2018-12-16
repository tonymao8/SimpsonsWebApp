import React from 'react';
import '../styles/scss/ImageList.scss';

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
          <body className="card__text">{image.quote}</body>
        </div>
      );
    });
    return <div> {imageCards} </div>;
  }
}
export default ImageList;
