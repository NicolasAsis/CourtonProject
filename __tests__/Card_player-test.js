/**
 * @format
 */

import 'react-native';
import React from 'react';
import Card_player from '../comps/Card_player';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Card_player />);
});
