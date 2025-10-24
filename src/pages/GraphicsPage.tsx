
import React, { useEffect } from 'react';
import { Palette, Pen, Image, FileText, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/FeatureCard';
import SEOHead from '@/components/SEOHead';

const GraphicsPage = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      <SEOHead 
        title="Servizi di Grafica Professionale | Logo Design e Brand Identity | Singularity Dream"
        description="Servizi di grafica professionale: logo design, brand identity, materiali promozionali, social media graphics. Qualità e creatività a prezzi accessibili in tutta Italia."
        keywords="grafica professionale, logo design, brand identity, branding aziendale, designer freelance, visual identity, graphic design per social, materiali promozionali"
        canonical="https://singularitydream.it/graphics"
      />

      <section className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/30 rounded-full blur-3xl animate-float opacity-60"></div>
          <div className="absolute top-1/3 right-1/4 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-purple-600/25 rounded-full blur-3xl animate-pulse-slow opacity-50"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-primary/20 rounded-full blur-3xl animate-float opacity-40" style={{animationDelay: '2s'}}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-600/10 animated-gradient"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-70 animate-pulse-slow"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Servizi di Grafica Professionale e Logo Design
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-3xl mx-auto mb-6 sm:mb-8 animate-slide-up px-4" style={{animationDelay: '0.3s'}}>
              <strong>Grafica personalizzata di alta qualità</strong> per il tuo brand: dal logo design alla brand identity completa, 
              realizziamo progetti grafici professionali che valorizzano la tua immagine e comunicano efficacemente i tuoi valori.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up px-4" style={{animationDelay: '0.6s'}}>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button className="primary-button-glow flex items-center justify-center gap-2 text-base sm:text-lg w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4">
                  Richiedi Preventivo Gratuito
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contenuto SEO ottimizzato */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 glow-text-subtle">
              Designer Freelance Specializzato in Branding Aziendale
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                I nostri <strong>servizi di grafica professionale</strong> combinano creatività, competenza tecnica e 
                attenzione ai dettagli per creare progetti visivi che fanno la differenza. Specializzati in 
                <strong> logo design, brand identity e materiali promozionali</strong>, lavoriamo con privati, 
                professionisti e aziende per sviluppare la loro <strong>visual identity</strong> completa.
              </p>
              <p className="text-lg leading-relaxed">
                Ogni progetto grafico è <strong>personalizzato e studiato</strong> per rappresentare al meglio 
                la tua attività, con un approccio moderno e professionale che garantisce risultati di 
                <strong>branding aziendale</strong> di qualità superiore a prezzi accessibili. La nostra esperienza 
                nel <strong>graphic design per social</strong> e comunicazione digitale ci permette di creare 
                materiali sempre efficaci e coinvolgenti.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in scroll-animate">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 glow-text-subtle">I Nostri Servizi Grafici Specializzati</h3>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-3xl mx-auto px-4">
              Soluzioni creative complete per ogni esigenza di comunicazione visiva e brand identity professionale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.1s'}}>
              <FeatureCard 
                icon={Palette} 
                title="Logo Design Professionale" 
                description="Creazione di loghi unici, memorabili e versatili che rappresentano perfettamente la tua identità aziendale. Design moderni e timelessly per tutti i settori con visual identity distintiva." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.2s'}}>
              <FeatureCard 
                icon={Image} 
                title="Brand Identity Completa" 
                description="Sviluppo dell'identità visiva coordinata: palette colori, tipografia, pattern, biglietti da visita, carta intestata e guidelines per un branding aziendale coerente e professionale." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.3s'}}>
              <FeatureCard 
                icon={FileText} 
                title="Materiali Promozionali" 
                description="Brochure, volantini, depliant, banner pubblicitari, locandine eventi e cataloghi prodotti per promuovere efficacemente il tuo business con graphic design per social media." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.4s'}}>
              <FeatureCard 
                icon={Users} 
                title="Social Media Graphics" 
                description="Post accattivanti, copertine professionali, stories template e grafiche ottimizzate per Facebook, Instagram, LinkedIn e tutti i social network con visual identity coordinata." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.5s'}}>
              <FeatureCard 
                icon={Pen} 
                title="Curriculum Vitae Design" 
                description="CV creativi, moderni e professionali che ti aiutano a distinguerti nel mondo del lavoro. Layout personalizzati per ogni settore professionale con designer freelance dedicato." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.6s'}}>
              <FeatureCard 
                icon={Star} 
                title="Progetti Grafici Su Misura" 
                description="Soluzioni grafiche personalizzate per esigenze specifiche: packaging design, infografiche, presentazioni aziendali e progetti creativi unici di branding aziendale." 
              />
            </div>
          </div>

          {/* Link interni per SEO */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-3">Hai bisogno di video editing?</h3>
                <p className="text-muted-foreground mb-4">
                  Completiamo i tuoi progetti con servizi di video editing professionale e post-produzione.
                </p>
                <Link to="/video-editing" className="text-primary hover:text-primary/80">
                  Scopri i servizi video →
                </Link>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-3">Serve supporto informatico?</h3>
                <p className="text-muted-foreground mb-4">
                  Offriamo anche assistenza tecnica e consulenza informatica completa per il tuo business.
                </p>
                <Link to="/it" className="text-primary hover:text-primary/80">
                  Assistenza informatica →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card-enhanced p-6 sm:p-8 md:p-12 text-center max-w-4xl mx-auto animate-fade-in scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 glow-text-subtle">
              Richiedi la Tua Grafica Personalizzata
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              <strong>Preventivo gratuito e personalizzato</strong> per il tuo progetto grafico. 
              Contattaci per discutere delle tue esigenze e ricevere una proposta su misura dal nostro designer freelance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Link to="/contact">
                <Button className="primary-button-glow text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6">
                  Contattaci per il tuo progetto grafico
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <a href="tel:+393488664662" className="hover:text-primary transition-colors">
                📞 +39 348 866 4662
              </a>
              <a href="mailto:info@singularitydream.it" className="hover:text-primary transition-colors">
                ✉️ info@singularitydream.it
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicsPage;
