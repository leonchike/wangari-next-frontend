import { useEffect, useReducer } from "react";
import styled from "styled-components";

import { useCVData } from "@/hooks/useCVData";
import { useDataOrder } from "@/hooks/useDataOrder";
import { useCVState, useCVDispatch } from "@/context/adminCVContext";

import Education from "@/components/DashCVComponents/Education";

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

  // state.cv array ordered by state.cvOrder
  console.log(state);
  // const orderData = state.cvOrder.map((id) => {
  //   return state.cv.find((item) => item._id === id);
  // });
  // console.log(orderData);

  // // filter orderedDat for type === education
  // const educationData = orderData.filter((item) => item.type === "education");

  // // filter orderedDat for type === solo
  // const soloData = orderData.filter((item) => item.type === "solo");

  // // filter orderedDat for type === group
  // const groupData = orderData.filter((item) => item.type === "group");

  return (
    <ContentWrapper>
      <Section>
        <SectionHeadings>Education</SectionHeadings>
        <Education />
      </Section>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  margin-block-start: calc(40 / 16 * 1rem);
  margin-block-end: calc(40 / 16 * 1rem);
`;

const Section = styled.section``;

const SectionHeadings = styled.h2`
  font-size: 1.3rem;
  font-weight: var(--font-weight-bold);
`;

export default CVContent;
