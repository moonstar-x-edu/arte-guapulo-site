import React from 'react';
import ImageCard from  '../common/imageCard';
import exampleResponse from './mockedResponse';

const Gallery = () => {
  return (
    <div>
      {
        exampleResponse.map((dataObject) => (
          <ImageCard
            imageURL={dataObject.image}
            social={dataObject.social}
            coordinates={dataObject.coordinates}
            tags={dataObject.tags}
          />
        ))
      }
    </div>
  )
};

export default Gallery;
