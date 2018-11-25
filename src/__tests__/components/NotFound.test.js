import React from 'react';
import enzyme from 'enzyme';
import NotFound from '../../components/NotFound';

describe('About component', () => {
    const node = enzyme.shallow(<NotFound/>);

    it('should render without crashing', () => {
        expect(node).toMatchSnapshot();
    });
});