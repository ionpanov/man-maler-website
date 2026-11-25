import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider } from "@/lib/i18n";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

import Index from "./pages/Index";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import MalerKobenhavn from "./pages/MalerKobenhavn";
import MalerRoskilde from "./pages/MalerRoskilde";
import Omraader from "./pages/Omraader";
import MalerBallerup from "./pages/MalerBallerup";
import MalerFrederiksberg from "./pages/MalerFrederiksberg";
import MalerHvidovre from "./pages/MalerHvidovre";
import MalerRodovre from "./pages/MalerRodovre";
import MalerHerlev from "./pages/MalerHerlev";
import MalerGlostrup from "./pages/MalerGlostrup";
import MalerTaastrup from "./pages/MalerTaastrup";
import MalerAlbertslund from "./pages/MalerAlbertslund";
import MalerIshoj from "./pages/MalerIshoj";
import MalerBrondby from "./pages/MalerBrondby";
import MalerLyngby from "./pages/MalerLyngby";
import MalerGentofte from "./pages/MalerGentofte";
import MalerGreve from "./pages/MalerGreve";
import MalerKoge from "./pages/MalerKoge";
import MalerHillerod from "./pages/MalerHillerod";
import MalerHelsingor from "./pages/MalerHelsingor";
import MalerNaestved from "./pages/MalerNaestved";
import MalerHedehusene from "./pages/MalerHedehusene";
import ServiceIndoor from "./pages/ServiceIndoor";
import ServiceFacade from "./pages/ServiceFacade";
import ServiceRenovation from "./pages/ServiceRenovation";
import ServiceCommercial from "./pages/ServiceCommercial";
import ServiceFlexible from "./pages/ServiceFlexible";
import PagePriser from "./pages/PagePriser";
import BilingualRoute from "./components/BilingualRoute";
import ServiceIndoorEn from "./pages/ServiceIndoorEn";
import MalerKobenhavnEn from "./pages/MalerKobenhavnEn";
import MalerFrederiksbergEn from "./pages/MalerFrederiksbergEn";
import FaqPageEn from "./pages/FaqPageEn";
import ServiceFacadeEn from "./pages/ServiceFacadeEn";
import ServiceRenovationEn from "./pages/ServiceRenovationEn";
import ServiceCommercialEn from "./pages/ServiceCommercialEn";
import ServiceFlexibleEn from "./pages/ServiceFlexibleEn";
import OmraaderEn from "./pages/OmraaderEn";
import MalerRoskildeEn from "./pages/MalerRoskildeEn";
import MalerBallerupEn from "./pages/MalerBallerupEn";
import MalerHvidovreEn from "./pages/MalerHvidovreEn";
import MalerRodovreEn from "./pages/MalerRodovreEn";
import MalerHerlevEn from "./pages/MalerHerlevEn";
import MalerGlostrupEn from "./pages/MalerGlostrupEn";
import MalerTaastrupEn from "./pages/MalerTaastrupEn";
import MalerAlbertslundEn from "./pages/MalerAlbertslundEn";
import MalerIshojEn from "./pages/MalerIshojEn";
import MalerBrondbyEn from "./pages/MalerBrondbyEn";
import MalerLyngbyEn from "./pages/MalerLyngbyEn";
import MalerGentofteEn from "./pages/MalerGentofteEn";
import MalerGreveEn from "./pages/MalerGreveEn";
import MalerKogeEn from "./pages/MalerKogeEn";
import MalerHillerodEn from "./pages/MalerHillerodEn";
import MalerHelsingorEn from "./pages/MalerHelsingorEn";
import MalerNaestvedEn from "./pages/MalerNaestvedEn";
import MalerHedehuseneEn from "./pages/MalerHedehuseneEn";


import FaqPage from "./pages/FaqPage";
import PageB2B from "./pages/PageB2B";
import ScrollToTop from "@/components/ScrollToTop";

