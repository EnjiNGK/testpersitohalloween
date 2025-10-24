import React, { useEffect } from 'react';
import { ArrowRight, Pen, Monitor, Video, ExternalLink } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/FeatureCard';
import ImmersiveBackground from '@/components/ImmersiveBackground';
import SEOHead from '@/components/SEOHead';
import Pumpkin from "@/components/Pumpkin";
import { forceSecretPumpkinId } from "@/utils/secret";

const HomePage = () => {
  // ✅ Forza la zucca segreta
  useEffect(() => {
    forceSecretPumpkinId("hero-pumpkin-3"); // questa sarà la zucca segreta
  }, []);

  const navigate = useNavigate();

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="overflow-hidden">
      <SEOHead 
        title="Singularity Dream | Servizi digitali professionali accessibili in Italia"
        description="Grafica personalizzata, assistenza informatica e video editing di qualità. Servizi digitali professionali a prezzi accessibili in tutta Italia."
        keywords="grafica personalizzata, assistenza informatica a domicilio, video editing professionale, servizi digitali, branding aziendale, designer freelance, tecnico informatico remoto"
        canonical="https://singularitydream.it/"
      />

      {/* Hero Section with SEO optimized content */}
      <section className="pt-32 pb-20 relative min-h-screen flex items-center">
        <ImmersiveBackground variant="default" showParticles={true} showNoise={true} />

        {/* 🎃 Decorazioni Halloween nella Hero */}
        <div className="absolute inset-0 pointer-events-none">
          <Pumpkin id="hero-pumpkin-1" size={40} style={{ position: "absolute", top: "15%", left: "10%" }} />
          <Pumpkin id="hero-pumpkin-2" size={50} style={{ position: "absolute", bottom: "10%", right: "15%" }} />
          <Pumpkin id="hero-pumpkin-3" size={30} style={{ position: "absolute", top: "30%", right: "25%" }} />
          <Pumpkin id="hero-pumpkin-4" size={34} style={{ position: "absolute", bottom: "25%", left: "35%" }} />
        </div>

        {/* Hero Text e CTA */}
        <div className="section-container relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="hero-text mb-6">
              Singularity Dream: Servizi Digitali Professionali e Accessibili
            </h1>
            
            <p className="subtitle-text mb-8 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <strong>Grafica personalizzata, assistenza informatic e video editing</strong> di alta qualità 
              a prezzi accessibili. Trasformiamo le tue idee in realtà digitale con competenza e creatività, 
              offrendo servizi professionali in tutta Italia con supporto dedicato e soluzioni su misura per 
              privati e aziende.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up" style={{animationDelay: '0.6s'}}>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button className="magnetic-button primary-button-glow flex items-center justify-center gap-2 text-lg w-full sm:w-auto">
                  Contattaci per un preventivo gratuito <ArrowRight size={18} />
                </Button>
              </Link>
              <Button 
                onClick={scrollToServices}
                variant="outline" 
                className="glass-button text-foreground border-border hover:bg-accent/10 hover:border-accent hover:text-foreground text-lg w-full sm:w-auto magnetic-button"
              >

                Scopri tutti i nostri servizi digitali
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 relative">
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Chi è Singularity Dream e cosa offriamo
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                <strong>Singularity Dream</strong> è il progetto professionale di <strong>Lorenzo, 18 anni</strong>, specialista in <strong>servizi digitali accessibili di qualità e grafica</strong> e di <strong>Luca Montalbetti, 19 anni</strong>, appassionato di grafica e montaggio video con formazione nel settore.

La nostra missione è rendere la tecnologia e il design alla portata di tutti, combinando competenza tecnica e creatività per offrire soluzioni personalizzate di <strong>branding aziendale</strong> e <strong>supporto informatico per aziende</strong>.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Operiamo in <strong>tutta Italia</strong> con prestazioni occasionali regolari, garantendo 
                <strong> assistenza anche a domicilio</strong> per servizi informatici,  
                <strong> grafica personalizzata  </strong> per brand e attività, e <strong>video editing professionale</strong> per content creator e aziende. 
                Ogni progetto è curato nei minimi dettagli per garantire risultati eccellenti in 
                <strong> visual identity</strong> e <strong>post-produzione contenuti digitali</strong>.
              </p>
              <p className="text-lg leading-relaxed">
                Crediamo che la <strong>tecnologia debba essere strumento di crescita e inclusione</strong>. 
                Per questo parte dei nostri ricavi viene destinata a iniziative benefiche, perché ogni servizio 
                che offriamo contribuisce a costruire un futuro migliore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with internal links */}
      <section id="services-section" className="py-20 relative">
        {/* 🎃 Zucche decorative tra i servizi */}
