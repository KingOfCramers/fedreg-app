import authReducer from "../../reducers/auth";


test("should set uid for login", () => {
  const action = { // example of auth login object...
    type: "LOGIN",
    uid: "abc123"
  }
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);

});

test("Should clear uid for logout", () => {
  const action = { // example of auth login object...
    type: "LOGOUT"
  }
  const state = authReducer({}, action);
  expect(state).toEqual({});

});