import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown, NavItem, Nav } from 'react-bootstrap';
import Actions from '../../../redux/actions';
import Text from '../text';

const { setLocale } = Actions;

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props);

    this.handleLocaleSelect = this.handleLocaleSelect.bind(this);
  }

  handleLocaleSelect(locale) {
    this.props.setLocale(locale);
  }

  render() {
    const { app: { locale } } = this.props;

    return (
      <Dropdown className="language-switcher" as={NavItem} onSelect={this.handleLocaleSelect}>
        <Dropdown.Toggle as={Nav.Link}>
          <Text phrase="Navbar.locale.toggle" />
        </Dropdown.Toggle>
        <Dropdown.Menu alignRight>
          <Dropdown.Item eventKey="en" active={locale === 'en'}>
            <Text phrase="Navbar.locale.english" />
          </Dropdown.Item>
          <Dropdown.Item eventKey="es" active={locale === 'es'}>
            <Text phrase="Navbar.locale.spanish" />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app
  }
};

export default connect(mapStateToProps, { setLocale })(LanguageSwitcher);
