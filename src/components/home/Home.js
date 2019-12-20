import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from '../common/carousel';
import Card from '../common/card';
import Text from '../common/text';
import { updatePageTitle } from '../../utils';

const options = [
  {
    id: 1,
    imgURL: '/img/carousel/guapulo_1.jpeg'
  },
  {
    id: 2,
    imgURL: '/img/carousel/guapulo_2.jpeg'
  },
  {
    id: 3,
    imgURL: '/img/carousel/guapulo_3.jpeg',
  }
];

class Home extends Component {
  componentDidMount() {
    updatePageTitle('Site.title.home');
  }

  componentDidUpdate(prevProps) {
    const { app: { locale: oldLocale } } = prevProps;
    const { app: { locale: newLocale } } = this.props;

    if (oldLocale !== newLocale) {
      updatePageTitle('Site.title.home');
    }
  }

  render() {
    return (
      <div className="home">
        <Carousel options={options} />

        <div className="home-content">
          <Card bg="light" border="dark" className="home-card">
            <p>
              <Text phrase="Home.cards.description.first" />
            </p>
            <p>
              <Text phrase="Home.cards.description.second" />
            </p>
          </Card>

          <Card bg="light" border="dark" className="home-card">
            <p>
              <Text phrase="Home.cards.os.first" />
              <a href="https://bitbucket.org/moonstar-x/arte-guapulo-site/src/master/" className="home-link">
                <Text phrase="Home.cards.os.bitbucket" />
              </a>
            </p>
            <p className="text-center">
              <a href="mailto:clopeza@estud.usfq.edu.ec" className="home-link">
                <Text phrase="Home.cards.os.email" />
              </a>
            </p>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app
  };
};

export default connect(mapStateToProps)(Home);
