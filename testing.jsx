import { shallow } from "enzyme";
import * as React from "react";
import {} from "";

// if props exist and need to be manipulated
let props;
beforeEach(() => {
  props = {};
});

// if any modules are mocked
afterEach(() => {
  jest.clearAllMocks();
});

// snapshot
test("should match snapshot", () => {
  const wrapper = shallow();
  expect(wrapper).toMatchSnapshot();
});

// expect component to exist
test("", () => {
  const wrapper = shallow();
  expect(wrapper.find("").exists()).toBe(true);
});

// simulate event
test("", () => {
  const wrapper = shallow();
  wrapper.find("").simulate("click");
  expect().toHaveBeenCalled();
});
