
import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl"></div>
        <div className="absolute top-40 right-0 w-96 h-96 rounded-full bg-gradient-to-l from-purple-500/20 to-pink-500/20 blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
            <span 
              className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-300 bg-clip-text text-transparent"
            >
              Chi siamo?
            </span>
          </h1>
        </div>

        <div className="glass-card p-8 md:p-12 max-w-3xl mx-auto">
          <div className="space-y-6 leading-relaxed">
            <p className="dark:text-gray-300 light:text-gray-800 text-lg">
              <strong className="dark:text-white light:text-gray-900">Mi chiamo Lorenzo e ho 18 anni.</strong>
            </p>
            
            <p className="dark:text-gray-300 light:text-gray-800 text-lg">
              Sin da piccolo ho avuto due grandi passioni: la tecnologia e l'aiutare gli altri.
            </p>
            
            <p className="dark:text-gray-300 light:text-gray-800 text-lg">
              Nel tempo, ho trasformato la mia passione per l'informatica, la grafica e il video editing 
              in qualcosa di concreto, creando <strong className="text-primary">Singularity</strong>: 
              non solo un progetto personale, ma una visione.
            </p>
            
            <p className="dark:text-gray-300 light:text-gray-800 text-lg">
              Singularity nasce con uno scopo preciso: <strong className="dark:text-white light:text-gray-900">offrire servizi digitali di qualità, accessibili a 
              tutti</strong>, e allo stesso tempo generare valore reale per chi ne ha più bisogno. Una parte 
              importante delle entrate di questo progetto è destinata alla beneficenza, per aiutare 
              persone in difficoltà e sostenere cause che contano davvero.
            </p>
            
            <p className="dark:text-gray-300 light:text-gray-800 text-lg">
              Credo che la tecnologia <strong className="dark:text-white light:text-gray-900">non debba essere solo profitto</strong>, ma anche <strong className="text-primary">strumento di 
              cambiamento, bellezza e solidarietà</strong>. Per questo ogni grafica che creo, ogni video che 
              edito, ogni consiglio che offro in ambito informatico ha un significato che va oltre il 
              lavoro stesso: è un passo verso il mio sogno più grande — fare la differenza nella vita 
              degli altri.
            </p>
            
            <p className="dark:text-gray-300 light:text-gray-800 text-lg">
              Attualmente opero in <strong className="dark:text-white light:text-gray-900">forma di prestazione occasionale</strong>, in piena regola con la 
              normativa italiana, e ogni incarico è per me una nuova opportunità per dare il meglio e 
              costruire qualcosa che abbia davvero valore.
            </p>
            
             <p className="dark:text-gray-300 light:text-gray-800 text-lg">
              Oggi, però, non sono più solo: accanto a me c’è Luca Montalbetti, 19 anni.
            </p>
             <p className="dark:text-gray-300 light:text-gray-800 text-lg">
              Luca ha sempre avuto un forte legame con la creatività visiva: sin da piccolo si è appassionato alla grafica e al montaggio video, coltivando queste capacità anche attraverso un percorso di studi dedicato. A differenza di molti, per lui il guadagno economico è secondario: ciò che lo spinge davvero è l’impegno sociale e la possibilità di far crescere un progetto che abbia un impatto positivo sulle persone.
La sua energia, la sua sensibilità e la sua visione arricchiscono Singularity e rendono il nostro percorso ancora più autentico.
            </p>
             <p className="dark:text-gray-300 light:text-gray-800 text-lg">
              Attualmente operiamo in forma di prestazione occasionale, in piena regola con la normativa italiana, e ogni incarico è per noi una nuova opportunità per dare il meglio e costruire qualcosa che abbia davvero valore.
            </p>
             <p className="dark:text-gray-300 light:text-gray-800 text-lg">
              Se sei qui, grazie. Perché anche solo leggere queste parole significa far parte di qualcosa che va oltre il digitale. Significa credere che fare del bene, oggi, è ancora possibile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
