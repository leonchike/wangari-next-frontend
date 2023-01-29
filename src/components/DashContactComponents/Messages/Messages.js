import styled from "styled-components";

import { useContactData } from "@/hooks/useContactData";
import Message from "@/components/DashContactComponents/Message";

const Messages = () => {
  const { contact, isLoading, error } = useContactData();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // If contact.data is empty, return a message
  if (!contact.data.length) {
    return (
      <section>
        <NoMessages>You do not have any messages.</NoMessages>
      </section>
    );
  }

  // sort by date
  const data = contact.data.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <Section>
      {data.map((message) => (
        <Message key={message._id} data={message} />
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
