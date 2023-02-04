/*
This file creates the context API and the reducer function for providing data and state to the Settings Page.
*/

import { createContext, useContext, useReducer } from "react";
import { useUserData, updateUserData } from "@/hooks/useUserData";

const SettingsDataContext = createContext(null);
const SettingsDispatchContext = createContext(null);
const SettingsUser = createContext(null);
const UpdateUserData = createContext(null);

export function SettingsProvider({ children }) {
  const [state, dispatch] = useReducer(settingsReducer, initialState);

  return (
    <SettingsDataContext.Provider value={state}>
      <SettingsDispatchContext.Provider value={dispatch}>
        <SettingsUser.Provider value={useUserData}>
          <UpdateUserData.Provider value={updateUserData}>
            {children}
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
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const initialState = {
  user: null,
  displayProfile: true,
  displayEmail: true,
};
