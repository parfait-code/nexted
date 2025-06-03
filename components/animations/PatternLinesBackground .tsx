import React from "react";

export const PatternLinesBackground = () => {
  // Génération de motifs géométriques
  const trianglePatterns = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.8,
    duration: 12 + Math.random() * 4,
    size: 60 + Math.random() * 40,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
  }));

  const hexagonPatterns = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    delay: i * 1.2,
    duration: 15 + Math.random() * 5,
    size: 50 + Math.random() * 30,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  const spiralPatterns = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    delay: i * 2,
    duration: 20 + Math.random() * 10,
    size: 80 + Math.random() * 60,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  const starPatterns = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    delay: i * 0.6,
    duration: 8 + Math.random() * 4,
    size: 40 + Math.random() * 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Motifs triangulaires */}
      {trianglePatterns.map((pattern) => (
        <div
          key={`triangle-${pattern.id}`}
          className="absolute"
          style={{
            left: `${pattern.x}%`,
            top: `${pattern.y}%`,
            width: `${pattern.size}px`,
            height: `${pattern.size}px`,
            transform: `rotate(${pattern.rotation}deg)`,
            animation: `drawTriangle ${pattern.duration}s ${pattern.delay}s infinite ease-in-out`,
          }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <path
              d="M50,10 L85,80 L15,80 Z"
              stroke="currentColor"
              strokeWidth="0.8"
              fill="none"
              className="text-purple-800"
              style={{
                strokeDasharray: "200",
                strokeDashoffset: "200",
                animation: `drawPath ${pattern.duration}s ${pattern.delay}s infinite ease-in-out`,
              }}
            />
          </svg>
        </div>
      ))}

      {/* Motifs hexagonaux */}
      {hexagonPatterns.map((pattern) => (
        <div
          key={`hexagon-${pattern.id}`}
          className="absolute"
          style={{
            left: `${pattern.x}%`,
            top: `${pattern.y}%`,
            width: `${pattern.size}px`,
            height: `${pattern.size}px`,
            animation: `drawHexagon ${pattern.duration}s ${pattern.delay}s infinite ease-in-out`,
          }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <path
              d="M50,5 L85,25 L85,75 L50,95 L15,75 L15,25 Z"
              stroke="currentColor"
              strokeWidth="0.6"
              fill="none"
              className="text-purple-800"
              style={{
                strokeDasharray: "300",
                strokeDashoffset: "300",
                animation: `drawPath ${pattern.duration}s ${pattern.delay}s infinite ease-in-out`,
              }}
            />
          </svg>
        </div>
      ))}

      {/* Motifs en spirale */}
      {spiralPatterns.map((pattern) => (
        <div
          key={`spiral-${pattern.id}`}
          className="absolute"
          style={{
            left: `${pattern.x}%`,
            top: `${pattern.y}%`,
            width: `${pattern.size}px`,
            height: `${pattern.size}px`,
            animation: `drawSpiral ${pattern.duration}s ${pattern.delay}s infinite ease-in-out`,
          }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <path
              d="M50,50 Q50,30 70,50 Q50,70 30,50 Q50,30 60,50 Q50,60 40,50 Q50,40 55,50"
              stroke="currentColor"
              strokeWidth="0.8"
              fill="none"
              className="text-blue-800"
              style={{
                strokeDasharray: "400",
                strokeDashoffset: "400",
                animation: `drawPath ${pattern.duration}s ${pattern.delay}s infinite ease-in-out`,
              }}
            />
          </svg>
        </div>
      ))}

      {/* Motifs d'étoiles */}
      {starPatterns.map((pattern) => (
        <div
          key={`star-${pattern.id}`}
          className="absolute"
          style={{
            left: `${pattern.x}%`,
            top: `${pattern.y}%`,
            width: `${pattern.size}px`,
            height: `${pattern.size}px`,
            animation: `drawStar ${pattern.duration}s ${pattern.delay}s infinite ease-in-out`,
          }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <path
              d="M50,10 L60,35 L85,35 L67,52 L75,80 L50,65 L25,80 L33,52 L15,35 L40,35 Z"
              stroke="currentColor"
              strokeWidth="0.6"
              fill="none"
              className="text-blue-800"
              style={{
                strokeDasharray: "350",
                strokeDashoffset: "350",
                animation: `drawPath ${pattern.duration}s ${pattern.delay}s infinite ease-in-out`,
              }}
            />
          </svg>
        </div>
      ))}

      {/* Motifs de losanges connectés */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={`diamond-${i}`}
          className="absolute"
          style={{
            left: `${i * 20}%`,
            top: `${20 + Math.random() * 60}%`,
            width: "120px",
            height: "60px",
            animation: `drawDiamond ${10 + i * 2}s ${
              i * 1.5
            }s infinite ease-in-out`,
          }}
        >
          <svg className="w-full h-full" viewBox="0 0 120 60">
            <path
              d="M20,30 L40,10 L60,30 L80,10 L100,30 L80,50 L60,30 L40,50 Z"
              stroke="currentColor"
              strokeWidth="0.7"
              fill="none"
              className="text-blue-800"
              style={{
                strokeDasharray: "280",
                strokeDashoffset: "280",
                animation: `drawPath ${10 + i * 2}s ${
                  i * 1.5
                }s infinite ease-in-out`,
              }}
            />
          </svg>
        </div>
      ))}

      {/* Motifs de vagues géométriques */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={`wave-${i}`}
          className="absolute w-full"
          style={{
            top: `${i * 15}%`,
            height: "80px",
            animation: `drawWave ${12 + i}s ${i * 0.7}s infinite ease-in-out`,
          }}
        >
          <svg className="w-full h-full" viewBox="0 0 800 80">
            <path
              d="M0,40 L50,20 L100,40 L150,60 L200,40 L250,20 L300,40 L350,60 L400,40 L450,20 L500,40 L550,60 L600,40 L650,20 L700,40 L750,60 L800,40"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-purple-800"
              style={{
                strokeDasharray: "1000",
                strokeDashoffset: "1000",
                animation: `drawPath ${12 + i}s ${
                  i * 0.7
                }s infinite ease-in-out`,
              }}
            />
          </svg>
        </div>
      ))}

      {/* Styles CSS pour les animations */}
      <style jsx>{`
        @keyframes drawPath {
          0% {
            stroke-dashoffset: 1000;
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          50% {
            stroke-dashoffset: 0;
            opacity: 0.4;
          }
          90% {
            opacity: 0.2;
          }
          100% {
            stroke-dashoffset: -1000;
            opacity: 0;
          }
        }

        @keyframes drawTriangle {
          0%,
          100% {
            transform: rotate(0deg) scale(0.8);
            opacity: 0.1;
          }
          50% {
            transform: rotate(180deg) scale(1.1);
            opacity: 0.3;
          }
        }

        @keyframes drawHexagon {
          0%,
          100% {
            transform: scale(0.9) rotate(0deg);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.2) rotate(60deg);
            opacity: 0.4;
          }
        }

        @keyframes drawSpiral {
          0%,
          100% {
            transform: rotate(0deg) scale(0.7);
            opacity: 0.1;
          }
          50% {
            transform: rotate(360deg) scale(1.3);
            opacity: 0.3;
          }
        }

        @keyframes drawStar {
          0%,
          100% {
            transform: scale(0.6) rotate(0deg);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.4) rotate(72deg);
            opacity: 0.4;
          }
        }

        @keyframes drawDiamond {
          0%,
          100% {
            transform: translateY(0px) scaleX(1);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-20px) scaleX(1.2);
            opacity: 0.3;
          }
        }

        @keyframes drawWave {
          0%,
          100% {
            transform: translateX(0px);
            opacity: 0.1;
          }
          50% {
            transform: translateX(20px);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};

// Composant principal de démonstration
export default function App() {
  return (
    <div className="min-h-screen relative bg-white">
      <PatternLinesBackground />

      {/* Contenu de démonstration */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center p-8 bg-white/90 backdrop-blur-sm shadow-lg rounded-lg border">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Motifs Géométriques Animés
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Triangles, hexagones, spirales, étoiles qui se dessinent
          </p>
          <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300">
            Découvrir
          </button>
        </div>
      </div>
    </div>
  );
}
