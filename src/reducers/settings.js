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
            special: action.special
          }
        } else {
          return setting;
        }
      });
    case "TOGGLE_RULES" :
      return state.map((setting) => {
        if(setting.id === action.id){
          return {
            ...setting,
            rules: action.rules
          }
        } else {
          return setting;
        }
      });
    case "ADD_SEARCH" :
      return state.map(setting => {
        if(setting.id === action.id){
          if(setting.search){ // If the setting.search object exists....
            setting.search[action.searchId] = action.search; // append  this...
            return setting; // and return new settings...
          } else { // If no settings...
            setting.search = {};
            setting.search[action.searchId] = action.search; // append  this...
            return setting; // and return new settings...
          }
        } else {
          return setting;
        }
      })
    case "REMOVE_SEARCH" :
      return state.map(setting => {
        if(setting.id === action.id){
          delete setting.search[action.searchId];
          return setting;
        } else {
          return setting;
        }
      })
    case "CLEAR_SETTINGS":
      return settingsReducerDefaultState;
    default:
      return state;
  };
};

export default settingsReducer;