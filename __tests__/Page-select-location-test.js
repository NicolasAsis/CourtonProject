/**
 * @format
 */

import 'react-native';
import React from 'react';
import SelectLocation from '../pages/Page-select-location';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<SelectLocation />);
});
