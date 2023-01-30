import styled from "styled-components";

const Button = ({ children, onClick, block, ...otherProps }) => {
  const type = {
    primary: {
      backgroundColor: "var(--color-offblack)",
      color: "white",
    },
    secondary: {
      backgroundColor: "var(--color-white)",
      color: "var(--color-offblack)",
    },
  };

  return (
    <StyledButton block={block} onClick={onClick} {...otherProps}>
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
    opacity: 0.85;
  }
`;

export default Button;
