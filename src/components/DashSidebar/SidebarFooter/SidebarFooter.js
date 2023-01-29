import { useAuth } from "@/hooks/use-auth";

import UnstyledButton from "@/components/UnstyledButton";
import VisuallyHidden from "@/components/VisuallyHidden";

const SidebarFooter = () => {
  const { logout } = useAuth();

  return (
    <div>
      <UnstyledButton onClick={logout}>
        <VisuallyHidden>Log out</VisuallyHidden>
        Log out
      </UnstyledButton>
    </div>
  );
};

export default SidebarFooter;
