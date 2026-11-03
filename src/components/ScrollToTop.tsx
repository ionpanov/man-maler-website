import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const scrollToHash = () =>
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
      // Second pass covers layout shifts from the mobile menu collapsing.
      const timers = [window.setTimeout(scrollToHash, 80), window.setTimeout(scrollToHash, 450)];
      return () => timers.forEach((timer) => window.clearTimeout(timer));
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}
