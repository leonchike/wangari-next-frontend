import { useEffect } from "react";
import styled from "styled-components";

import { useCVData } from "@/hooks/useCVData";
import { useDataOrder } from "@/hooks/useDataOrder";
import { useCVState, useCVDispatch } from "@/context/adminCVContext";

import Education from "@/components/DashCVComponents/Education";
import Exhibition from "@/components/DashCVComponents/Exhibition";

const CVContent = () => {
  const state = useCVState();
  const dispatch = useCVDispatch();

  const { cvData, isLoading, error } = useCVData();
  const {
    dataOrder,
    isLoading: isLoadingOrder,
    error: errorOrder,
  } = useDataOrder();

  useEffect(() => {
    // if contact.data is not empty, update the reducer state with the data
    if (!!cvData?.data) {
      dispatch({ type: "UPDATE_CV_FROM_API", cv: cvData.data });
    }
  }, [cvData, dispatch]);

  useEffect(() => {
    // if contact.data is not empty, update the reducer state with the data
    if (!!dataOrder?.data) {
      dispatch({
        type: "UPDATE_CV_ORDER_FROM_API",
        cvOrder: dataOrder.data[0].cvOrder,
      });
    }
  }, [dataOrder, dispatch]);

  if (isLoading && !cvData && isLoadingOrder && !dataOrder) {
    return <div>Loading...</div>;
  }

  if (error || errorOrder) {
    return <div>Error occured with using cvData API</div>;
  }

  if (!state) {
    return <div>Loading...</div>;
  }

  return (
    <ContentWrapper>
      <Section>
        <SectionHeadings>Education</SectionHeadings>
        <Education />
      </Section>
      <Section>
        <SectionHeadings>Solo Exhibition</SectionHeadings>
        <Exhibition type="solo" />
      </Section>
      <Section>
        <SectionHeadings>Group Exhibition</SectionHeadings>
        <Exhibition type="group" />
      </Section>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  margin-block-start: calc(40 / 16 * 1rem);
  margin-block-end: calc(40 / 16 * 1rem);
`;

const Section = styled.section`
  margin-block-end: calc(40 / 16 * 1rem);
`;

const SectionHeadings = styled.h2`
  font-size: 1.3rem;
  font-weight: var(--font-weight-bold);
`;

export default CVContent;
