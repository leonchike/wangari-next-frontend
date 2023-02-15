import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

const useScrollToLocation = () => {
  const scrolledRef = useRef(false);
  const hashRef = useRef(null);
  const { asPath } = useRouter();

  useEffect(() => {
    const ScrollToHash = async () => {
      await new Promise((resolve) => {
        window.addEventListener("Load", resolve);
      });

      const hash = asPath.split("#")[1];
      if (hash) {
        // We want to reset if the hash has changed
        if (hashRef.current !== hash) {
          hashRef.current = hash;
          scrolledRef.current = false;
        }
        // only attempt to scroll if we haven't yet (this could have just reset above if hash changed)
        if (!scrolledRef.current) {
          const id = hash.replace("#", "");
          const element = document.getElementById(id);
          console.log(element);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            scrolledRef.current = true;
          }
        }
      }
    };
    ScrollToHash();
  }, [asPath]);
};

export default useScrollToLocation;
