import database from "../firebase/firebase";

// ADD_EXPENSE action generator
export const addSetting = (setting) => ({
  type: "ADD_SETTING",
  setting
});

export const startAddSetting = ({ department = "" } = {}) => {
 return (dispatch, getState) => { // Thunk returns an object dispatch and getState!
   const setting = { department };
   const uid = getState().auth.uid; // Access to the user id!

   return database.ref(`${uid}/settings`).push(setting).then((ref) => { // Returning for testing purposes...
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
   return database.ref(`users/${uid}/settings/${id}`).remove()
     .then(() => {
       dispatch(removeSetting({ id }));
     });
 };
};

export const startSetSettings = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`${uid}/settings`).once("value")
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