import React from 'react';

class ImageList extends React.Component {
  state = { data: [] };
  //We want Character Direction right to be first
  sortImages() {
    const images = this.props.images;
    images.sort(function(a, b) {
      if (a.characterDirection < b.characterDirection) {
        return 1;
      }
      if (a.characterDirection > b.characterDirection) {
        return -1;
      }
      return 0;
    });
    this.setState({ data: images });
  }

  render() {
    const imageCards = this.state.data.map(image => {
      return (
        <div>
          <img
            style={{ maxWidth: '10%', maxHeight: '10%' }}
            src={image.image}
          />
          <text>{image.quote}</text>'
        </div>
      );
    });

    return <div> {imageCards} </div>;
  }
}

export default ImageList;
