'use client';

import React, { useState, useEffect } from 'react';

interface ShimmeringBorderCardProps {
  children: React.ReactNode;
  borderColor: string;
  index: number;
  totalCards: number;
}

export function ShimmeringBorderCard({ 
  children, 
  borderColor, 
  index, 
  totalCards 
}: ShimmeringBorderCardProps) {
  const [isShimmering, setIsShimmering] = useState(false);
  const cycleTime = 6000; // 6 seconds per card
  const totalCycleTime = cycleTime * totalCards;
  
  useEffect(() => {
    // Set up the animation cycle
    const intervalId = setInterval(() => {
      // Determine if this card should be shimmering based on the current time
      const now = Date.now();
      const cyclePosition = now % totalCycleTime;
      const cardStartTime = index * cycleTime;
      const cardEndTime = (index + 1) * cycleTime;
      
      const shouldShimmer = cyclePosition >= cardStartTime && cyclePosition < cardEndTime;
      setIsShimmering(shouldShimmer);
    }, 100); // Check every 100ms for smooth transitions
    
    return () => clearInterval(intervalId);
  }, [index, totalCards, totalCycleTime]);
  
  return (
    <div className="relative p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-background-custom overflow-hidden">
      {/* Shimmering border overlay */}
      {/* Create a container for the border effects */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        {/* Border container with mask to only show the border */}
        <div className="absolute inset-0 rounded-lg" style={{ 
          boxShadow: `inset 0 0 0 3px ${borderColor}`,
          opacity: 0.3,
          // This ensures only the border is visible
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '3px',
          borderRadius: '0.5rem' // 0.5rem = 8px to match rounded-lg
        }} />
        
        {/* Shimmering border with blur effect */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ${isShimmering ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            // This ensures only the border is visible
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
            padding: '3px',
            borderRadius: '0.5rem', // 0.5rem = 8px to match rounded-lg
            // Border styling with blur
            ...(isShimmering 
              ? {
                  backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1.5s infinite'
                }
              : {
                  background: 'none',
                  animation: 'none'
                }),
            
            filter: 'blur(2px)',
            boxShadow: `inset 0 0 0 3px ${borderColor}`
          }}
        />
      </div>
      
      {/* Card content */}
      {children}
      
      {/* Add the shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
}
