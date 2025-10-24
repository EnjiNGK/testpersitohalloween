import React, { useEffect } from 'react';
import { Heart, Leaf, Computer, TreePine, HandHeart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SocialCommitmentPage = () => {

<a
  href="https://www.paypal.com/ncp/payment/YGSXBTFJ9KHHU"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="primary-button-glow text-lg px-8 py-4 mb-16">
    Sostieni il Nostro Impegno
  </Button>
</a>

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
      {/* Hero Section with Background Effects */}
      <section className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-green-500/30 rounded-full blur-3xl animate-float opacity-60"></div>
          <div className="absolute top-1/3 left-1/4 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-emerald-600/25 rounded-full blur-3xl animate-pulse-slow opacity-50"></div>
          <div className="absolute bottom-1/4 right-1/3 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-teal-500/20 rounded-full blur-3xl animate-float opacity-40" style={{animationDelay: '2s'}}></div>
          
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-600/10 animated-gradient"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-8 sm:mb-12 bg-gradient-to-r from-foreground to-green-500 bg-clip-text text-transparent">
              Impegno Sociale
            </h1>
            
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 animate-slide-up" style={{animationDelay: '0.3s'}}>
              {/* Left Column - Iniziative benefiche */}
              <div className="text-left">
                <div className="flex items-center mb-6">
                  <Heart className="w-8 h-8 text-green-500 mr-3" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Iniziative benefiche</h2>
                </div>
                
                <div className="glass-card-enhanced p-6 mb-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Supporto alle persone bisognose</h3>
                  <p className="text-muted-foreground mb-4">
                    Destiniamo parte dei nostri profitti all'acquisto diretto di beni di prima 
                    necessità che doniamo personalmente a persone in difficoltà economiche 
                    e sociali nella nostra comunità.
                  </p>
                  <div className="flex items-center text-sm text-green-500">
                    <Heart className="w-4 h-4 mr-2" />
                    Donazioni dirette di cibo e beni essenziali
                  </div>
                </div>
                
                <div className="glass-card-enhanced p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Tecnologia per tutti</h3>
                  <p className="text-muted-foreground mb-4">
                    Offriamo servizi gratuiti di assistenza informatica e formazione 
                    tecnologica di base per anziani e persone con difficoltà economiche.
                  </p>
                  <div className="flex items-center text-sm text-green-500">
                    <Computer className="w-4 h-4 mr-2" />
                    Assistenza tecnologica gratuita per anziani e persone in difficoltà, basta contattarci.
                  </div>
                </div>
              </div>
              
              {/* Right Column - Impegno ambientale */}
              <div className="text-left">
                <div className="flex items-center mb-6">
                  <Leaf className="w-8 h-8 text-green-500 mr-3" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Impegno ambientale</h2>
                </div>
                
                <div className="glass-card-enhanced p-6 mb-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Riduzione dell'impatto ambientale</h3>
                  <p className="text-muted-foreground mb-4">
                    Adottiamo pratiche di lavoro sostenibili, riducendo al minimo gli sprechi e 
                    optando per soluzioni digitali quando possibile.
                  </p>
                  <div className="flex items-center text-sm text-green-500">
                    <Leaf className="w-4 h-4 mr-2" />
                    Promuoviamo uno stile di lavoro più green, con piccoli gesti quotidiani.
                  </div>
                </div>
                
                <div className="glass-card-enhanced p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Progetto riforestazione</h3>
                  <p className="text-muted-foreground mb-4">
                    Stiamo pianificando un progetto di riforestazione in collaborazione con 
                    associazioni ambientaliste. Non appena avremo le risorse necessarie, 
                    inizieremo a piantare alberi per contribuire alla rigenerazione di aree 
                    degradate.
                  </p>
                  <div className="flex items-center text-sm text-green-500">
                    <TreePine className="w-4 h-4 mr-2" />
                    Progetto in fase di sviluppo per un futuro più verde
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up" style={{animationDelay: '0.6s'}}>
             <a
  href="https://www.paypal.com/ncp/payment/YGSXBTFJ9KHHU"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="primary-button-glow text-lg px-8 py-4 mb-16">
    Sostieni il Nostro Impegno
  </Button>
</a>

            </div>
          </div>
        </div>
      </section>

      {/* Vision Quote Section */}
      <section className="py-16 sm:py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in scroll-animate">
            <div className="text-6xl sm:text-8xl text-green-500 mb-8 opacity-30">"</div>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-light text-foreground mb-8 leading-relaxed">
              Crediamo in un futuro dove la tecnologia non lascia indietro nessuno. E 
              lo costruiamo ogni giorno, insieme.
            </blockquote>
            <div className="text-6xl sm:text-8xl text-green-500 opacity-30 transform rotate-180">"</div>
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-16 sm:py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-emerald-600/10 rounded-full blur-3xl animate-float opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-in scroll-animate">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 glow-text-subtle">Il nostro impatto</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Risultati concreti delle nostre iniziative sociali e ambientali.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-card-enhanced p-8 text-center hover-lift-glow border-l-4 border-green-500 animate-slide-up scroll-animate" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl sm:text-5xl font-bold text-green-500 mb-2">7+</div>
              <div className="text-xl font-semibold mb-3 text-foreground">Persone assistite</div>
              <p className="text-muted-foreground text-sm">
                Anziani e persone in difficoltà che hanno ricevuto supporto tecnologico gratuito.
              </p>
            </div>
            
            <div className="glass-card-enhanced p-8 text-center hover-lift-glow border-l-4 border-green-500 animate-slide-up scroll-animate" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl sm:text-5xl font-bold text-green-500 mb-2">12+</div>
              <div className="text-xl font-semibold mb-3 text-foreground">Ore di volontariato</div>
              <p className="text-muted-foreground text-sm">
                Tempo dedicato a iniziative sociali e formazione gratuita nell'ultimo anno.
              </p>
            </div>
            
            <div className="glass-card-enhanced p-8 text-center hover-lift-glow border-l-4 border-green-500 animate-slide-up scroll-animate" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl sm:text-5xl font-bold text-green-500 mb-2">30%</div>
              <div className="text-xl font-semibold mb-3 text-foreground">Profitti donati</div>
              <p className="text-muted-foreground text-sm">
                Diamo il 30% dei nostri guadagni alle persone bisognose ed all'ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 sm:py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card-enhanced p-8 sm:p-12 text-center max-w-4xl mx-auto animate-fade-in scroll-animate">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 glow-text-subtle">
              Unisciti a noi
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Scegliendo Singularity, non solo ottieni servizi di qualità, ma contribuisci anche a fare la 
              differenza nel nostro pianeta e nella nostra comunità.
            </p>
            <Link to="/contact">
              <Button className="primary-button-glow text-lg px-8 py-4 mb-8">
                Scopri come collaborare
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Support Our Mission Section */}
      <section className="py-16 sm:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card-enhanced p-8 sm:p-12 text-center max-w-4xl mx-auto animate-fade-in scroll-animate">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
              <HandHeart className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 glow-text-subtle">
              Sostieni il Nostro Impegno
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              Ogni donazione contribuisce a realizzare progetti sociali e ambientali. Insieme, possiamo 
              fare la differenza.
            </p>
            <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
              Il 100% delle donazioni sarà utilizzato esclusivamente per aiutare le persone bisognose e il pianeta, 
              garantendo la massima trasparenza nel loro utilizzo.
            </p>
          <a
  href="https://www.paypal.com/ncp/payment/YGSXBTFJ9KHHU"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="primary-button-glow text-lg px-8 py-4 mb-16">
    Sostieni il Nostro Impegno
  </Button>
</a>

          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialCommitmentPage;
