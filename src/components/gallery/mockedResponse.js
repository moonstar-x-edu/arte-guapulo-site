const exampleResponse = [
  {
    id: '123',
    image: 'https://cdn.britannica.com/13/175913-050-3157AC96/Graffiti-New-York-City-1986.jpg',
    coordinates: {
      latitude: "00'00'00",
      longitude: "00'00'00"
    },
    authors: [
      {
        facebook: null,
        twitter: null,
        instagram: 'artist.handle'
      },
      {
        facebook: 'second.artist',
        twitter: 'they.also.have.twitter',
        instagram: null
      },
      {
        facebook: null,
        twitter: 'third.artist',
        instagram: null
      }
    ],
    tags: [
      'graffiti',
      'artist.handle',
      'city',
      'other'
    ]
  },
  {
    id: '987',
    image: 'https://thenypost.files.wordpress.com/2017/12/nyc-streets.jpg?quality=90&strip=all&w=618&h=410&crop=1',
    coordinates: {
      latitude: "00'00'00",
      longitude: "00'00'00"
    },
    authors: [
      {
        facebook: null,
        twitter: null,
        instagram: 'artist.handle'
      },
      {
        facebook: 'second.artist',
        twitter: 'they.also.have.twitter',
        instagram: null
      }
    ],
    tags: [
      'graffiti',
      'facebook.handle',
      'twitter.handle',
      'city',
    ]
  },
  {
    id: '234',
    image: 'https://www.toronto.ca/wp-content/uploads/2017/11/997d-Parking-Residential-On-street.jpg',
    coordinates: {
      latitude: "00'00'00",
      longitude: "00'00'00"
    },
    authors: [
      {
        facebook: null,
        twitter: null,
        instagram: 'artist.handle'
      },
    ],
    tags: [
      'mural',
      'twitter.handle',
      'town',
      'other1',
      'other2'
    ]
  },
  {
    id: '3456',
    image: 'https://www.toronto.ca/wp-content/uploads/2017/11/997d-Parking-Residential-On-street.jpg',
    coordinates: {
      latitude: "00'00'00",
      longitude: "00'00'00"
    },
    authors: [],
    tags: [
      'mural',
      'anonymous'
    ]
  }
];

export default exampleResponse;
