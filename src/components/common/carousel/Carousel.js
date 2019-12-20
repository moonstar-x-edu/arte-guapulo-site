import React from 'react';
import PropTypes from 'prop-types';
import { Carousel as BSCarousel } from 'react-bootstrap';
import Text from '../text';

const Carousel = ({ options, fade, controls, indicators, interval, keyboard, pauseOnHover, slide, touch, wrap }) => {
  return (
    <BSCarousel
      fade={fade}
      controls={controls}
      indicators={indicators}
      interval={interval}
      keyboard={keyboard}
      pauseOnHover={pauseOnHover}
      slide={slide}
      touch={touch}
      wrap={wrap}
    >
      {
        options.map((item) => (
          <BSCarousel.Item>
            <img alt={`Slide #${item.id}`} src={item.imgURL} />
            {
              (item.titleKey || item.captionKey) &&
                <BSCarousel.Caption>
                  {
                    item.titleKey &&
                      <h3>
                        <Text phrase={item.titleKey} />
                      </h3>
                  }
                  {
                    item.captionKey &&
                      <p>
                        <Text phrase={item.captionKey} />
                      </p>
                  }
                </BSCarousel.Caption>
            }
          </BSCarousel.Item>
        ))
      }
    </BSCarousel>
  );
};

Carousel.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
    imgURL: PropTypes.string.isRequired,
    titleKey: PropTypes.string,
    captionKey: PropTypes.string
  })).isRequired,
  fade: PropTypes.bool,
  controls: PropTypes.bool,
  indicators: PropTypes.bool,
  interval: PropTypes.number,
  keyboard: PropTypes.bool,
  pauseOnHover: PropTypes.bool,
  slide: PropTypes.bool,
  touch: PropTypes.bool,
  wrap: PropTypes.bool
};

Carousel.defaultProps = {
  fade: false,
  controls: true,
  indicators: true,
  interval: 5000,
  keyboard: true,
  pauseOnHover: true,
  slide: true,
  touch: true,
  wrap: true
};

export default Carousel;
