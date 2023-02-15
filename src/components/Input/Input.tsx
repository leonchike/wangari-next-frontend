import { forwardRef } from "react";
import styled from "styled-components";

interface InputProps {
  label?: string;
  type?: string;
  padding?: string;
  paddingBlockEnd?: string;
  defaultValue?: string;
  noWidth?: boolean;
  labelFont?: string;
  labelWeight?: string;
}

type InputType = InputProps &
  React.HTMLAttributes<HTMLInputElement> &
  React.InputHTMLAttributes<HTMLInputElement>;

const MyInput = forwardRef(function MyInput(props, ref) {
  const {
    label,
    type,
    padding,
    paddingBlockEnd,
    defaultValue,
    noWidth,
    labelFont,
    labelWeight,
    ...otherProps
  } = props as InputType;

  return (
    <Label
      padding={padding}
      paddingBlockEnd={paddingBlockEnd}
      noWidth={noWidth}
    >
      <LabelText labelFont={labelFont} labelWeight={labelWeight}>
        {label}
      </LabelText>
      {type === "textarea" ? (
        // @ts-ignore
        <textarea type={type} {...otherProps} ref={ref} />
      ) : type === "select" ? (
        <select
          type={type}
          defaultValue={defaultValue}
          {...otherProps}
          // @ts-ignore
          ref={ref}
        />
      ) : (
        // @ts-ignore
        <input type={type} {...otherProps} ref={ref} />
      )}
    </Label>
  );
});

const Label = styled.label<InputProps>`
  --padding-margin: ${(p) => p.padding || "var(--form-padding)"};
  display: grid;
  grid-template-columns: 1fr;
  font-weight: var(--font-weight-normal);
  /* width: 100%; */
  width: ${(p) => (p.noWidth ? "auto" : "100%")};

  input,
  textarea,
  select {
    font: inherit;
    border: none;
    background-color: var(--color-form-input);
    padding: var(--padding-margin);
    padding-block-end: ${(p) => p.paddingBlockEnd || "var(--padding-margin)"};
    margin-block-end: var(--padding-margin);
    border-radius: var(--border-radius);

    &:focus {
      outline: 2px solid var(--color-offblack);
    }
  }
`;

const LabelText = styled.span<InputProps>`
  font-size: ${(p) => p.labelFont || "var(--normal-font-size)"};
  font-weight: ${(p) => p.labelWeight || "var(--font-weight-normal)"};
`;

export default MyInput;
