import React from 'react';
import ImageCard from  '../common/imageCard';
import exampleResponse from './mockedResponse';

const Gallery = () => {
  return (
    <div>
      {
        exampleResponse.map((dataObject) => (
          <ImageCard
            key={dataObject.id}
            piece={dataObject.id}
            imageURL={dataObject.image}
            authors={dataObject.authors}
            coordinates={dataObject.coordinates}
            tags={dataObject.tags}
          />
        ))
      }
    </div>
  )
};

export default Gallery;
