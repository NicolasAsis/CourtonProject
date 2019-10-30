/**
 * @format
 */

import 'react-native';
import React from 'react';
import Home from '../pages/Page-home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it.skip('renders correctly', () => {
  renderer.create(<Home />);
});
