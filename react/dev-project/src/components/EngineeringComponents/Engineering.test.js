import React from 'react';
import Engineering from './Engineering';
//import AgileTableData from './AgileTableData';
import Adapter from 'enzyme-adapter-react-16';
import {
  mount,
  shallow,
  configure
} from 'enzyme';

configure({
  adapter: new Adapter()
});
describe('<Engineering/>', () => {

  it('renders without crashing', () => {
    shallow( < Engineering / > );
  });
  it('renders 1 Engineering component', () => {
    const component = shallow( < Engineering / > );
    expect(component).toHaveLength(1);
  });

  it('should have 1 <h1> element', () => {
    const wrapper = shallow( < Engineering / > )
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('<h1> element have this text', () => {
    const wrapper = shallow( < Engineering / > )
    expect(wrapper.find('h1').text().trim()).toEqual("Engineering");
  });
});