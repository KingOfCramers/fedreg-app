import React from "react";
import Loading from "../../components/Loading";
import { shallow } from "enzyme";

test("Should render Loading page", () => {
  const wrapper = shallow(<Loading />);
  expect(wrapper).toMatchSnapshot();
});