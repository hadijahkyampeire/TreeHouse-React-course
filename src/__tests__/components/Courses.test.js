import React from 'react';
import enzyme from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Courses from '../../components/Courses';
import Coursecontainer from '../../components/courses/courseContainer';

describe('About component', () => {
    const props = {
        match: {url: '/courses/', path: '/courses/'}
    }
    const node = enzyme.shallow(<Courses {...props}/>);

    it('should render without crashing', () => {
        expect(node).toMatchSnapshot();
    });

    // it('should render different paths', () => {
    //     const node = enzyme.shallow(
    //     <Courses match={{path: 'courses/css' }} />);
    //     expect(node.find(<Coursecontainer/>)).toBeCalled();
    // })
});