import database from "../firebase/firebase";

// ADD_EXPENSE action generator
export const addSetting = (setting) => ({
  type: "ADD_SETTING",
  setting
});

export const startAddSetting = ({ department = "", description = "", url= "", special=true, rules=false, search="" } = {}) => {
if(!!department){
 return (dispatch, getState) => { // Thunk returns an object dispatch and getState!
   const setting = { department, description, url, special, rules, search };
   const uid = getState().auth.uid; // Access to the user id!
    const data = [];
    database.ref(`${uid}/`).once("value")
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          data.push(childSnapshot.val().department)
        });
        if(!data.includes(setting.department)){
          return database.ref(`${uid}/`).push(setting).then((ref) => { // Returning for testing purposes...
             dispatch(addSetting({
              id: ref.key, // from firebase... This is the id of the actual document!!! We access it later inside startEditExpense
              ...setting
             }));
          });
        }
      });
    }
  }
}

export const removeSetting = ({ id } = {}) => ({
   type: "REMOVE_SETTING",
   id
 });

export const startRemoveSetting = ({ id } = {}) => {
 return (dispatch, getState) => {
   const uid = getState().auth.uid;
   return database.ref(`${uid}/${id}`).remove()
     .then(() => {
       dispatch(removeSetting({ id }));
     });
 };
};

export const startSetSettings = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`${uid}/`).once("value")
      .then((snapshot) => {
        let settings = [];
        snapshot.forEach((childSnapshot) => {
          settings.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setSettings(settings));
      });
  };
};

export const setSettings = (settings) => ({
  type: "SET_SETTINGS",
  settings
});

export const startToggleSpecial = ({ special, id }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`${uid}/${id}`)
      .update({
        special
      })
      .then(() => dispatch(toggleSpecial({ special, id })));
    };
};

export const toggleSpecial = ({ special, id }) => {
  console.log(special, id )
  return {
    type: "TOGGLE_SPECIAL",
    special,
    id
  }
}

export const startToggleRules = ({ rules, id }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`${uid}/${id}`)
      .update({
        rules
      })
      .then(() => dispatch(toggleRules({ rules, id })));
    };
};

export const toggleRules = ({ rules, id }) => ({
  type: "TOGGLE_RULES",
  rules,
  id
});

export const clearSettings = () => ({
  type: "CLEAR_SETTINGS"
});

export const startClearSettings = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`${uid}`).remove()
      .then(() => dispatch(clearSettings()));
  }
}

export const addSearch = (search) => ({
  type: "ADD_SEARCH",
  search
});

export const startAddSearch = ({ search, id }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`${uid}/${id}`)
      .update({
        search
      })
      .then(() => dispatch(addSearch(search)));
  };
};










