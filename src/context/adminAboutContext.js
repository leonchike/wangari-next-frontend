/*
This file focuses on the context API and the reducer function for providing data and state to the About Page on the Admin Dashboard.
*/
import { createContext, useContext, useReducer } from "react";
import { updateAboutData, postAboutData } from "@/hooks/useAboutData";

const AboutDataContext = createContext(null);
const AboutDispatchContext = createContext(null);
const AboutUpdate = createContext(null);

export function AboutProvider({ children }) {
  const [state, dispatch] = useReducer(aboutReducer, initialState);

  return (
    <AboutDataContext.Provider value={state}>
      <AboutDispatchContext.Provider value={dispatch}>
        <AboutUpdate.Provider value={updateAboutData}>
          {children}
        </AboutUpdate.Provider>
      </AboutDispatchContext.Provider>
    </AboutDataContext.Provider>
  );
}

export function useAboutState() {
  return useContext(AboutDataContext);
}

export function useAboutDispatch() {
  return useContext(AboutDispatchContext);
}

export function useAboutUpdate() {
  return useContext(AboutUpdate);
}

function aboutReducer(state, action) {
  switch (action.type) {
    case "UPDATE_ABOUT_FROM_API":
      return {
        ...state,
        about: action.about,
      };
    case "CHANGED_IMAGE":
      return {
        ...state,
        about: state.about.map((about) => {
          if (about._id === action.id) {
            return {
              ...about,
              profileURL: "",
              profileURLWebPOriginalSize: "",
            };
          }
          return about;
        }),
      };
    case "IMAGE_UPDATED":
      return {
        ...state,
        about: state.about.map((about) => {
          if (about._id === action.id) {
            return {
              ...about,
              profileURL: action.jpg,
            };
          }
          return about;
        }),
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const initialState = {
  about: [],
};
