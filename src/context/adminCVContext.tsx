/*
This file focuses on the context API and the reducer function for providing data and state to the CV Page on the Admin Dashboard.
*/
import { createContext, useContext, useReducer } from "react";
import { updateCVData, postCVData } from "@/hooks/useCVData";
import { CVState } from "@/types/apiTypes";

const CVDataContext = createContext(null);
const CVDispatchContext = createContext(null);
const CVUpdate = createContext(null);
const CVPost = createContext(null);

export function CVProvider({ children }) {
  const [state, dispatch] = useReducer(cvReducer, initialState);

  return (
    <CVDataContext.Provider value={state}>
      <CVDispatchContext.Provider value={dispatch}>
        <CVUpdate.Provider value={updateCVData}>
          <CVPost.Provider value={postCVData}>{children}</CVPost.Provider>
        </CVUpdate.Provider>
      </CVDispatchContext.Provider>
    </CVDataContext.Provider>
  );
}

export function useCVState() {
  return useContext(CVDataContext);
}

export function useCVDispatch() {
  return useContext(CVDispatchContext);
}

export function useCVUpdate() {
  return useContext(CVUpdate);
}

export function useCVPost() {
  return useContext(CVPost);
}

interface CVAction {
  type: string;
  cv: any;
  id: string;
  cvOrder: string[];
}

function cvReducer(state: CVState, action: CVAction) {
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
}

export const initialState: CVState = {
  cv: [],
  cvOrder: [],
};
