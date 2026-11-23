import { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { EN_ROUTES } from "@/lib/enRoutes";

/**
 * Serves the Danish or English version of a page from two separate URLs and keeps the DA/EN toggle in sync:
 * switching language moves the visitor to the matching URL.
 */
export default function BilingualRoute({ daPath, da, en }: { daPath: string; da: ReactNode; en: ReactNode }) {
  const { lang } = useI18n();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const englishRoute = pathname.startsWith("/en/");

  useEffect(() => {
    if (lang === "en" && !englishRoute) navigate(EN_ROUTES[daPath], { replace: true });
    if (lang === "da" && englishRoute) navigate(daPath, { replace: true });
  }, [lang, englishRoute, daPath, navigate]);

  return <>{englishRoute ? en : da}</>;
}
