import React from 'react';
import { connect } from 'react-redux';

import Info from '../hero/Info';
import FeatureList from '../hero/FeatureList';

const Home = () => {
  return (
    <>
      <Info />
      <FeatureList />
    </>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
