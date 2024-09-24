
export const FETCH_QUIZ_SUCCESS = "quiz_success";
export const FETCH_QUIZ_FAILURE = "quiz_failure";
export const UPDATE_QUIZ_SCORE = "quiz_score";


export const fetchQuizSuccess = (data) => {
  return { type: FETCH_QUIZ_SUCCESS, payload: data };
};

export const fetchQuizFailure = () => {
  return { type: FETCH_QUIZ_FAILURE,payload: error.message };
};

export const submitAnswer = (questionIndex, optionIndex, isCorrect) => {
    return { type: UPDATE_QUIZ_SCORE, payload: { questionIndex, optionIndex, isCorrect } };
};

export const fetchQuiz = () => async (dispatch) => {
  try {
    const res = await fetch(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz"
    );
    const data = await res.json();
    dispatch(fetchQuizSuccess(data.data));
  } catch (error) {
    dispatch(fetchQuizFailure());
  }
};
