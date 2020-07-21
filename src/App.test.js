import React from 'react';
import { render, waitForElementToBeRemoved } from '@testing-library/react';

import { shallow, mount } from 'enzyme'
import Counter from './Counter'
import App from './App'

describe('Counter Testing', () => {

  let wrapper;
  beforeEach(()=>{
    wrapper =shallow(<Counter />)
    // wrapper = mount(<App />)
    console.log(wrapper.debug())
  })

  test('render the title of counter', () => {
    expect(wrapper.find('h1').text()).toContain("This is counter app")
  });

  test("render a button with text of `increment`", ()=>{
    expect(wrapper.find('#increment-btn').text()).toBe("Increment")
  });

  test("rednre the initial value of state in a div", ()=>{
    expect(wrapper.find('#counter-value').text()).toBe("0")
  });

  test("render the click event of increment button and increment counter value", ()=>{
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1")
  })

  test("redner the click event of decreemnt button and decrement counter value", ()=>{
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1")
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("0")

  })
})

