import styled, { keyframes } from "styled-components";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import Button from "@/components/Button";
import UnstyledButton from "@/components/UnstyledButton";
import Input from "@/components/Input";
import Icon from "@/components/Icon";
import { QUERIES } from "@/styles/styleConstants";

const AddModal = ({ isOpen, onDismiss, handleAddNew, setName }) => {
  return (
    <Wrapper isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content>
        <Close onClick={onDismiss}>
          <Icon id="close" />
        </Close>
        <Title>Add a new Collection</Title>
        <Form onSubmit={handleAddNew}>
          <Input
            type="text"
            name="name"
            placeholder="Collection Name"
            autoFocus
            required
            onChange={(e) => setName(e.target.value)}
          />
          <Button type="submit">Add</Button>
        </Form>
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
  animation: ${fadeIn} 200ms;
`;

const Content = styled(DialogContent)`
  position: relative;
  min-width: 300px;
  width: 90%;
  max-width: 600px;
  background: white;
  border-radius: 2px;
  padding: 1rem;

  @media ${QUERIES.tabletAndUp} {
    padding: 2rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: ${fadeIn} 200ms both ease-in-out;
    animation-delay: 200ms;
  }
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin-block-start: 1rem;
  margin-block-end: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`;

const Close = styled(UnstyledButton)`
  position: absolute;
  top: 0.8rem;
  right: 1rem;

  @media ${QUERIES.tabletAndUp} {
    top: 1.2rem;
    right: 2rem;
  }
`;

export default AddModal;
