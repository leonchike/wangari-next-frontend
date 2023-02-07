/*
This file creates the context API and the reducer function for providing data and state to the Settings Page.
*/

import { createContext, useContext, useReducer } from "react";
import {
  useUserData,
  updateUserData,
  updatePassword,
} from "@/hooks/useUserData";

const SettingsDataContext = createContext(null);
const SettingsDispatchContext = createContext(null);
const SettingsUser = createContext(null);
const UpdateUserData = createContext(null);
const UpdatePassword = createContext(null);

export function SettingsProvider({ children }) {
  const [state, dispatch] = useReducer(settingsReducer, initialState);

  return (
    <SettingsDataContext.Provider value={state}>
      <SettingsDispatchContext.Provider value={dispatch}>
        <SettingsUser.Provider value={useUserData}>
          <UpdateUserData.Provider value={updateUserData}>
            <UpdatePassword.Provider value={updatePassword}>
              {children}
            </UpdatePassword.Provider>
          </UpdateUserData.Provider>
        </SettingsUser.Provider>
      </SettingsDispatchContext.Provider>
    </SettingsDataContext.Provider>
  );
}

export function useSettingsState() {
  return useContext(SettingsDataContext);
}

export function useSettingsDispatch() {
  return useContext(SettingsDispatchContext);
}

export function useSettingsUser() {
  return useContext(SettingsUser);
}

export function useUpdateUserData() {
  return useContext(UpdateUserData);
}

export function useUpdatePassword() {
  return useContext(UpdatePassword);
}

// reducer function for the Settings Page
function settingsReducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "UPDATED_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "TOGGLED_PROFILE":
      return {
        ...state,
        displayProfile: !state.displayProfile,
      };
    case "TOGGLED_EMAIL":
      return {
        ...state,
        displayEmail: !state.displayEmail,
      };
    case "TOGGLED_PASSWORD":
      return {
        ...state,
        displayPassword: !state.displayPassword,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: {
          ...state.password,
          ...action.payload,
        },
      };
    case "SET_PASSWORD_ERROR":
      return {
        ...state,
        password: {
          ...state.password,
          error: {
            ...state.password.error,
            ...action.payload,
          },
        },
      };
    case "PASSWORDS_NOT_MATCH":
      return {
        ...state,
        password: {
          ...state.password,
          error: {
            ...state.password.error,
            confirm: "Passwords do not match.",
          },
        },
      };
    case "PASSWORD_API_ERROR":
      return {
        ...state,
        password: {
          ...state.password,
          error: {
            ...state.password.error,
            apiError:
              "Unable to update password, please make sure your current password is correct.",
          },
        },
      };
    case "RESET_PASSWORD_ERRORS":
      return {
        ...state,
        password: {
          ...state.password,
          error: {
            current: null,
            new: null,
            confirm: null,
            apiError: null,
          },
        },
      };
    case "RESET_PASSWORD_FORM":
      return {
        ...state,
        password: {
          current: "",
          new: "",
          confirm: "",
          error: {
            current: null,
            new: null,
            confirm: null,
            apiError: null,
          },
        },
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const initialState = {
  user: null,
  displayProfile: true,
  displayEmail: true,
  displayPassword: true,
  password: {
    current: "",
    new: "",
    confirm: "",
    error: {
      current: null,
      new: null,
      confirm: null,
      apiError: null,
    },
  },
};
