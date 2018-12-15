import React from 'react';

const ImageList = props => {
  const imageCards = props.images.map(image => {
    return (
      <div>
        <img style={{ maxWidth: '10%', maxHeight: '10%' }} src={image.image} />
        <text>{image.quote}</text>'
      </div>
    );
  });
  //We want Character Direction right to be first
  imageCards.sort(function(a, b) {
    if (a.characterDirection < b.characterDirection) {
      return 1;
    }
    if (a.characterDirection > b.characterDirection) {
      return -1;
    }
    return 0;
  });

  return <div> {imageCards} </div>;
};

export default ImageList;
