import { useEffect, useState } from "react";
import styled from "styled-components";

// Data
import { useCollectionUpdate } from "@/context/adminCollectionContext";

// Helpers
import formatDate from "@/utils/formatDate";
import { formatWorksLabel } from "@/utils/helpers/collectionHelpers";

const HeaderSub = ({
  id,
  newStatus,
  liveStatus,
  numberOfWorks,
  createdAt,
  dispatch,
}) => {
  const updateCollectionData = useCollectionUpdate();
  const [liveStatusState, setLiveStatusState] = useState(liveStatus);
  // const [newStatusState, setNewStatusState] = useState(newStatus);

  // const setIniitalValues = () => {
  //   setLiveStatusState(liveStatus);
  //   setNewStatusState(newStatus);
  // };

  // useEffect(() => {
  //   setIniitalValues();
  // }, [id, liveStatus, newStatus]);

  useEffect(() => {
    setLiveStatusState(liveStatus);
  }, [liveStatus]);

  const handleStatusChange = (e) => {
    const { name, checked } = e.target;
    // update state with dispatch
    console.log("name", name);
    console.log("checked", checked);
    setLiveStatusState(checked);
    dispatch({
      type: "UPDATED_COLLECTION",
      liveStatus: liveStatusState,
    });
  };

  return (
    <Wrapper>
      <Container>
        <Label>Status</Label>
        <Info>
          <InfoText>LIVE</InfoText>
          <ToggleWrapper>
            <StyledLabel>
              <input
                type="checkbox"
                checked={liveStatus}
                name="liveStatus"
                onChange={handleStatusChange}
              />
              <Slider className="round"></Slider>
            </StyledLabel>
          </ToggleWrapper>
        </Info>
      </Container>
      <Container>
        <Label>New</Label>
        <Info>
          <InfoText>YES</InfoText>
          <ToggleWrapper>
            <StyledLabel>
              <input
                type="checkbox"
                checked={newStatus}
                name="newStatus"
                onChange={handleStatusChange}
              />
              <Slider className="round"></Slider>
            </StyledLabel>
          </ToggleWrapper>
        </Info>
      </Container>
      <Container>
        <Label>Created</Label>
        <Info>
          <InfoText>{formatDate(createdAt, "en-UK")}</InfoText>
        </Info>
      </Container>
      <Container>
        <Label>Works</Label>
        <Info>
          <InfoText>{formatWorksLabel(numberOfWorks)}</InfoText>
        </Info>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  gap: clamp(1.5rem, 3vw, 2rem);
  margin-block-start: 0.5rem;
`;

const Container = styled.div``;

const Label = styled.div`
  font-size: 0.9rem;
  color: var(--color-gray-700);
  font-weight: var(--font-weight-bold);
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const InfoText = styled.div`
  font-weight: var(--font-weight-bold);
  color: var(--color-offblack);
`;

const ToggleWrapper = styled.div``;

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;

  transform: translateY(2px);

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 1px;
    bottom: 1px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + & {
    background-color: rgba(57, 183, 55, 1);
  }

  input:focus + & {
    box-shadow: 0 0 1px rgba(57, 183, 55, 1);
  }

  input:checked + &:before {
    transform: translateX(20px);
  }

  /* Rounded sliders */
  &.round {
    border-radius: 34px;
  }

  &.round:before {
    border-radius: 50%;
  }
`;

export default HeaderSub;
