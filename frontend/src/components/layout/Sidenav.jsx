import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Sidenav extends React.Component {
  state = { openNav: false };

  onOpenNav = () => this.setState({ openNav: true });
  onCloseNav = () => this.setState({ openNav: false });

  render() {
    const { openNav } = this.state;
    return (
      <div className='side-nav-header'>
        <header className='header'>
          <button
            className='header__button'
            id='btnNav'
            type='button'
            onClick={this.onOpenNav}
          >
            <i className='material-icons'>menu</i>
          </button>
        </header>
        <nav className={`side-nav ${openNav ? 'side-nav--open' : ''}`}>
          <div className='side-nav__links'>
            <NavLink
              to='/'
              className='side-nav__link'
              activeClassName='side-nav__link--active'
              exact
            >
              <i className='material-icons'>home</i>
              דף הבית
            </NavLink>
            <NavLink
              to='/project'
              className='side-nav__link'
              activeClassName='side-nav__link--active'
              exact
            >
              <i className='material-icons'>assignment</i>
              פרוייקטים
            </NavLink>
            <NavLink
              to='/contact'
              className='side-nav__link'
              activeClassName='side-nav__link--active'
              exact
            >
              <i className='material-icons'>mail</i>
              צרו קשר
            </NavLink>
            <NavLink
              to='/about'
              className='side-nav__link'
              activeClassName='side-nav__link--active'
              exact
            >
              <i className='material-icons'>web</i>
              אודות
            </NavLink>
          </div>
          <div className='side-nav__overlay' onClick={this.onCloseNav}></div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Sidenav);