<div className="absolute inset-0 pointer-events-none">
  <Pumpkin id="services-pumpkin-1" size={28} style={{ position: "absolute", top: "10%", left: "20%" }} />
  <Pumpkin id="services-pumpkin-2" size={24} style={{ position: "absolute", bottom: "15%", right: "30%" }} />
  <Pumpkin id="services-pumpkin-3" size={36} style={{ position: "absolute", top: "40%", right: "10%" }} />
  {/* 🎃 Questa è la zucca segreta cliccabile */}
<Link 
  to="/pagina-segreta"  // <-- deve corrispondere al path della route
  className="absolute"
  style={{ bottom: "5%", left: "50%" }}
>
  <Pumpkin
    id="secret-pumpkin"
    size={42}
    clickable={true}
  />
</Link>



</div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse opacity-30"></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="text-center mb-16 animate-fade-in scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">I Nostri Servizi Digitali Professionali</h2>
            <p className="subtitle-text">
              <strong>Soluzioni complete</strong> per privati e aziende: dalla grafica al supporto tecnico, 
              dalla creazione video all'assistenza informatica. Qualità professionale a prezzi accessibili.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="animate-slide-up scroll-animate interactive-card" style={{animationDelay: '0.1s'}}>
              <Link to="/graphics" className="block h-full">
                <FeatureCard 
                  icon={Pen} 
                  title="Servizi di Grafica Professionale" 
                  description="Logo design, identità visiva, banner per social media, locandine, curriculum vitae e materiali promozionali. Ogni progetto è personalizzato e curato nei minimi dettagli per rappresentare al meglio la tua attività." 
                />
              </Link>
            </div>
            <div className="animate-slide-up scroll-animate interactive-card" style={{animationDelay: '0.2s'}}>
              <Link to="/it" className="block h-full">
                <FeatureCard 
                  icon={Monitor} 
                  title="Assistenza Informatica a Domicilio" 
                  description="Consulenza e assistenza informatica, risoluzione problemi, supporto remoto e in loco, installazione software, recupero dati e ottimizzazione sistemi per tutte le tue esigenze tecnologiche." 
                />
              </Link>
            </div>
            <div className="animate-slide-up scroll-animate interactive-card" style={{animationDelay: '0.3s'}}>
              <Link to="/video-editing" className="block h-full">
                <FeatureCard 
                  icon={Video} 
                  title="Video Editing e Post-Produzione" 
                  description="Montaggio video professionale per YouTube, vlog, eventi, social media e aziende. Editing completo con transizioni, effetti speciali, color grading, titoli e sincronizzazione audio di qualità cinematografica." 
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative">
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground animate-fade-in scroll-animate">
              Perché Scegliere Singularity Dream per i Tuoi Progetti Digitali
            </h2>
            <p className="subtitle-text max-w-3xl mx-auto">
              <strong>Qualità professionale, prezzi accessibili e un approccio personale</strong> che fa la differenza. 
              Ecco i vantaggi concreti di lavorare con noi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            <div className="glass-card-enhanced p-6 hover-lift-glow animate-slide-up scroll-animate interactive-card" style={{animationDelay: '0.1s'}}>
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 number-glow">
                <span className="text-primary text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Qualità Professionale Garantita</h3>
              <p className="text-muted-foreground">Servizi di livello professionale con cura maniacale per ogni dettaglio. Utilizziamo software e tecniche all'avanguardia per risultati eccellenti.</p>
            </div>
            
            <div className="glass-card-enhanced p-6 hover-lift-glow animate-slide-up scroll-animate interactive-card" style={{animationDelay: '0.2s'}}>
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 number-glow">
                <span className="text-primary text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Prezzi Accessibili e Trasparenti</h3>
              <p className="text-muted-foreground">Tariffe competitive e chiare, senza costi nascosti. Rendiamo i servizi digitali professionali accessibili a tutti, da privati a piccole imprese.</p>
            </div>
            
            <div className="glass-card-enhanced p-6 hover-lift-glow animate-slide-up scroll-animate interactive-card" style={{animationDelay: '0.3s'}}>
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 number-glow">
                <span className="text-primary text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Personalizzazione Totale</h3>
              <p className="text-muted-foreground">Ogni progetto è unico. Ascoltiamo le tue esigenze e creiamo soluzioni su misura che rispecchiano perfettamente la tua visione e i tuoi obiettivi.</p>
            </div>
            
            <div className="glass-card-enhanced p-6 hover-lift-glow animate-slide-up scroll-animate interactive-card" style={{animationDelay: '0.4s'}}>
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 number-glow">
                <span className="text-primary text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Supporto Dedicato e Continuo</h3>
              <p className="text-muted-foreground">Assistenza costante prima, durante e dopo il progetto. Siamo sempre disponibili per modifiche, aggiornamenti e supporto tecnico quando ne hai bisogno.</p>
            </div>
          </div>
        </div>
      </section>

      {/* External Link Section for SEO */}
      <section className="py-16 relative">
        <div className="section-container relative z-10">
          <div className="glass-card-enhanced p-8 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Affidabilità e Trasparenza Verificata</h2>
            <p className="text-muted-foreground mb-6">
              La nostra professionalità è riconosciuta e certificata. Puoi verificare la qualità dei nostri servizi e 
              leggere le recensioni dei nostri clienti soddisfatti su Trustpilot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://it.trustpilot.com/review/singularitydream.it" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors px-6 py-3 bg-primary/10 rounded-lg hover:bg-primary/20"
              >
                Leggi le recensioni su Trustpilot <ExternalLink size={16} />
              </a>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <a href="tel:+393488664662" className="hover:text-primary transition-colors">
                  📞 +39 348 866 4662
                </a>
                <a href="mailto:info@singularitydream.it" className="hover:text-primary transition-colors">
                  ✉️ Contattaci via email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with internal links */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="section-container relative z-10">
          <div className="glass-card-enhanced p-8 md:p-12 text-center max-w-4xl mx-auto animate-fade-in scroll-animate interactive-card">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Inizia Oggi il Tuo Progetto Digitale
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              <strong>Contattaci per una consulenza gratuita</strong> e scopri come possiamo trasformare 
              le tue idee in successi concreti. Preventivi personalizzati e senza impegno.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/graphics">
                <Button className="magnetic-button primary-button-glow text-lg px-6 py-5">
                  Richiedi grafica personalizzata
                </Button>
              </Link>
              <Link to="/it">
                <Button className="magnetic-button primary-button-glow text-lg px-6 py-5">
                  Assistenza informatica immediata
                </Button>
              </Link>
              <Link to="/video-editing">
                <Button className="magnetic-button primary-button-glow text-lg px-6 py-5">
                  Servizi video editing professionali
                </Button>
              </Link>
            </div>
            <div className="mt-8 pt-6 border-t border-border/20">
              <p className="text-sm text-muted-foreground">
                Servizi disponibili in tutta Italia • Preventivi gratuiti • 
                <Link to="/contact" className="text-primary hover:text-primary/80 ml-1">
                  Contattaci subito
                </Link>
              </p>
               <p className="text-sm text-gray-400 pt-6 text-center">
  📍 <strong>Visita il nostro profilo Google Business</strong><br />
  <a
    href="https://share.google/z4vbNP75feo8vM9kS"
    target="_blank"
    rel="noopener noreferrer"
    className="text-nexrank-violet underline hover:text-nexrank-violet/80 transition"
  >
    Clicca qui per il profilo Google
  </a>
</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
