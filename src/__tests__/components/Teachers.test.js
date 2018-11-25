import React from 'react';
import enzyme from 'enzyme';
import Teachers from '../../components/Teachers';

describe('About component', () => {
    const node = enzyme.shallow(<Teachers/>);

    it('should render without crashing', () => {
        expect(node).toMatchSnapshot();
    });
});