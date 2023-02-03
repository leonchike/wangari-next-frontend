import Link from "next/link";
import styled from "styled-components";
import pluralize from "pluralize";

import Icon from "@/components/Icon";

const Tile = ({ type, data }) => {
  const urlContructor = (type) => {
    if (type === "collection") {
      return `/admin/collection/${data._id}`;
    }
    if (type === "page") {
      return `admin/page/${data.page}`;
    }
  };

  return (
    <Link href={urlContructor(type)} role="link">
      <Article>
        {type === "collection" && <Icon id="collection" size={28} />}
        {type === "page" && <Icon id="page" size={28} />}
        <Name>{data.name}</Name>
        {type === "collection" && (
          <Details>
            <Works>
              Works: {data.numberOfWorks}{" "}
              {pluralize("Masterpiece", data.numberOfWorks)}
            </Works>
            <Data>
              <Status data-status={data.liveStatus}>
                Status: <span>{data.liveStatus ? "Live" : "Offline"}</span>
              </Status>
              <Status data-live={data.newStatus}>
                New: <span>{data.newStatus ? "Yes" : "No"}</span>
              </Status>
            </Data>
          </Details>
        )}
        {type === "page" && <div>Last updated:</div>}
      </Article>
    </Link>
  );
};

const Article = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: var(--box-shadow);
  padding: 1.5rem;
  min-height: 145px;
  border: 3px solid transparent;
  color: var(--color-offblack);

  &:hover,
  &focus {
    border: 3px solid var(--color-offblack);
  }
`;

const Name = styled.h3`
  font-size: 1.2rem;
  margin-block-start: 0.5rem;
  margin-block-end: 0.2rem;
  line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Details = styled.div``;

const Works = styled.div`
  font-size: 1rem;
  font-weight: var(--font-weight-bold);
`;

const Data = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  margin-block-start: 1rem;
`;

const Status = styled.div`
  font-weight: var(--font-weight-bold);

  &[data-status="true"],
  &[data-live="true"] {
    span {
      color: var(--color-green);
    }
  }

  &[data-status="false"],
  &[data-live="false"] {
    span {
      color: var(--color-orange);
    }
  }
`;

export default Tile;
