import React from 'react';
import enzyme from 'enzyme';
import Featured from '../../components/Featured';

describe('About component', () => {
    const props = {
        match:{ params:{
                name: 'Hadijah',
                topic: 'Javascript'}  }
    }
    const node = enzyme.shallow(<Featured {...props} />);

    it('should render without crashing', () => {
        expect(node).toMatchSnapshot();
    });
});