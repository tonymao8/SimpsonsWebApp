import React from 'react';

class ImageList extends React.Component {
  state = { data: [] };
  //We want character direction 'right' to be first
  sortImages(image_list) {
    return image_list.sort(function(a, b) {
      if (a.characterDirection < b.characterDirection) {
        return 1;
      }
      if (a.characterDirection > b.characterDirection) {
        return -1;
      }
      return 0;
    });
  }

  render() {
    const images = this.props.images;
    var imageCards = this.sortImages(images);
    imageCards = imageCards.map(image => {
      return (
        <div>
          <img
            style={{ maxWidth: '10%', maxHeight: '10%' }}
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
