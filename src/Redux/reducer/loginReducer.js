import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../action/loginAction';

export const loginReducer = (state = {isAuthenticated: false}, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
          return {
            ...state,
            isAuthenticated: true,
          };
        case LOGIN_FAILURE:
          return {
            ...state,
            isAuthenticated: false,
          };
        default:
          return state;
      }
}
