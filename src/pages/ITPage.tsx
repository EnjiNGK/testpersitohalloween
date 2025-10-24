
import React, { useEffect } from 'react';
import { Monitor, Wrench, Shield, Cloud, HardDrive, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/FeatureCard';
import SEOHead from '@/components/SEOHead';

const ITPage = () => {
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
        title="Assistenza Informatica Online | Riparazione Computer | Singularity Dream"
        description="Assistenza informatica professionale online: riparazione computer, installazione software, recupero dati, supporto tecnico. Servizio rapido ed efficace in tutta Italia."
        keywords="assistenza informatica online, assistenza PC online, tecnico informatico remoto, supporto informatico per aziende, riparazione computer, recupero dati"
        canonical="https://singularitydream.it/it"
      />

      <section className="pt-32 pb-20 relative min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float opacity-60"></div>
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-600/25 rounded-full blur-3xl animate-pulse-slow opacity-50"></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float opacity-40" style={{animationDelay: '2s'}}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-primary/10 animated-gradient"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent opacity-70 animate-pulse-slow"></div>
          </div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="hero-text mb-6 glow-text">
              Assistenza Informatica Professionale Online
            </h1>
            
            <p className="subtitle-text mb-8 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <strong>Consulenza, assistenza e supporto informatico</strong> per privati e aziende in tutta Italia. 
              Risolviamo i tuoi problemi tecnologici con competenza, rapidità e professionalità tramite 
              <strong> assistenza PC online</strong> e <strong>supporto informatico per aziende </strong>  completo.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up" style={{animationDelay: '0.6s'}}>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button className="primary-button-glow flex items-center justify-center gap-2 text-lg w-full sm:w-auto">
                  Richiedi Assistenza Immediata
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contenuto SEO ottimizzato */}
      <section className="py-16 relative">
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text-subtle">
              Tecnico Informatico Remoto per Supporto Completo
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                I nostri <strong>servizi di assistenza informatica online</strong> coprono ogni aspetto del supporto tecnico: 
                dalla riparazione hardware alla configurazione software, dal recupero dati alla sicurezza informatica. 
                Operiamo con <strong>assistenza PC online</strong> in tutta Italia e <strong>supporto informatico per aziende </strong> 
                per risolvere rapidamente ogni problematica tecnologica con il nostro <strong>tecnico informatico remoto</strong>.
              </p>
              <p className="text-lg leading-relaxed">
                Che tu sia un privato con un computer lento o un'azienda che necessita di consulenza specializzata, 
                offriamo <strong>soluzioni personalizzate</strong> e <strong>prezzi trasparenti</strong> per ogni esigenza informatica. 
                La nostra esperienza nell'<strong>assistenza informatica online</strong> ci permette di intervenire rapidamente 
                e risolvere problemi complessi senza necessità di interventi fisici.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow opacity-30"></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="text-center mb-16 animate-fade-in scroll-animate">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 glow-text-subtle">I Nostri Servizi IT Specializzati</h3>
            <p className="subtitle-text">
              Soluzioni tecnologiche complete per ogni esigenza informatica, dal supporto base alla consulenza avanzata con tecnico informatico remoto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.1s'}}>
              <FeatureCard 
                icon={Monitor} 
                title="Riparazione e Manutenzione Computer" 
                description="Diagnosi completa, riparazione hardware, ottimizzazione prestazioni, pulizia sistema e manutenzione preventiva per PC desktop e laptop con assistenza PC online." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.2s'}}>
              <FeatureCard 
                icon={Wrench} 
                title="Installazione Software e Sistemi" 
                description="Configurazione sistemi operativi, installazione programmi specializzati, setup applicazioni aziendali e personalizzazione ambiente di lavoro con tecnico informatico remoto." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.3s'}}>
              <FeatureCard 
                icon={Shield} 
                title="Sicurezza Informatica Avanzata" 
                description="Protezione completa da virus e malware, implementazione firewall, configurazione antivirus professionali e consulenza sicurezza dati per supporto informatico per aziende." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.4s'}}>
              <FeatureCard 
                icon={Cloud} 
                title="Backup Automatici e Cloud" 
                description="Configurazione sistemi backup sicuri, migrazione dati verso cloud, sincronizzazione multi-device e piani di disaster recovery con assistenza informatica online." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.5s'}}>
              <FeatureCard 
                icon={HardDrive} 
                title="Recupero Dati Professionale" 
                description="Recupero file da dispositivi danneggiati, ripristino dopo formattazione accidentale, salvataggio dati da hard disk compromessi con tecnico informatico remoto specializzato." 
              />
            </div>
            <div className="animate-slide-up scroll-animate" style={{animationDelay: '0.6s'}}>
              <FeatureCard 
                icon={Wifi} 
                title="Configurazione Reti e Connettività" 
                description="Setup reti domestiche e aziendali, configurazione WiFi, risoluzione problemi connessione, ottimizzazione velocità internet per supporto informatico per aziende." 
              />
            </div>
          </div>

          {/* Link interni per SEO */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-3">Hai bisogno di grafica per il tuo business?</h3>
                <p className="text-muted-foreground mb-4">
                  Completiamo il supporto tecnico con servizi di grafica professionale e brand identity.
                </p>
                <Link to="/graphics" className="text-primary hover:text-primary/80">
                  Servizi di grafica →
                </Link>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-3">Serve anche video editing?</h3>
                <p className="text-muted-foreground mb-4">
                  Offriamo anche montaggio video e post-produzione per contenuti digitali aziendali.
                </p>
                <Link to="/video-editing" className="text-primary hover:text-primary/80">
                  Video editing professionale →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-primary/20 opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        <div className="section-container relative z-10">
          <div className="glass-card-enhanced p-12 text-center max-w-4xl mx-auto animate-fade-in scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text-subtle">
              Risolvi i Tuoi Problemi Informatici Oggi Stesso
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              <strong>Consulenza gratuita e intervento rapido</strong> per ogni problematica informatica. 
              Contattaci per una valutazione immediata con il nostro tecnico informatico remoto e scopri come possiamo ottimizzare la tua tecnologia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Link to="/contact">
                <Button className="primary-button-glow text-lg px-8 py-6">
                  Richiedi supporto informatico immediato
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

export default ITPage;
