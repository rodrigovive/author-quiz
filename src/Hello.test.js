import React from 'react';
import ReactDom from 'react-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
function Hello(props) {
  return <h1>Hello at {props.now}</h1>;
}

const moment = new Date(1588946400000);

describe('When setting up testing', () => {
  let result;
  beforeAll(() => {
    result = Hello({now: moment.toISOString()});
  });

  it('return a value', () => {
    expect(result).not.toBeNull();
  });

  it('is a h1', () => {
    expect(result.type).toBe('h1');
  });

  it('should has children', function() {
    expect(result.props.children).toBeTruthy();
  });
});

describe('When testing with REactDom', () => {
  it('should renders without crashing', function() {
    const div = document.createElement('div');
    ReactDom.render(<Hello now={moment.toISOString()}/>, div);
  });
});

Enzyme.configure({ adapter: new Adapter() })

describe('When testing with Enzyme', () => {
  it('renders a h1', () => {
    const wrapper = shallow(<Hello now={moment.toISOString()}/>);
    expect(wrapper.find('h1').length).toBe(1);
  });
  it("contains Hello at 2020-05-08T14:00:00.000Z", ()=>{
    const wrapper = shallow(<Hello now={moment.toISOString()}/>)
    expect(wrapper.contains(<h1>Hello at 2020-05-08T14:00:00.000Z</h1>))
  })

});
