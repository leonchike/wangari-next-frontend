import { forwardRef } from "react";
import styled from "styled-components";

const MyInput = forwardRef(function MyInput(props, ref) {
  const {
    label,
    type,
    padding,
    paddingBlockEnd,
    defaultValue,
    noWidth,
    ...otherProps
  } = props;

  return (
    <Label
      padding={padding}
      paddingBlockEnd={paddingBlockEnd}
      noWidth={noWidth}
    >
      {label}
      {type === "textarea" ? (
        <textarea type={type} {...otherProps} ref={ref} />
      ) : type === "select" ? (
        <select
          type={type}
          defaultValue={defaultValue}
          {...otherProps}
          ref={ref}
        />
      ) : (
        <input type={type} {...otherProps} ref={ref} />
      )}
    </Label>
  );
});

const Label = styled.label`
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

export default MyInput;
