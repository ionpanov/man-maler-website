import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

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
import ScrollToTop from "@/components/ScrollToTop";

import AnalyticsTracker from "@/components/AnalyticsTracker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Sonner />

        <I18nProvider>
          <BrowserRouter>
            <ScrollToTop />
            <AnalyticsTracker />
            <LocalBusinessSchema />

            <div className="flex flex-col min-h-screen">

              <Header />

              <main className="flex flex-col flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/ydelser" element={<Services />} />
                  <Route path="/referencer" element={<Projects />} />
                  <Route path="/om-os" element={<About />} />
                  <Route path="/kontakt" element={<Contact />} />
                  <Route path="/maler-koebenhavn" element={<MalerKobenhavn />} />
                  <Route path="/maler-roskilde" element={<MalerRoskilde />} />
                  <Route path="/omraader" element={<Omraader />} />
                  <Route path="/maler-ballerup" element={<MalerBallerup />} />
                  <Route path="/maler-frederiksberg" element={<MalerFrederiksberg />} />
                  <Route path="/maler-hvidovre" element={<MalerHvidovre />} />
                  <Route path="/maler-rodovre" element={<MalerRodovre />} />
                  <Route path="/maler-herlev" element={<MalerHerlev />} />
                  <Route path="/maler-glostrup" element={<MalerGlostrup />} />
                  <Route path="/maler-taastrup" element={<MalerTaastrup />} />
                  <Route path="/maler-albertslund" element={<MalerAlbertslund />} />
                  <Route path="/maler-ishoj" element={<MalerIshoj />} />
                  <Route path="/maler-brondby" element={<MalerBrondby />} />
                  <Route path="/maler-lyngby" element={<MalerLyngby />} />
                  <Route path="/maler-gentofte" element={<MalerGentofte />} />
                  <Route path="/maler-greve" element={<MalerGreve />} />
                  <Route path="/maler-koge" element={<MalerKoge />} />
                  <Route path="/maler-hillerod" element={<MalerHillerod />} />
                  <Route path="/maler-helsingor" element={<MalerHelsingor />} />
                  <Route path="/maler-naestved" element={<MalerNaestved />} />
                  <Route path="/maler-hedehusene" element={<MalerHedehusene />} />
                  <Route path="/vilkar" element={<Terms />} />
                  <Route path="/privatliv" element={<Privacy />} />
                  <Route path="/cookies" element={<Cookies />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>

              <Footer />
              <CookieBanner />

            </div>

          </BrowserRouter>
        </I18nProvider>

      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;