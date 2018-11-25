import React from 'react';
import enzyme from 'enzyme';
import Home from '../../components/Home';

describe('About component', () => {
    const preventDefault = jest.fn();
    // const props = {
    //     value: 'hadijah'

    // }
    const node = enzyme.shallow(<Home />);

    it('should render without crashing', () => {
        expect(node).toMatchSnapshot();
    });

    // it('should handle submit and renders a form', () => {
    //     expect(node.find('form').simulate('submit', { preventDefault }));
    //     expect(preventDefault).toBeCalled();

    //     // const input = node.find('input[name="name"]');
    //     // expect(input).to.have.value('hadijah');

    // });
});