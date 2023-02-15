import {ContactData, ContactState} from "@/types/apiTypes"

interface Action {
  type: string;
  messages?: ContactData[];
  id?: string;
}

export const initialState = {
  messages: [],
};

const contactReducer = (state: ContactState, action: Action) => {
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
