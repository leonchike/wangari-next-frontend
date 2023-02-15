import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  block?: boolean;
}

type ButtonType = ButtonProps &
  React.HTMLAttributes<HTMLButtonElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, onClick, block, ...otherProps }: ButtonType) => {
  return (
    <StyledButton block={block} onClick={onClick} {...otherProps}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
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
