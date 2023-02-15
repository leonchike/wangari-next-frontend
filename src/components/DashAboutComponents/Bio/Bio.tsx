import { useState } from "react";
import styled from "styled-components";

//data
import { useAboutDispatch, useAboutUpdate } from "@/context/adminAboutContext";

import Input from "@/components/Input";
import { QUERIES } from "@/styles/styleConstants";

const Bio = ({ data }) => {
  const { _id, bio, instagramHandle, twitterHandle } = data;
  const dispatch = useAboutDispatch();
  const updateAboutData = useAboutUpdate();

  // form state
  const [formBio, setFormBio] = useState(bio);
  const [formInstagramHandle, setFormInstagramHandle] =
    useState(instagramHandle);
  const [formTwitterHandle, setFormTwitterHandle] = useState(twitterHandle);

  const handleUpdate = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { name, value } = e.target as typeof e.target & {
      name: string;
      value: string;
    };
    dispatch({
      type: "UPDATED_ABOUT",
      id: _id,
      [name]: value,
    });
    // API call to update data
    updateAboutData(_id, { [name]: value });
  };

  return (
    <BioWrapper>
      <Heading>Bio</Heading>
      <BioTextWrapper>
        <StyledInput
          //@ts-ignore
          type="textarea"
          name="bio"
          placeholder="Bio"
          rows="15"
          value={formBio}
          onChange={(e) => setFormBio(e.target.value)}
          onBlur={handleUpdate}
        />
      </BioTextWrapper>
      <SocialWrapper>
        <Heading>Social</Heading>
        <SocialInputWrapper>
          <StyledInput
            //@ts-ignore
            type="text"
            label="Instagram Handle"
            name="instagramHandle"
            placeholder="Instagram Handle"
            value={formInstagramHandle}
            onChange={(e) => setFormInstagramHandle(e.target.value)}
            onBlur={handleUpdate}
          />
          <StyledInput
            //@ts-ignore
            type="text"
            label="Twitter Handle"
            name="twitterHandle"
            placeholder="Twitter Handle"
            value={formTwitterHandle}
            onChange={(e) => setFormTwitterHandle(e.target.value)}
            onBlur={handleUpdate}
          />
        </SocialInputWrapper>
      </SocialWrapper>
    </BioWrapper>
  );
};

const BioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-block-start: 2rem;
`;

const Heading = styled.h2`
  font-size: 1.2rem;
`;

const BioTextWrapper = styled.div``;

const StyledInput = styled(Input)`
  width: 100%;
  margin-block-end: 1rem;
  margin-block-start: 0.5rem;
  resize: vertical;
`;

const SocialWrapper = styled.div`
  margin-block-start: 2rem;
`;

const SocialInputWrapper = styled.div`
  padding-block-start: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
  }
`;

export default Bio;
