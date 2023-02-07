import styled from "styled-components";

import SettingSection from "@/components/DashSettingsComponents/SettingSection";
import {
  useSettingsState,
  useSettingsDispatch,
  useUpdatePassword,
} from "@/context/adminUserContext";
import Input from "@/components/Input";
import Button from "@/components/Button";
import UnstyledButton from "@/components/UnstyledButton";
import Spacer from "@/components/layouts/Spacer";

const Password = () => {
  const state = useSettingsState();
  const dispatch = useSettingsDispatch();
  const UpdatePassword = useUpdatePassword();

  const toggle = (type) => {
    switch (type) {
      case "password":
        dispatch({
          type: "TOGGLED_PASSWORD",
        });
        return;
      case "cancel":
        dispatch({
          type: "TOGGLED_PASSWORD",
        });
        dispatch({
          type: "RESET_PASSWORD_FORM",
        });
        return;
      default:
        return;
    }
  };

  const checkIfPasswordIsSame = () => {
    if (state.password.new === state.password.current && state.password.new) {
      return true;
    }
    return false;
  };

  const checkNewandConfirm = () => {
    if (state.password.new !== state.password.confirm && state.password.new) {
      return true;
    }
    return false;
  };

  const updateDB = (type) => {
    // reset error states
    dispatch({
      type: "RESET_PASSWORD_ERRORS",
    });

    // Check if the new password is the same as the current password
    if (checkIfPasswordIsSame()) {
      return;
    }
    // check is the new and the confirm password are not the same
    if (checkNewandConfirm()) {
      console.log(state.password.error.confirm);
      dispatch({
        type: "PASSWORDS_NOT_MATCH",
      });
      return;
    }

    // update db
    const data = {
      email: state.user.email,
      password: state.password.current,
      newPassword: state.password.new,
    };

    try {
      UpdatePassword(data).then((response) => {
        if (!response) {
          dispatch({
            type: "PASSWORD_API_ERROR",
          });
          return;
        }
        // reset view
        if (type === "password") {
          toggle("password");
        }
      });
    } catch (error) {
      dispatch({
        type: "PASSWORD_API_ERROR",
      });
      return;
    }
  };

  if (!state.user) {
    return <div>Loading...</div>;
  }

  return (
    <Section>
      <Heading>Password</Heading>
      <SettingsWrapper>
        <ProfileSection>
          {state.displayPassword && (
            <SettingSection
              label="Password"
              data="********"
              handleEdit={() => toggle("password")}
            />
          )}
          {!state.displayPassword && (
            <FormSection>
              <Close>
                <UnstyledButton onClick={() => toggle("cancel")}>
                  Cancel
                </UnstyledButton>
              </Close>
              <form onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="password"
                  label="Current password"
                  value={state.password.current}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_PASSWORD",
                      payload: {
                        current: e.target.value,
                      },
                    })
                  }
                  required
                />
                <Spacer size={1} />
                <Input
                  type="password"
                  label="New password"
                  value={state.password.new}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_PASSWORD",
                      payload: {
                        new: e.target.value,
                      },
                    })
                  }
                  required
                />
                {checkIfPasswordIsSame() && (
                  <Error>
                    New password is the same as the current password
                  </Error>
                )}
                <Spacer size={1} />
                <Input
                  type="password"
                  label="Confirm new password"
                  value={state.password.confirm}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_PASSWORD",
                      payload: {
                        confirm: e.target.value,
                      },
                    })
                  }
                  required
                />
                {state.password.error.confirm && (
                  <Error>New password and confirm password do not match</Error>
                )}
                {state.password.error.apiError && (
                  <Error>Something went wrong. Please try again</Error>
                )}
                <Spacer size={1} />
                <Button
                  type="submit"
                  onClick={() => updateDB("password")}
                  disabled={
                    state.password.current === "" ||
                    state.password.new === "" ||
                    state.password.confirm === ""
                  }
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

const Error = styled.p`
  color: var(--color-urgent);
  margin-block-end: 8px;
`;

export default Password;
