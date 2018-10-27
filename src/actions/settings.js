import database from "../firebase/firebase";

// ADD_EXPENSE action generator
export const addSetting = (setting) => ({
  type: "ADD_SETTING",
  setting
});

export const startAddSetting = ({ department = "", description = "", url= "" } = {}) => {
 return (dispatch, getState) => { // Thunk returns an object dispatch and getState!
   const setting = { department, description, url, toggleSpecial: true };
   const uid = getState().auth.uid; // Access to the user id!

   return database.ref(`${uid}/`).push(setting).then((ref) => { // Returning for testing purposes...
      dispatch(addSetting({
       id: ref.key, // from firebase... This is the id of the actual document!!! We access it later inside startEditExpense
       ...setting
      }));
   });
 };
};

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

export const startToggleSpecial = ({ toggleSpecial, id }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`${uid}/${id}`)
      .update({
        toggleSpecial
      })
      .then(() => dispatch(setToggleState(toggleSpecial)));
    };
};

export const setToggleState = (toggleSpecial) => ({
  type: "TOGGLE_SPECIAL",
  toggleSpecial
});