import React from 'react';
import enzyme from 'enzyme';
import Courses from '../../../components/courses/Course';

describe('About component', () => {
    const node = enzyme.shallow(<Courses/>);

    it('should render without crashing', () => {
        expect(node).toMatchSnapshot();
    });
});