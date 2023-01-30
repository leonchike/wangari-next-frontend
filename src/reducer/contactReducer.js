import { useReducer } from "react";

export const initialState = {
  messages: [],
};

const contactReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_MESSAGES_FROM_API":
      return {
        ...state,
        messages: action.messages,
      };
    case "DELETE_MESSAGE":
      return {
        ...state,
        messages: state.messages.filter((message) => message._id !== action.id),
      };
    default:
      return state;
  }
};

export default contactReducer;
