import { login, logout } from "../../actions/auth";

test("Should return login action object", () => {
  const action = login("9238");
  expect(action).toEqual({
    type: "LOGIN",
    uid: "9238"
  })
});

test("Should return logout action object", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT"
  })
});

