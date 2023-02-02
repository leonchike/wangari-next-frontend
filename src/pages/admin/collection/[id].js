import { useRouter } from "next/router";
import styled from "styled-components";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import { PageWrapper } from "@/styles/reusableStyles";
import { CollectionProvider } from "@/context/adminCollectionContext";

import CollectionComposer from "@/components/DashCollectionComponents/CollectionComposer";

const Collection = () => {
  const router = useRouter();
  const id = router.query.id;

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <CollectionProvider>
      <AdminPageWrapper>
        <InnerWrapper>
          <CollectionComposer collectionId={id} />
        </InnerWrapper>
      </AdminPageWrapper>
    </CollectionProvider>
  );
};

const AdminPageWrapper = styled(PageWrapper)`
  padding-block-start: 2.1rem;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
`;

Collection.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Collection;
