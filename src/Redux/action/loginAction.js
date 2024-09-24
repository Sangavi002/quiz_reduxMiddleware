export const LOGIN_SUCCESS = 'login_success';
export const LOGIN_FAILURE = 'login_failure';


export function loginSuccess() {
  return {type: LOGIN_SUCCESS}
};

export function loginFailure() {
  return {type: LOGIN_FAILURE}
};



export const loginAction = (credentials) => async (dispatch) => {
  try {
    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    if (response.ok) {
      dispatch(loginSuccess());
    } else {
      dispatch(loginFailure());
    }
  } catch (error) {
    dispatch(loginFailure());
  }
};
