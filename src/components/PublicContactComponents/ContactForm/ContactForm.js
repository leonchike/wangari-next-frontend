import { useEffect, useRef, useState, useId } from "react";
import pluralize from "pluralize";
import { useMutation } from "react-query";

import { submitContactform } from "@/api/public/publicAPI";

import Icon from "@/components/Icon";
import styled from "styled-components";
import { QUERIES } from "@/styles/styleConstants";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { fadeIn, fadeOut } from "@/styles/animations";

const ContactForm = () => {
  const [charactersRemaining, setCharactersRemaining] = useState(null);
  const [lowCharacters, setLowCharacters] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const messageLimit = 400;
  const FormPadding = "12px";

  //Form data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //Globally unique id for each input
  const id = useId();
  const firstNameId = `${id}-firstName`;
  const lastNameId = `${id}-lastName`;
  const emailId = `${id}-email`;
  const subjectId = `${id}-subject`;
  const messageId = `${id}-message`;

  //Mutation
  const mutation = useMutation(submitContactform);

  // update the number of charaters remaining ui
  useEffect(() => {
    setCharactersRemaining(messageLimit - message.length);
    charactersRemaining < 10 ? setLowCharacters(true) : setLowCharacters(false);
  }, [message, charactersRemaining]);

  // changes the form to sent view
  useEffect(() => {
    if (messageSent) {
      document.querySelector("#contactForm").reset();
      setCharactersRemaining(messageLimit);
    }
  }, [messageSent]);

  // check if mutation is successful and triggers the UI change
  useEffect(() => {
    if (mutation.isSuccess) {
      setMessageSent(true);
    }
  }, [mutation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisableSubmit(true);

    const data = {
      firstName,
      lastName,
      email,
      subject,
      message,
    };

    mutation.mutate(data);
  };

  return (
    <>
      <div>Alternatively, reach out below:</div>
      <FormWrapper>
        <MessageSent className="contact-form-success" data-sent={messageSent}>
          <Icon id="checkCircle" size={50} strokeWidth={2} />
          <div>
            <p>Message Sent, we will reach out shortly.</p>
          </div>
        </MessageSent>

        <Form
          name="contact-form"
          onSubmit={handleSubmit}
          id="contactForm"
          data-sent={messageSent}
        >
          <FormNameGroup>
            <Input
              type="text"
              name="firstName"
              id={firstNameId}
              label="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              required={true}
              padding={FormPadding}
            />
            <Input
              type="text"
              name="lastName"
              id={lastNameId}
              label="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              required={true}
              padding={FormPadding}
            />
          </FormNameGroup>
          <Input
            type="email"
            name="email"
            id={emailId}
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            required={true}
            padding={FormPadding}
          />
          <Input
            type="text"
            name="subject"
            id={subjectId}
            label="Subject"
            onChange={(e) => setSubject(e.target.value)}
            required={true}
            padding={FormPadding}
          />
          <TextArea
            type="textarea"
            name="message"
            id={messageId}
            label="Message"
            rows="5"
            maxLength="400"
            required={true}
            padding={FormPadding}
            paddingBlockEnd={"25px"}
            onChange={(e) => setMessage(e.target.value)}
          />
          <CharRemaining data-char={lowCharacters}>
            {charactersRemaining} {pluralize("character", charactersRemaining)}{" "}
            remaining
          </CharRemaining>
          <Button type="submit" disabled={disableSubmit} block="true">
            Submit
          </Button>
        </Form>
      </FormWrapper>
    </>
  );
};

const MessageSent = styled.div`
  display: none;

  &[data-sent="true"] {
    display: grid;
    animation: ${fadeIn} 0.5s ease-in-out;
    display: grid;
    grid-template-columns: 50px 1fr;
    column-gap: 20px;
    align-items: center;
    padding-block-start: clamp(1rem, 2vw, 2rem);

    div > svg {
      color: var(--color-green);
    }

    div > p {
      font-size: 1.2em;
    }
  }
`;

const Form = styled.form`
  position: relative;
  display: block;

  &[data-sent="true"] {
    animation: ${fadeOut} 200ms ease-in-out;
    display: none;
  }
`;

const FormWrapper = styled.div`
  max-width: 500px;
  margin-block-start: 1rem;
`;

const FormNameGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 20px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr 1fr;
  }
`;

const CharRemaining = styled.div`
  color: var(--color-gray-900);
  font-size: 0.8em;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(-15px, -77px);

  &[data-char="true"] {
    color: var(--color-urgent);
  }
`;

const TextArea = styled(Input)`
  resize: vertical;
  margin-block-end: 30px !important;
`;

export default ContactForm;
