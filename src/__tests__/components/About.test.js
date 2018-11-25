import React from 'react';
import enzyme from 'enzyme';
import About from '../../components/About';

describe('About component', () => {
    const node = enzyme.shallow(<About/>);

    it('should render without crashing', () => {
        expect(node).toMatchSnapshot();
    });
});