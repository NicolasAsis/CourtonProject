/**
 * @format
 */

import 'react-native';
import React from 'react';
import Login from '../pages/Page-login';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Login />);
});
