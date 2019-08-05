import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import store from '../store/store';

import Layout from './Layout';

const App = (props) => {
  const {children, headerImage} = props;
  return (
    <Provider store={store}>
      <Layout headerImage={headerImage}>
        { children }
      </Layout>
    </Provider>
  )
}

App.propTypes = {
  children: PropTypes.any.isRequired,
};

export default App;
