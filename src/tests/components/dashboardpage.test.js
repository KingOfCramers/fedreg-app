import React from "react";
import { DashboardPage } from "../../components/DashboardPage";
import { shallow } from "enzyme";

test("Should render ExpenseDashboard page correctly", () => {
  const wrapper = shallow(<DashboardPage />);
  expect(wrapper).toMatchSnapshot();
});