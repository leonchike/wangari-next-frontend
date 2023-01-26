import styled from "styled-components";

const Button = ({ children, onClick, block }) => {
  return (
    <StyledButton block={block} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: var(--color-offblack);
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: var(--border-radius);
  text-align: center;
  text-decoration: none;
  display: ${(props) => (props.block ? "block" : "inline-block")};
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export default Button;
