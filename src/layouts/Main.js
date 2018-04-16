import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import cookie from 'js-cookie';

import Header from '../components/Template/Header';
import Nav from '../components/Template/Nav';

class Main extends Component {
    componentWillMount() {
      window.scrollTo(0, 0);
    }
  
    componentDidMount() {
      //if (process.env.NODE_ENV === 'production') {
        //const { id } = cookie.get();
        //ReactGA.set({
          //page: window.location.pathname,
          //userId: id,
        //});
        //ReactGA.pageview(window.location.pathname);
      //}
    }
  
    render() {
      return (
        <div id="wrapper">
          <Helmet titleTemplate="%s | Nabeel Hussain" defaultTitle="Nabeel Hussain" />
          <Header />
          <div id="main">
            {this.props.children}
          </div>
          {this.props.fullPage ? null : <Nav />}
        </div>);
    }
  }

Main.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        ]),
    fullPage: PropTypes.bool,
    };

Main.defaultProps = {
    children: null,
    fullPage: false,
    };

export default Main;