import AnalyticsTracker from "@/components/AnalyticsTracker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner />

        <I18nProvider>
            <ScrollToTop />
            <AnalyticsTracker />
            <LocalBusinessSchema />

            <div className="flex flex-col min-h-screen">

              <Header />

              <main className="flex flex-col flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/ydelser" element={<Services />} />
                  <Route path="/ydelser/indendoers-maling" element={<BilingualRoute daPath="/ydelser/indendoers-maling" da={<ServiceIndoor />} en={<ServiceIndoorEn />} />} />
                  <Route path="/en/services/interior-painting" element={<BilingualRoute daPath="/ydelser/indendoers-maling" da={<ServiceIndoor />} en={<ServiceIndoorEn />} />} />
                  <Route path="/ydelser/facademaling" element={<BilingualRoute daPath="/ydelser/facademaling" da={<ServiceFacade />} en={<ServiceFacadeEn />} />} />
                  <Route path="/en/services/facade-painting" element={<BilingualRoute daPath="/ydelser/facademaling" da={<ServiceFacade />} en={<ServiceFacadeEn />} />} />
                  <Route path="/ydelser/renovering" element={<BilingualRoute daPath="/ydelser/renovering" da={<ServiceRenovation />} en={<ServiceRenovationEn />} />} />
                  <Route path="/en/services/renovation" element={<BilingualRoute daPath="/ydelser/renovering" da={<ServiceRenovation />} en={<ServiceRenovationEn />} />} />
                  <Route path="/ydelser/erhvervsmaling" element={<BilingualRoute daPath="/ydelser/erhvervsmaling" da={<ServiceCommercial />} en={<ServiceCommercialEn />} />} />
                  <Route path="/en/services/commercial-painting" element={<BilingualRoute daPath="/ydelser/erhvervsmaling" da={<ServiceCommercial />} en={<ServiceCommercialEn />} />} />
                  <Route path="/ydelser/maler-aften-weekend" element={<BilingualRoute daPath="/ydelser/maler-aften-weekend" da={<ServiceFlexible />} en={<ServiceFlexibleEn />} />} />
                  <Route path="/en/services/evenings-weekends" element={<BilingualRoute daPath="/ydelser/maler-aften-weekend" da={<ServiceFlexible />} en={<ServiceFlexibleEn />} />} />
                  <Route path="/priser" element={<BilingualRoute daPath="/priser" da={<PagePriser />} en={<PagePriser lang="en" />} />} />
                  <Route path="/en/prices" element={<BilingualRoute daPath="/priser" da={<PagePriser />} en={<PagePriser lang="en" />} />} />
                  <Route path="/ofte-stillede-spoergsmaal" element={<BilingualRoute daPath="/ofte-stillede-spoergsmaal" da={<FaqPage />} en={<FaqPageEn />} />} />
                  <Route path="/en/faq" element={<BilingualRoute daPath="/ofte-stillede-spoergsmaal" da={<FaqPage />} en={<FaqPageEn />} />} />
                  <Route path="/b2b" element={<PageB2B />} />
                  <Route path="/en/b2b" element={<PageB2B />} />
                  <Route path="/referencer" element={<Projects />} />
                  <Route path="/om-os" element={<About />} />
                  <Route path="/kontakt" element={<Contact />} />
                  <Route path="/maler-koebenhavn" element={<BilingualRoute daPath="/maler-koebenhavn" da={<MalerKobenhavn />} en={<MalerKobenhavnEn />} />} />
                  <Route path="/en/painter-copenhagen" element={<BilingualRoute daPath="/maler-koebenhavn" da={<MalerKobenhavn />} en={<MalerKobenhavnEn />} />} />
                  <Route path="/maler-roskilde" element={<BilingualRoute daPath="/maler-roskilde" da={<MalerRoskilde />} en={<MalerRoskildeEn />} />} />
                  <Route path="/en/painter-roskilde" element={<BilingualRoute daPath="/maler-roskilde" da={<MalerRoskilde />} en={<MalerRoskildeEn />} />} />
                  <Route path="/omraader" element={<BilingualRoute daPath="/omraader" da={<Omraader />} en={<OmraaderEn />} />} />
                  <Route path="/en/areas" element={<BilingualRoute daPath="/omraader" da={<Omraader />} en={<OmraaderEn />} />} />
                  <Route path="/maler-ballerup" element={<BilingualRoute daPath="/maler-ballerup" da={<MalerBallerup />} en={<MalerBallerupEn />} />} />
                  <Route path="/en/painter-ballerup" element={<BilingualRoute daPath="/maler-ballerup" da={<MalerBallerup />} en={<MalerBallerupEn />} />} />
                  <Route path="/maler-frederiksberg" element={<BilingualRoute daPath="/maler-frederiksberg" da={<MalerFrederiksberg />} en={<MalerFrederiksbergEn />} />} />
                  <Route path="/en/painter-frederiksberg" element={<BilingualRoute daPath="/maler-frederiksberg" da={<MalerFrederiksberg />} en={<MalerFrederiksbergEn />} />} />
                  <Route path="/maler-hvidovre" element={<BilingualRoute daPath="/maler-hvidovre" da={<MalerHvidovre />} en={<MalerHvidovreEn />} />} />
                  <Route path="/en/painter-hvidovre" element={<BilingualRoute daPath="/maler-hvidovre" da={<MalerHvidovre />} en={<MalerHvidovreEn />} />} />
                  <Route path="/maler-rodovre" element={<BilingualRoute daPath="/maler-rodovre" da={<MalerRodovre />} en={<MalerRodovreEn />} />} />
                  <Route path="/en/painter-rodovre" element={<BilingualRoute daPath="/maler-rodovre" da={<MalerRodovre />} en={<MalerRodovreEn />} />} />
                  <Route path="/maler-herlev" element={<BilingualRoute daPath="/maler-herlev" da={<MalerHerlev />} en={<MalerHerlevEn />} />} />
                  <Route path="/en/painter-herlev" element={<BilingualRoute daPath="/maler-herlev" da={<MalerHerlev />} en={<MalerHerlevEn />} />} />
                  <Route path="/maler-glostrup" element={<BilingualRoute daPath="/maler-glostrup" da={<MalerGlostrup />} en={<MalerGlostrupEn />} />} />
                  <Route path="/en/painter-glostrup" element={<BilingualRoute daPath="/maler-glostrup" da={<MalerGlostrup />} en={<MalerGlostrupEn />} />} />
                  <Route path="/maler-taastrup" element={<BilingualRoute daPath="/maler-taastrup" da={<MalerTaastrup />} en={<MalerTaastrupEn />} />} />
                  <Route path="/en/painter-taastrup" element={<BilingualRoute daPath="/maler-taastrup" da={<MalerTaastrup />} en={<MalerTaastrupEn />} />} />
                  <Route path="/maler-albertslund" element={<BilingualRoute daPath="/maler-albertslund" da={<MalerAlbertslund />} en={<MalerAlbertslundEn />} />} />
                  <Route path="/en/painter-albertslund" element={<BilingualRoute daPath="/maler-albertslund" da={<MalerAlbertslund />} en={<MalerAlbertslundEn />} />} />
                  <Route path="/maler-ishoj" element={<BilingualRoute daPath="/maler-ishoj" da={<MalerIshoj />} en={<MalerIshojEn />} />} />
                  <Route path="/en/painter-ishoj" element={<BilingualRoute daPath="/maler-ishoj" da={<MalerIshoj />} en={<MalerIshojEn />} />} />
                  <Route path="/maler-brondby" element={<BilingualRoute daPath="/maler-brondby" da={<MalerBrondby />} en={<MalerBrondbyEn />} />} />
                  <Route path="/en/painter-brondby" element={<BilingualRoute daPath="/maler-brondby" da={<MalerBrondby />} en={<MalerBrondbyEn />} />} />
                  <Route path="/maler-lyngby" element={<BilingualRoute daPath="/maler-lyngby" da={<MalerLyngby />} en={<MalerLyngbyEn />} />} />
                  <Route path="/en/painter-lyngby" element={<BilingualRoute daPath="/maler-lyngby" da={<MalerLyngby />} en={<MalerLyngbyEn />} />} />
                  <Route path="/maler-gentofte" element={<BilingualRoute daPath="/maler-gentofte" da={<MalerGentofte />} en={<MalerGentofteEn />} />} />
                  <Route path="/en/painter-gentofte" element={<BilingualRoute daPath="/maler-gentofte" da={<MalerGentofte />} en={<MalerGentofteEn />} />} />
                  <Route path="/maler-greve" element={<BilingualRoute daPath="/maler-greve" da={<MalerGreve />} en={<MalerGreveEn />} />} />
                  <Route path="/en/painter-greve" element={<BilingualRoute daPath="/maler-greve" da={<MalerGreve />} en={<MalerGreveEn />} />} />
                  <Route path="/maler-koge" element={<BilingualRoute daPath="/maler-koge" da={<MalerKoge />} en={<MalerKogeEn />} />} />
                  <Route path="/en/painter-koge" element={<BilingualRoute daPath="/maler-koge" da={<MalerKoge />} en={<MalerKogeEn />} />} />
                  <Route path="/maler-hillerod" element={<BilingualRoute daPath="/maler-hillerod" da={<MalerHillerod />} en={<MalerHillerodEn />} />} />
                  <Route path="/en/painter-hillerod" element={<BilingualRoute daPath="/maler-hillerod" da={<MalerHillerod />} en={<MalerHillerodEn />} />} />
                  <Route path="/maler-helsingor" element={<BilingualRoute daPath="/maler-helsingor" da={<MalerHelsingor />} en={<MalerHelsingorEn />} />} />
                  <Route path="/en/painter-helsingor" element={<BilingualRoute daPath="/maler-helsingor" da={<MalerHelsingor />} en={<MalerHelsingorEn />} />} />
                  <Route path="/maler-naestved" element={<BilingualRoute daPath="/maler-naestved" da={<MalerNaestved />} en={<MalerNaestvedEn />} />} />
                  <Route path="/en/painter-naestved" element={<BilingualRoute daPath="/maler-naestved" da={<MalerNaestved />} en={<MalerNaestvedEn />} />} />
                  <Route path="/maler-hedehusene" element={<BilingualRoute daPath="/maler-hedehusene" da={<MalerHedehusene />} en={<MalerHedehuseneEn />} />} />
                  <Route path="/en/painter-hedehusene" element={<BilingualRoute daPath="/maler-hedehusene" da={<MalerHedehusene />} en={<MalerHedehuseneEn />} />} />
                  <Route path="/vilkar" element={<Terms />} />
                  <Route path="/privatliv" element={<Privacy />} />
                  <Route path="/cookies" element={<Cookies />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>

              <Footer />
              <CookieBanner />

            </div>

        </I18nProvider>

      </TooltipProvider>
  </QueryClientProvider>
);

export default App;
