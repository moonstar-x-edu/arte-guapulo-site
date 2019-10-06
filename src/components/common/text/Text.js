import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { t } from '../../../i18n';

const Text = ({ phrase }) => {
  if (!phrase) {
    return null;
  }

  return (
    <Fragment>
      {t(phrase)}
    </Fragment>
  );
};

Text.propTypes = {
  phrase: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    app: state.app
  };
};

export default connect(mapStateToProps)(Text);
