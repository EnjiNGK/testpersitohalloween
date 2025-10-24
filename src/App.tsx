import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import GraphicsPage from "./pages/GraphicsPage";
import ITPage from "./pages/ITPage";
import VideoEditingPage from "./pages/VideoEditingPage";
import SocialCommitmentPage from "./pages/SocialCommitmentPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import WorkWithUsPage from "./pages/WorkWithUsPage";
import AboutPage from "./pages/AboutPage";
import SecretPage from "./pages/SecretPage";
// ...

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const updateStructuredData = () => {
      let structuredData = {};
      
      switch (pathname) {
        case '/':
          structuredData = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Singularity Dream",
            "url": "https://singularitydream.it",
            "description": "Servizi professionali di grafica, informatica e video editing a prezzi accessibili",
            "founder": {
              "@type": "Person",
              "name": "Lorenzo",
              "age": "17"
            },
            "areaServed": { "@type": "Country", "name": "Italia" },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servizi Digitali",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Servizi di Grafica", "description": "Logo design, brand identity, materiali promozionali" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Assistenza Informatica", "description": "Riparazione computer, installazione software, supporto tecnico" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Video Editing", "description": "Montaggio video, post-produzione, contenuti per social media" } }
              ]
            }
          };
          break;
        case '/graphics':
          structuredData = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Servizi di Grafica Professionale",
            "description": "Logo design, brand identity, materiali promozionali e grafica per social media",
            "provider": { "@type": "Organization", "name": "Singularity Dream" },
            "areaServed": { "@type": "Country", "name": "Italia" },
            "serviceType": "Graphic Design"
          };
          break;
        case '/it':
          structuredData = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Assistenza Informatica",
            "description": "Riparazione computer, installazione software, supporto tecnico a domicilio",
            "provider": { "@type": "Organization", "name": "Singularity Dream" },
            "areaServed": { "@type": "Country", "name": "Italia" },
            "serviceType": "Computer Repair"
          };
          break;
        case '/video-editing':
          structuredData = {
            "@context": "https://schema.org",
            "@type": "Service", 
            "name": "Video Editing Professionale",
            "description": "Montaggio video, post-produzione, editing per YouTube e social media",
            "provider": { "@type": "Organization", "name": "Singularity Dream" },
            "areaServed": { "@type": "Country", "name": "Italia" },
            "serviceType": "Video Production"
          };
          break;
      }

      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript && existingScript.id !== 'main-structured-data') {
        existingScript.remove();
      }

      if (Object.keys(structuredData).length > 0) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'page-structured-data';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    };

    updateStructuredData();
  }, [pathname]);
  
  return null;
};

const queryClient = new QueryClient();

const AppRoutes = () => (
  <>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/graphics" element={<GraphicsPage />} />
      <Route path="/it" element={<ITPage />} />
      <Route path="/video-editing" element={<VideoEditingPage />} />
      <Route path="/social-commitment" element={<SocialCommitmentPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/work-with-us" element={<WorkWithUsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/secret" element={<SecretPage />} /> {/* 👈 tieni questa riga */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>
);

const App = () => {
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add("halloween");
    localStorage.setItem("theme", "halloween");
  }, []);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);

  // Gestione musica
  useEffect(() => {
    const handleUserClick = async () => {
      if (audioRef.current && !started) {
        try {
          audioRef.current.volume = 0.05; // volume bassissimo
          await audioRef.current.play();
          setStarted(true);
        } catch (err) {
          console.warn("Riproduzione bloccata:", err);
        }
      }
    };

    document.addEventListener("click", handleUserClick);
    return () => document.removeEventListener("click", handleUserClick);
  }, [started]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <Toaster />
          <Sonner />

          {/* 🔊 Audio di Halloween */}
          <audio
            ref={audioRef}
            src="/sounds/halloweenxsingularity.mp3"
            loop
            preload="auto"
          />

          {/* 👻 Banner “clicca per la musica” */}
          {!started && (
            <div className="fixed top-0 left-0 right-0 z-50 bg-orange-950/90 text-orange-300 text-center py-2 text-sm font-semibold animate-pulse shadow-md">
              🔊 Clicca ovunque per attivare la musica di Halloween 🎃
            </div>
          )}

          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};




export default App;
