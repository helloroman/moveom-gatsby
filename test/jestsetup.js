/* global global */
// Make Enzyme functions available in all test files without importing
import { shallow, render, mount } from 'enzyme';

global.shallow = shallow;
global.render = render;
global.mount = mount;
// Fail tests on any warning
// eslint-disable-next-line
console.error = message => {
  throw new Error(message);
};
