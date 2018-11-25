import React from 'react';
import enzyme from 'enzyme';
import Javascript from '../../../components/courses/JavaScript';

describe('About component', () => {
    const node = enzyme.shallow(<Javascript/>);

    it('should render without crashing', () => {
        expect(node).toMatchSnapshot();
    });
});