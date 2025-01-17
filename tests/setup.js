import {
  configure, shallow, render, mount,
} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';

// Make Enzyme functions available in all test files without importing
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;

// React 16 Enzyme adapter
configure({ adapter: new Adapter() });
