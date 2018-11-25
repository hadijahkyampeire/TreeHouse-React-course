import React from 'react';
import enzyme from 'enzyme';
import CourseContainer from '../../../components/courses/courseContainer';
import Course from '../../../components/Courses';

describe('About component', () => {

    const props = {
        data: [] 
    }
    const node = enzyme.shallow(<CourseContainer {...props}/>);

    it('should render without crashing', () => {
        expect(node).toMatchSnapshot();
    });

    // it('renders the Course component', () => {
    //     expect(node.find(Course)).toHaveLength(1);
    // });
});