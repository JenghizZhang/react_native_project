/**
 * @format
 */

import 'react-native';
import React from 'react';
import App_login from '../App_login';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App_login />);
});
