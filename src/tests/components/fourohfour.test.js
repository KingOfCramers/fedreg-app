import React from "react";
import FourOhFour from "../../components/FourOhFour";
import { shallow } from "enzyme";

test("Should render header correctly", () => {
  const wrapper = shallow(<FourOhFour />);
  expect(wrapper).toMatchSnapshot();
});

