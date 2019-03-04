import React from 'react';
import Dashboard from './Dashboard';
//import AgileTableData from './AgileTableData';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, configure} from 'enzyme';

configure({adapter: new Adapter()});

describe('<Dashboard/>' , ()=>{

   it('renders without crashing', () => {
  shallow(<Dashboard />);
});
    it('renders 1 Dashboard component',()=>{
    const component = shallow(<Dashboard/>);
     expect(component).toHaveLength(1);
   });

it('should have 1 <h1> element', ()=>{
   const wrapper = shallow( <Dashboard /> )
expect(wrapper.find('h1').length).toBe(1);
});

it('<h1> element have this text', ()=>{
   const wrapper = shallow( <Dashboard /> )
expect(wrapper.find('h1').text()).toEqual("Dashboard");
});

it('the state showdiv should have value : false', ()=>{
     const wrapper = shallow( <Dashboard /> )
     expect(wrapper.state().showDiv).toEqual(false);
});
});
