import styled, { keyframes } from "styled-components";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import Icon from "@/components/Icon";
import Button from "@/components/Button";

const DeleteConfirmation = ({ id, isOpen, onDismiss, title, handleDelete }) => {
  return (
    <Wrapper isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content>
        <Top>
          <IconWrapper>
            <Icon id="trash" size={36} />
          </IconWrapper>
          <DialogTitle>{title}</DialogTitle>
        </Top>
        <Bottom>
          {/* <Body>
            <DialogContentText>This action cannot be undone.</DialogContentText>
          </Body> */}
          <DialogActions>
            <CancelButton onClick={onDismiss} color="primary">
              Cancel
            </CancelButton>
            <RemoveButton
              onClick={() => handleDelete(id)}
              color="primary"
              autoFocus
            >
              Remove
            </RemoveButton>
          </DialogActions>
        </Bottom>
      </Content>
    </Wrapper>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
`;

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  animation: ${fadeIn} 500ms;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-block-start: 1rem;
  margin-block-end: 1rem;

  svg {
    color: var(--color-offblack);
  }
`;

const DialogTitle = styled.div``;

const Content = styled(DialogContent)`
  position: relative;
  min-width: 300px;
  background: white;
  border-radius: 2px;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideIn} 500ms both cubic-bezier(0, 0.6, 0.32, 1.06);
    animation-delay: 200ms;
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block-start: 1rem;
  padding-block-end: 1.5rem;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
  border-bottom: 1px solid hsl(240deg 23% 90%);
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  padding-block-start: 1.5rem;
  padding-block-end: 1.5rem;
  padding-inline-start: 2rem;
  padding-inline-end: 2rem;
  background-color: hsl(240deg 23% 95%);
`;

const DialogContentText = styled.div``;

const DialogActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Body = styled.div``;

const CancelButton = styled(Button)`
  color: var(--color-gray-500);
  background-color: var(--color-white);
  border: 1px solid hsl(240deg 23% 90%);
`;

const RemoveButton = styled(Button)`
  background-color: var(--color-urgent);
`;

export default DeleteConfirmation;
