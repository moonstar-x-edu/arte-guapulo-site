import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar, Button } from 'react-bootstrap';
import Actions from '../../../redux/actions';

const { setLocale } = Actions;

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(locale) {
    this.props.setLocale(locale);
  }

  render() {
    const { app: { locale } } = this.props;

    return (
      <ButtonToolbar>
        <Button
          variant="secondary"
          active={locale === 'en'}
          onClick={() => this.handleButtonClick('en')}
        >
          EN
        </Button>
        <Button
          variant="secondary"
          active={locale === 'es'}
          onClick={() => this.handleButtonClick('es')}
        >
          ES
        </Button>
      </ButtonToolbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app
  }
};

export default connect(mapStateToProps, { setLocale })(LanguageSwitcher);
