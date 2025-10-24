import React from 'react';
import { Sun, Moon, Ghost } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  // Ciclo dei temi: light → dark → halloween → light
  const cycleTheme = () => {
    let nextTheme: 'light' | 'dark' | 'halloween';
    if (theme === 'light') nextTheme = 'dark';
    else if (theme === 'dark') nextTheme = 'halloween';
    else nextTheme = 'light';

    document.documentElement.classList.remove('light', 'dark', 'halloween');
    document.documentElement.classList.add(nextTheme);
    localStorage.setItem('theme', nextTheme);

    toggleTheme(nextTheme);
  };

  return (
    <Button
      onClick={cycleTheme}
      variant="ghost"
      size="icon"
      className="relative w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
      aria-label={`Switch theme`}
    >
      <div className="relative w-5 h-5">
        <Sun
          size={20}
          className={`absolute inset-0 text-yellow-400 transition-all duration-300 ${
            theme === 'light'
              ? 'rotate-0 scale-100 opacity-100'
              : 'rotate-90 scale-0 opacity-0'
          }`}
        />
        <Moon
          size={20}
          className={`absolute inset-0 text-blue-400 transition-all duration-300 ${
            theme === 'dark'
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0'
          }`}
        />
        <Ghost
          size={20}
          className={`absolute inset-0 text-orange-500 transition-all duration-300 ${
            theme === 'halloween'
              ? 'rotate-0 scale-100 opacity-100'
              : 'rotate-90 scale-0 opacity-0'
          }`}
        />
      </div>
    </Button>
  );
};

export default ThemeToggle;
