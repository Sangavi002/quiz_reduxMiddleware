import { FETCH_QUIZ_SUCCESS, FETCH_QUIZ_FAILURE, UPDATE_QUIZ_SCORE } from '../action/quizAction';

const initialState = {
  questions: [],
  score: 0,
  currentQuestionIndex: 0 
}
export const quizReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_QUIZ_SUCCESS:
      return {
        ...state,
        questions: action.payload
      };
    case FETCH_QUIZ_FAILURE:
      return state; 
    case UPDATE_QUIZ_SCORE:
      const { questionIndex, optionIndex, isCorrect } = action.payload;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestionIndex: state.currentQuestionIndex + 1 
      }
    default:
      return state;
  }
};


