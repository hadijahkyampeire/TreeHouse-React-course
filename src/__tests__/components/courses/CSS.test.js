import React from 'react';
import enzyme from 'enzyme';
import CSS from '../../../components/courses/CSS';

describe('About component', () => {
    const node = enzyme.shallow(<CSS/>);

    it('should render without crashing', () => {
        expect(node).toMatchSnapshot();
    });
});