import { useEffect, useReducer } from "react";
import styled from "styled-components";

import contactReducer, { initialState } from "@/reducer/contactReducer";
import { useContactData } from "@/hooks/useContactData";
import Message from "@/components/DashContactComponents/Message";

const Messages = () => {
  const [state, dispatch] = useReducer(contactReducer, initialState);
  const { contact, isLoading, error } = useContactData();

  useEffect(() => {
    // if contact.data is not empty, update the reducer state with the data
    if (!!contact?.data) {
      dispatch({ type: "UPDATE_MESSAGES_FROM_API", messages: contact.data });
    }
  }, [contact]);

  if (isLoading && !contact) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // If contact.data is empty, return a message
  if (!state.messages.length) {
    return (
      <section>
        <NoMessages>You do not have any messages.</NoMessages>
      </section>
    );
  }

  // sort by date
  const data = state.messages.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <Section>
      {data.map((message) => (
        <Message key={message._id} data={message} dispatch={dispatch} />
      ))}
    </Section>
  );
};

const NoMessages = styled.div`
  text-align: center;
  font-size: 1.2rem;

  transform: translateY(calc(50vh - 100px));
`;

const Section = styled.section`
  margin-block-start: calc(40 / 16 * 1rem);

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default Messages;
