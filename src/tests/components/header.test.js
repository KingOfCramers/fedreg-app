import React from "react";
import { Header } from "../../components/Header";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

// React shallow renderer (worse method)
  // import ReactShallowRenderer from "react-test-renderer/shallow"; // Shallow rendering is for specific components...
  /*test("Should render header correctly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });*/

test("Should render header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

