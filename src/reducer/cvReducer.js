export const initialState = {
  cv: [],
  cvOrder: [],
};

const cvReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_CV_FROM_API":
      return {
        ...state,
        cv: action.cv,
      };
    case "UPDATE_CV_ORDER_FROM_API":
      return {
        ...state,
        cvOrder: action.cvOrder,
      };
    case "DELETE_CV":
      return {
        ...state,
        cv: state.cv.filter((cv) => cv._id !== action.id),
      };
    case "ADD_CV":
      return {
        ...state,
        cv: [...state.cv, action.cv],
        cvOrder: [...state.cvOrder, action.cv._id],
      };
    case "UPDATE_CV":
      return {
        ...state,
        cv: state.cv.map((cv) => {
          if (cv._id === action.id) {
            return {
              ...cv,
              ...action.cv,
            };
          }
          return cv;
        }),
      };
    default:
      return state;
  }
};

export default cvReducer;
