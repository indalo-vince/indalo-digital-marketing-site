'use client';

import { useState, useEffect, useRef } from 'react';

interface AnimatedTaglineProps {
  staticText: string;
  taglines: string[];
  taglineColors?: string[];
  className?: string;
  style?: React.CSSProperties;
  speed?: number;
  duration?: number;
  delay?: number;
  fullWidth?: boolean;
}

export function AnimatedTagline({ staticText, taglines, taglineColors, className, style, speed = 200, duration = 300, delay = 4000, fullWidth = false }: AnimatedTaglineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Create a circular array for the slot machine effect
  const getSlotItems = () => {
    // Create an array with more items to simulate faster spinning
    const items = [];
    const totalItems = 12; // Number of items for spinning effect
    
    // Add some duplicates of the next item to create a more realistic slot effect
    // This creates the illusion of items slowing down before stopping
    for (let i = 0; i < totalItems; i++) {
      let index;
      if (i < 3) {
        // The next item appears multiple times at the end to create a slowing down effect
        index = (currentIndex + 1) % taglines.length;
      } else {
        index = (currentIndex + totalItems - i) % taglines.length;
      }
      items.push(taglines[index]);
    }
    
    return items;
  };

  // Calculate the maximum width needed for the container
  useEffect(() => {
    // Create a temporary element to measure text width
    const calculateMaxWidth = () => {
      const tempSpan = document.createElement('span');
      tempSpan.style.visibility = 'hidden';
      tempSpan.style.position = 'absolute';
      tempSpan.style.whiteSpace = 'nowrap';
      
      // Use the same font styles as the actual text
      const computedStyle = window.getComputedStyle(containerRef.current?.parentElement || document.body);
      tempSpan.style.font = computedStyle.font;
      
      // Find the widest text
      let maxWidth = 0;
      taglines.forEach(text => {
        tempSpan.textContent = text;
        document.body.appendChild(tempSpan);
        const width = tempSpan.getBoundingClientRect().width;
        maxWidth = Math.max(maxWidth, width);
        document.body.removeChild(tempSpan);
      });
      
      // Add a larger buffer to prevent text cutoff
      return maxWidth + 50;
    };

    // Set the width after the component mounts
    if (containerRef.current && typeof window !== 'undefined') {
      const maxWidth = calculateMaxWidth();
      setContainerWidth(maxWidth);
    }
  }, [taglines]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start spinning immediately
      setTimeout(() => {
        setIsSpinning(true);
      }, 50);
      
      // After animation completes, update the current index and stop spinning
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % taglines.length);
        setIsSpinning(false);
      }, duration); // Animation duration
    }, delay); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, [taglines.length, duration, delay]);

  return (
    <div className={`${className} flex flex-col items-start w-full`} style={style}>
      <span className="whitespace-nowrap mb-2">{staticText}</span>
      <div className="relative w-full" style={{ height: '1.5em', minHeight: '1.5em', overflow: 'hidden' }}> {/* Fixed height container with hidden overflow */}
        <span 
          className={`inline-block absolute ml-8 ${fullWidth ? 'w-full' : ''}`}
          style={{ 
            height: '1.5em',
            width: fullWidth ? 'calc(100% - 2rem)' : (containerWidth > 0 ? `${containerWidth}px` : 'auto'),
            maxWidth: 'calc(100% - 2rem)',
          }}
          ref={containerRef}
          aria-live="polite"
        >
          <div 
            className="slot-machine-container relative w-full"
            style={{
              transition: `transform ${speed}ms cubic-bezier(0.15, 0.9, 0.3, 1)`,
              transform: isSpinning ? `translateY(-${getSlotItems().length - 1}em)` : 'translateY(0)',
            }}
          >
            {/* Only show current text when not spinning for accessibility */}
            {!isSpinning && (
              <span 
                className="block h-[1.5em] whitespace-normal" 
                style={{ color: taglineColors?.[currentIndex] || 'inherit' }}
              >
                {taglines[currentIndex]}
              </span>
            )}
            
            {/* Show animated items when spinning */}
            {isSpinning && getSlotItems().map((item, idx) => {
              // For spinning items, we want to use the color of the item that will eventually stop
              // This is the next item in the taglines array after the current one
              const nextIndex = (currentIndex + 1) % taglines.length;
              const color = taglineColors?.[nextIndex] || 'inherit';
              
              return (
                <span 
                  key={idx} 
                  className="block h-[1.5em] whitespace-normal"
                  style={{ color }}
                  aria-hidden="true"
                >
                  {item}
                </span>
              );
            })}
          </div>
        </span>
      </div>
    </div>
  );
}
