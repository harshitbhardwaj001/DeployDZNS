import { reducerCases } from "./constants";

export const initialeState = {
  showLoginModal: false,
  showSignupModal: false,
  userInfo: undefined,
  isSeller: false,
  serviceData: undefined,
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.TOGGLE_LOGIN_MODAL:
      return {
        ...state,
        showLoginModal: action.showLoginModal,
      };
    case reducerCases.TOGGLE_SIGNUP_MODAL:
      return {
        ...state,
        showSignupModal: action.showSignupModal,
      };
    case reducerCases.CLOSE_AUTH_MODAL:
      return {
        ...state,
        showLoginModal: false,
        showSignupModal: false,
      };
    case reducerCases.SET_USER:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case reducerCases.SWITCH_MODE:
      return {
        ...state,
        isSeller: !state.isSeller,
      };
    case reducerCases.SET_SERVICE_DATA:
      return {
        ...state,
        serviceData: action.serviceData,
      };

    default:
      return state;
  }
};

export default reducer;
