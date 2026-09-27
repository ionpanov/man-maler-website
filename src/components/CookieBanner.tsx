import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { loadGoogleAnalytics } from "@/lib/analytics";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");

    if (!consent) setVisible(true);

    if (consent === "accepted") {
      loadGoogleAnalytics();
    }
  }, []);

  useEffect(() => {
    if (!visible) {
      document.body.style.paddingBottom = "";
      return;
    }

    const el = bannerRef.current;
    if (!el) return;

    const applyPadding = () => {
      document.body.style.paddingBottom = `${el.offsetHeight}px`;
    };

    applyPadding();

    const resizeObserver = new ResizeObserver(applyPadding);
    resizeObserver.observe(el);
    window.addEventListener("resize", applyPadding);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", applyPadding);
      document.body.style.paddingBottom = "";
    };
  }, [visible]);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    loadGoogleAnalytics();
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div ref={bannerRef} className="fixed bottom-0 left-0 w-full bg-[#1F1F1F] text-white p-6 z-50 shadow-xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-sm text-gray-200">
          We use cookies to improve your experience. Read our{" "}
          <Link to="/cookies" className="underline text-orange-400">
            cookie policy
          </Link>.
        </p>

        <div className="flex gap-3">
          <button
            onClick={rejectCookies}
            className="px-4 py-2 text-sm border border-gray-400 rounded hover:bg-gray-700 transition"
          >
            Reject
          </button>

          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-orange-500 rounded hover:bg-orange-600 transition"
          >
            Accept
          </button>
        </div>

      </div>
    </div>
  );
}