import styled from "styled-components";
import { useEffect } from "react";

import SettingSection from "@/components/DashSettingsComponents/SettingSection";
import {
  useSettingsState,
  useSettingsDispatch,
  useUpdateUserData,
} from "@/context/adminUserContext";
import Input from "@/components/Input";
import Button from "@/components/Button";
import UnstyledButton from "@/components/UnstyledButton";
import Spacer from "@/components/layouts/Spacer";

const Profile = () => {
  const state = useSettingsState();
  const dispatch = useSettingsDispatch();
  const updateUserData = useUpdateUserData();

  const toggle = (type) => {
    switch (type) {
      case "profile":
        dispatch({
          type: "TOGGLED_PROFILE",
        });
        return;
      case "email":
        dispatch({
          type: "TOGGLED_EMAIL",
        });
        return;
      default:
        return;
    }
  };

  const updateDB = (type) => {
    updateUserData(state.user);
    // reset view
    if (type === "profile") {
      toggle("profile");
    } else if (type === "email") {
      toggle("email");
    }
  };

  if (!state.user) {
    return <div>Loading...</div>;
  }

  return (
    <Section>
      <Heading>Profile</Heading>
      <SettingsWrapper>
        <ProfileSection>
          {state.displayProfile && (
            <SettingSection
              label="Full name"
              data={state.user.firstName + " " + state.user.lastName}
              handleEdit={() => toggle("profile")}
            />
          )}
          {!state.displayProfile && (
            <FormSection>
              <Close>
                <UnstyledButton onClick={() => toggle("profile")}>
                  Cancel
                </UnstyledButton>
              </Close>
              <form onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="text"
                  label="First name"
                  name="firstName"
                  value={state.user.firstName}
                  onChange={(e) => {
                    dispatch({
                      type: "UPDATED_USER",
                      payload: {
                        ...state.user,
                        firstName: e.target.value,
                      },
                    });
                  }}
                />
                <Spacer size={5} />
                <Input
                  type="text"
                  label="Last name"
                  name="lastName"
                  value={state.user.lastName}
                  onChange={(e) => {
                    dispatch({
                      type: "UPDATE_USER",
                      payload: {
                        ...state.user,
                        lastName: e.target.value,
                      },
                    });
                  }}
                />
                <Spacer size={10} />
                <Button
                  type="button"
                  onClick={updateDB("profile")}
                  disabled={
                    state.user.firstName === "" || state.user.lastName === ""
                  }
                >
                  Save
                </Button>
              </form>
            </FormSection>
          )}
        </ProfileSection>
        <ProfileSection>
          {state.displayEmail && (
            <SettingSection
              label="Email address"
              data={state.user.email}
              handleEdit={() => toggle("email")}
            />
          )}
          {!state.displayEmail && (
            <FormSection>
              <Close>
                <UnstyledButton onClick={() => toggle("email")}>
                  Cancel
                </UnstyledButton>
              </Close>
              <form onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="email"
                  label="Email address"
                  name="email"
                  value={state.user.email}
                  onChange={(e) => {
                    dispatch({
                      type: "UPDATED_USER",
                      payload: {
                        ...state.user,
                        email: e.target.value,
                      },
                    });
                  }}
                />
                <Spacer size={10} />
                <Button
                  type="button"
                  onClick={updateDB("email")}
                  disabled={state.user.email === ""}
                >
                  Save
                </Button>
              </form>
            </FormSection>
          )}
        </ProfileSection>
      </SettingsWrapper>
    </Section>
  );
};

const Section = styled.section`
  margin-block-start: 2rem;
  margin-block-end: 2rem;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  color: var(--color-gray-700);
`;

const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

const ProfileSection = styled.div`
  margin-block-start: 1.5rem;
  padding-block-end: 1.5rem;
  border-bottom: 1px solid var(--color-gray-300);
`;

const FormSection = styled.div``;

export default Profile;
