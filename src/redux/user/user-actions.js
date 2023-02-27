export const TOOGLE_MENU_HIDDEN = "TOOGLE_MENU_HIDDEN";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const toggleMenuHidden = () => ({
  type: TOOGLE_MENU_HIDDEN,
});

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});
