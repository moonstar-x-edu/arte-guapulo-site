import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { t } from '../../../i18n';

const Text = ({ phrase }) => {
  return (
    <span>
      {t(phrase)}
    </span>
  );
};

Text.propTypes = {
  phrase: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    app: state.app
  };
};

export default connect(mapStateToProps)(Text);
