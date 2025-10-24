import { useEffect, useState } from "react";
import { Sparkles, Ghost, Skull, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const SecretPage = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden text-center">
      {/* 👻 Background animato */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-950 via-black to-purple-950 animate-pulse-slow" />
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Ghost
            key={i}
            className="absolute text-orange-500 opacity-10 animate-float"
            size={60}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* 🕸️ Contenuto principale */}
      <div className="relative z-10 p-8 max-w-2xl backdrop-blur-md bg-black/40 border border-orange-700/40 rounded-2xl shadow-[0_0_20px_rgba(255,100,0,0.4)] animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold text-orange-400 mb-4 glitch">
          🎃 Benvenuto, Esploratore Oscuro
        </h1>

        <p className="text-lg md:text-xl text-orange-100 mb-6 leading-relaxed">
          Hai trovato la stanza segreta di <span className="text-orange-500 font-semibold">Singularity Dream</span>.
          <br />
          Qui dimostri il tuo spirito curioso e... un pizzico di follia 👻
        </p>

        {showMessage && (
          <div className="mt-6 animate-fade-in-up">
            <p className="text-xl font-semibold text-orange-400 mb-4">
              Ora che ci hai trovato...
            </p>
            <p className="text-lg text-orange-100 mb-6">
              🎁 Fai una <span className="text-orange-500 font-bold">storia su Instagram</span> menzionandoci e potresti
              vincere <span className="text-orange-400 font-semibold">fantastici premi!</span>
            </p>
            <a
              href="https://www.instagram.com/singularity__project/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-full shadow-[0_0_15px_rgba(255,120,0,0.6)] transition-transform hover:scale-105"
            >
              <Instagram size={20} />
              Seguici su Instagram
            </a>
          </div>
        )}
      </div>

      {/* 🔮 Effetti extra */}
      <div className="absolute bottom-8 text-sm text-orange-300 opacity-50 animate-pulse">
        <Sparkles className="inline mr-1" size={14} />
        “Il futuro appartiene a chi osa cercare oltre le apparenze...”
      </div>

      <style>
        {`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.5s ease forwards;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.95; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite;
        }
        @keyframes glitch {
          0% { text-shadow: 2px 2px #ff5500, -2px -2px #d14fff; }
          20% { text-shadow: -2px -2px #ff5500, 2px 2px #d14fff; }
          40% { text-shadow: 2px -2px #ff5500, -2px 2px #d14fff; }
          60% { text-shadow: -2px 2px #ff5500, 2px -2px #d14fff; }
          80%, 100% { text-shadow: 2px 2px #ff5500, -2px -2px #d14fff; }
        }
        .glitch {
          animation: glitch 1.5s infinite alternate;
        }
        `}
      </style>
    </section>
  );
};

export default SecretPage;
