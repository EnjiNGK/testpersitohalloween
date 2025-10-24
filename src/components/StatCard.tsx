
import React, { useState, useEffect } from 'react';

interface StatCardProps {
  value: string;
  metric: string;
  change: string;
  isPositive?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ value, metric, change, isPositive = true }) => {
  const [count, setCount] = useState('0');
  
  useEffect(() => {
    // Simple animation for numbers
    const duration = 1500;
    const steps = 30;
    const stepDuration = duration / steps;
    const finalValue = parseFloat(value.replace(/[^\d.-]/g, ''));
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep += 1;
      const progress = currentStep / steps;
      const currentCount = Math.floor(progress * finalValue);
      
      if (value.includes('%')) {
        setCount(`${currentCount}%`);
      } else if (value.includes('K')) {
        setCount(`${currentCount}K`);
      } else {
        setCount(`${currentCount}`);
      }
      
      if (currentStep === steps) {
        setCount(value);
        clearInterval(timer);
      }
    }, stepDuration);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return (
    <div className="glass-card p-6 hover-lift">
      <h2 className="text-3xl font-bold">{count}</h2>
      <p className="text-gray-400 text-sm mt-1">{metric}</p>
      <div className={`mt-2 text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? '+' : ''}{change}
      </div>
    </div>
  );
};

export default StatCard;
