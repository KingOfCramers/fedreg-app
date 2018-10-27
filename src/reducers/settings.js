// import allDepartments from "../resources/allDepartments";
const settingsReducerDefaultState = []; // Empty array...

const settingsReducer = (state = settingsReducerDefaultState, action) => {
  switch(action.type) {
    case "SET_SETTINGS" :
      return action.settings;
    case "ADD_SETTING" :
      return [...state, action.setting]
    case "REMOVE_SETTING" :
      return state.filter((setting) => {
        return setting.id !== action.id
      });
    case "TOGGLE_SPECIAL" :
      return state.map((setting) => {
        if(setting.id === action.id){
          return {
            ...setting,
            toggleSpecial: setting.toggleSpecial
          }
        } else {
          return setting;
        }
      });
    default:
      return state;
  };
};

export default settingsReducer;