/*
This file focuses on the context API and the reducer function for providing data and state to the Press Page on the Admin Dashboard.
*/
import { createContext, useContext, useReducer } from "react";
import { updatePressData, postPressData } from "@/hooks/usePressData";
import { PressState } from "@/types/apiTypes";

const PressDataContext = createContext(null);
const PressDispatchContext = createContext(null);
const PressUpdate = createContext(null);
const PressPost = createContext(null);

export function PressProvider({ children }) {
  const [state, dispatch] = useReducer(pressReducer, initialState);

  return (
    <PressDataContext.Provider value={state}>
      <PressDispatchContext.Provider value={dispatch}>
        <PressUpdate.Provider value={updatePressData}>
          <PressPost.Provider value={postPressData}>
            {children}
          </PressPost.Provider>
        </PressUpdate.Provider>
      </PressDispatchContext.Provider>
    </PressDataContext.Provider>
  );
}

export function usePressState() {
  return useContext(PressDataContext);
}

export function usePressDispatch() {
  return useContext(PressDispatchContext);
}

export function usePressUpdate() {
  return useContext(PressUpdate);
}

export function usePressPost() {
  return useContext(PressPost);
}

interface PressAction {
  type: string;
  press: any;
  id: string;
}

function pressReducer(state: PressState, action: PressAction) {
  switch (action.type) {
    case "UPDATED_PRESS_FROM_API":
      return {
        ...state,
        press: action.press,
      };
    case "DELETED_PRESS":
      return {
        ...state,
        press: state.press.filter((press) => press._id !== action.id),
      };
    case "ADDED_PRESS":
      return {
        ...state,
        press: [...state.press, action.press],
      };
    case "UPDATED_PRESS":
      return {
        ...state,
        press: state.press.map((press) => {
          if (press._id === action.id) {
            return {
              ...press,
              ...action.press,
            };
          }
          return press;
        }),
      };
    default:
      return state;
  }
}

const initialState: PressState = {
  press: [],
};
