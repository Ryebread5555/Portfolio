import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useThemeContext } from '../hooks/useThemeContext';

const ShootingStars = () => {
  const { darkMode } = useThemeContext();
  const [stars, setStars] = useState([]);
  const [comets, setComets] = useState([]);

  // Generate random stars and comets
  useEffect(() => {
    if (!darkMode) {
      setStars([]);
      setComets([]);
      return;
    }

    const generateStars = () => {
      const newStars = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        delay: Math.random() * 1.5,
        duration: 1.5 + Math.random() * 2.5,
        size: 2 + Math.random() * 4,
        color: `hsl(${45 + Math.random() * 20}, 100%, ${60 + Math.random() * 30}%)`, // Yellow variations
      }));
      setStars(newStars);
    };

    const generateComets = () => {
      const newComets = Array.from({ length: 3 }, (_, i) => {
        // Simple diagonal movement like shooting stars
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * (window.innerHeight * 0.3); // Start in top third
        const endX = startX + 300 + Math.random() * 200; // Move diagonally
        const endY = startY + 300 + Math.random() * 200; // Move diagonally
        
        return {
          id: i,
          x: startX,
          y: startY,
          endX: endX,
          endY: endY,
          delay: Math.random() * 3,
          duration: 6 + Math.random() * 4, // Slower, more elegant
          size: 3 + Math.random() * 3, // Smaller, cleaner
          color: `hsl(${40 + Math.random() * 10}, 100%, ${70 + Math.random() * 20}%)`, // Clean yellow
        };
      });
      setComets(newComets);
    };

    generateStars();
    generateComets();
    
    // Regenerate stars more frequently (every 4 seconds)
    const starInterval = setInterval(generateStars, 4000);
    
    // Regenerate comets less frequently (every 20 seconds)
    const cometInterval = setInterval(generateComets, 20000);
    
    return () => {
      clearInterval(starInterval);
      clearInterval(cometInterval);
    };
  }, [darkMode]);

  if (!darkMode) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{
        zIndex: 1,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      {/* Shooting Stars */}
      <AnimatePresence>
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full shadow-lg"
            style={{
              left: star.x,
              top: star.y,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
            }}
            initial={{
              opacity: 0,
              scale: 0,
              x: -100,
              y: -100,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [star.x - 100, star.x + 400],
              y: [star.y - 100, star.y + 400],
            }}
            exit={{
              opacity: 0,
              scale: 0,
              y: window.innerHeight + 100,
              transition: { duration: 0.5 }
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        ))}
      </AnimatePresence>
      
      {/* Shooting Star Trails */}
      {stars.slice(0, 8).map((star) => (
        <motion.div
          key={`trail-${star.id}`}
          className="absolute rounded-full"
          style={{
            left: star.x,
            top: star.y,
            width: '1px',
            height: '12px',
            background: `linear-gradient(to right, transparent, ${star.color}, transparent)`,
            transform: 'rotate(45deg)',
          }}
          initial={{
            opacity: 0,
            scale: 0,
            x: -50,
            y: -50,
          }}
          animate={{
            opacity: [0, 0.9, 0],
            scale: [0, 1, 0],
            x: [star.x - 50, star.x + 250],
            y: [star.y - 50, star.y + 250],
          }}
          transition={{
            duration: star.duration * 0.8,
            delay: star.delay + 0.1,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 2.5,
          }}
        />
      ))}

      {/* Clean Comets - Like shooting stars but larger */}
      <AnimatePresence>
        {comets.map((comet) => (
          <div key={comet.id}>
            {/* Comet Head */}
            <motion.div
              className="absolute rounded-full"
              style={{
                left: comet.x,
                top: comet.y,
                width: `${comet.size}px`,
                height: `${comet.size}px`,
                backgroundColor: comet.color,
                boxShadow: `0 0 ${comet.size * 3}px ${comet.color}`,
              }}
              initial={{
                opacity: 0,
                scale: 0,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 1, 0],
                x: [0, comet.endX - comet.x],
                y: [0, comet.endY - comet.y],
              }}
              transition={{
                duration: comet.duration,
                delay: comet.delay,
                ease: "easeOut",
                repeat: Infinity,
                repeatDelay: 15,
              }}
            />
            
            {/* Simple Comet Trail */}
            <motion.div
              className="absolute rounded-full"
              style={{
                left: comet.x,
                top: comet.y,
                width: '2px',
                height: '20px',
                background: `linear-gradient(to bottom, ${comet.color}, transparent)`,
                transform: 'rotate(45deg)',
              }}
              initial={{
                opacity: 0,
                scale: 0,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: [0, 0.7, 0.7, 0],
                scale: [0, 1, 1, 0],
                x: [0, comet.endX - comet.x],
                y: [0, comet.endY - comet.y],
              }}
              transition={{
                duration: comet.duration,
                delay: comet.delay + 0.1,
                ease: "easeOut",
                repeat: Infinity,
                repeatDelay: 15,
              }}
            />
          </div>
        ))}
      </AnimatePresence>

      {/* Background Stars (Static) */}
      {Array.from({ length: 50 }, (_, i) => (
        <motion.div
          key={`bg-star-${i}`}
          className="absolute rounded-full bg-yellow-200"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
            opacity: 0.3 + Math.random() * 0.4,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;
