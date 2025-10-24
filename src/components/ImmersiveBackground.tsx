
import React from 'react';

interface ImmersiveBackgroundProps {
  variant?: 'default' | 'graphics' | 'it' | 'video';
  showParticles?: boolean;
  showNoise?: boolean;
}

const ImmersiveBackground: React.FC<ImmersiveBackgroundProps> = ({ 
  variant = 'default',
  showParticles = false,
  showNoise = false 
}) => {
  const getVariantColors = () => {
    switch (variant) {
      case 'graphics':
        return {
          primary: 'dark:bg-primary/30 light:bg-primary/20',
          secondary: 'dark:bg-purple-600/25 light:bg-purple-600/15',
          tertiary: 'dark:bg-primary/20 light:bg-primary/10'
        };
      case 'it':
        return {
          primary: 'dark:bg-blue-500/30 light:bg-blue-500/20',
          secondary: 'dark:bg-cyan-600/25 light:bg-cyan-600/15',
          tertiary: 'dark:bg-primary/20 light:bg-primary/10'
        };
      case 'video':
        return {
          primary: 'dark:bg-red-500/30 light:bg-red-500/20',
          secondary: 'dark:bg-orange-600/25 light:bg-orange-600/15',
          tertiary: 'dark:bg-yellow-500/20 light:bg-yellow-500/10'
        };
      default:
        return {
          primary: 'dark:bg-primary/30 light:bg-primary/20',
          secondary: 'dark:bg-purple-600/25 light:bg-purple-600/15',
          tertiary: 'dark:bg-primary/20 light:bg-primary/10'
        };
    }
  };

  const colors = getVariantColors();

  return (
    <>
      {/* Enhanced Animated Nebula Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-0 left-1/4 w-96 h-96 ${colors.primary} rounded-full blur-3xl animate-float opacity-60`}></div>
        <div className={`absolute top-1/3 right-1/4 w-80 h-80 ${colors.secondary} rounded-full blur-3xl animate-pulse opacity-50`}></div>
        <div className={`absolute bottom-1/4 left-1/3 w-72 h-72 ${colors.tertiary} rounded-full blur-3xl animate-float opacity-40`} style={{animationDelay: '2s'}}></div>
        
        {/* Enhanced Light Mode Gradients */}
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-primary/10 dark:via-transparent dark:to-purple-600/10 light:bg-gradient-to-br light:from-primary/8 light:via-purple-100/30 light:to-blue-200/20 animated-gradient"></div>
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 dark:bg-gradient-radial dark:from-primary/5 dark:via-transparent dark:to-transparent light:bg-gradient-radial light:from-primary/3 light:via-purple-50/50 light:to-transparent opacity-70 animate-pulse"></div>
        </div>

        {/* Additional Light Mode Effects */}
        <div className="absolute top-1/4 right-1/3 w-64 h-64 light:bg-gradient-to-r light:from-blue-200/20 light:to-purple-200/20 dark:bg-transparent rounded-full blur-2xl animate-float opacity-30" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 light:bg-gradient-to-l light:from-purple-200/15 light:to-pink-200/15 dark:bg-transparent rounded-full blur-2xl animate-pulse opacity-25" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Enhanced Animated Grid */}
      <div className="absolute inset-0 animated-grid dark:opacity-30 light:opacity-20"></div>

      {/* Enhanced Floating Particles */}
      {showParticles && (
        <div className="floating-particles">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="particle dark:opacity-100 light:opacity-60"></div>
          ))}
        </div>
      )}

      {/* Enhanced Noise Texture */}
      {showNoise && <div className="noise-texture dark:opacity-30 light:opacity-15"></div>}

      {/* Additional Light Mode Sparkles */}
      <div className="absolute inset-0 light:block dark:hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default ImmersiveBackground;
