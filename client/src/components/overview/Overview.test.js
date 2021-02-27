import React from 'react';
import { shallow } from 'enzyme';
import Overview from './Overview.jsx';


describe('Overview', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<Overview/>);

    expect(component.find('div').text()).toContain('Overview');
  });
});