
import React, { useEffect } from 'react';
import { Video, Film, Music, Scissors, Play, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/FeatureCard';
import SEOHead from '@/components/SEOHead';

const VideoEditingPage = () => {
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
        title="Video Editing Professionale | Montaggio Video HD per YouTube | Singularity Dream"
        description="Video editing professionale: montaggio video HD, editing per YouTube, post-produzione contenuti digitali. Qualità cinematografica per social media e aziende."
        keywords="video editing professionale, montaggio video HD, editing professionale YouTube, post-produzione contenuti digitali, montaggio video social media"
        canonical="https://singularitydream.it/video-editing"
      />

      {/* Hero Section with Cinematic Background */}
      <section className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative min-h-screen flex items-center">
        {/* Animated Nebula Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/3 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-red-500/30 rounded-full blur-3xl animate-float opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-orange-600/25 rounded-full blur-3xl animate-pulse-slow opacity-50"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-yellow-500/20 rounded-full blur-3xl animate-float opacity-40" style={{animationDelay: '2s'}}></div>
          
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-orange-600/10 animated-gradient"></div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute inset-0 bg-gradient-radial from-red-500/5 via-transparent to-transparent opacity-70 animate-pulse-slow"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-red-500 bg-clip-text text-transparent">
              Video Editing Professionale e Montaggio Video HD
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-3xl mx-auto mb-6 sm:mb-8 animate-slide-up px-4" style={{animationDelay: '0.3s'}}>
              <strong>Montaggio video di qualità cinematografica</strong> per YouTube, social media, eventi e progetti aziendali. 
              Trasformiamo le tue idee in contenuti coinvolgenti con <strong>editing professionale YouTube</strong> e 
              <strong> post-produzione contenuti digitali</strong> di alta qualità.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up px-4" style={{animationDelay: '0.6s'}}>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button className="primary-button-glow flex items-center justify-center gap-2 text-base sm:text-lg w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4">
                  Inizia il tuo progetto video
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 glow-text-subtle">
              Servizi di Post-Produzione Contenuti Digitali
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                I nostri <strong>servizi di video editing professionale</strong> coprono ogni aspetto della post-produzione: 
                dal <strong>montaggio video HD</strong> per contenuti YouTube alla creazione di materiali promozionali aziendali. 
                Specializziamo nell'<strong>editing professionale YouTube</strong> con tecniche avanzate di color grading, 
                sincronizzazione audio e effetti speciali per contenuti che catturano l'attenzione.
              </p>
              <p className="text-lg leading-relaxed">
                Ogni progetto di <strong>montaggio video social media</strong> è curato nei minimi dettagli per garantire 
                la massima qualità e l'ottimizzazione per ogni piattaforma. La nostra esperienza nella 
                <strong>post-produzione contenuti digitali</strong> ci permette di trasformare qualsiasi materiale grezzo 
                in contenuti professionali e coinvolgenti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in scroll-animate">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 glow-text-subtle">I Nostri Servizi Video Specializzati</h3>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-3xl mx-auto px-4">
              Soluzioni complete per ogni tipo di progetto video con editing professionale YouTube e montaggio HD.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.1s'}}>
              <FeatureCard 
                icon={Video} 
                title="Editing Professionale YouTube" 
                description="Montaggio ottimizzato per YouTube con intro, outro, transizioni fluide e grafica accattivante. Post-produzione contenuti digitali per massimizzare engagement e visualizzazioni." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.2s'}}>
              <FeatureCard 
                icon={Film} 
                title="Video Aziendali HD" 
                description="Presentazioni professionali, video promozionali e contenuti corporate di alta qualità con montaggio video HD e post-produzione cinematografica avanzata." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.3s'}}>
              <FeatureCard 
                icon={Scissors} 
                title="Montaggio Eventi Speciali" 
                description="Matrimoni, feste, conferenze: trasformiamo i tuoi momenti speciali in ricordi indimenticabili con montaggio video social media ottimizzato." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.4s'}}>
              <FeatureCard 
                icon={Music} 
                title="Audio & Sincronizzazione" 
                description="Sincronizzazione audio perfetta, colonne sonore personalizzate e effetti sonori professionali per editing professionale YouTube di qualità superiore." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.5s'}}>
              <FeatureCard 
                icon={Play} 
                title="Montaggio Video Social Media" 
                description="Contenuti ottimizzati per Instagram, TikTok, Facebook con formati specifici, durate mirate e post-produzione contenuti digitali coinvolgenti." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.6s'}}>
              <FeatureCard 
                icon={Upload} 
                title="Post-Produzione Avanzata" 
                description="Color correction, stabilizzazione, effetti speciali e ottimizzazione per ogni piattaforma con montaggio video HD di qualità cinematografica." 
              />
            </div>
          </div>

          {/* Link interni per SEO */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-3">Serve anche grafica per i tuoi video?</h3>
                <p className="text-muted-foreground mb-4">
                  Completiamo i tuoi progetti video con servizi di grafica professionale e brand identity.
                </p>
                <Link to="/graphics" className="text-primary hover:text-primary/80">
                  Servizi di grafica →
                </Link>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-3">Hai bisogno di supporto tecnico?</h3>
                <p className="text-muted-foreground mb-4">
                  Offriamo anche assistenza informatica completa per ottimizzare i tuoi device per il video editing.
                </p>
                <Link to="/it" className="text-primary hover:text-primary/80">
                  Assistenza informatica →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card-enhanced p-6 sm:p-8 md:p-12 text-center max-w-4xl mx-auto animate-fade-in scroll-animate">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 glow-text-subtle">
              Pronto a creare contenuti video straordinari?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              <strong>Inviaci il tuo materiale grezzo</strong> e lo trasformeremo in un video professionale che cattura l'attenzione 
              con il nostro editing professionale YouTube e montaggio video HD.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Link to="/contact">
                <Button className="primary-button-glow text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6">
                  Inizia il montaggio video oggi
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

export default VideoEditingPage;
