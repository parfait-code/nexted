import { motion } from "framer-motion";

// Animated background lines component
export function AnimatedLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient
            id="lineGradient1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
            <stop
              offset="50%"
              stopColor="rgb(59, 130, 246)"
              stopOpacity="0.3"
            />
            <stop
              offset="100%"
              stopColor="rgb(59, 130, 246)"
              stopOpacity="0.1"
            />
          </linearGradient>
          <linearGradient
            id="lineGradient2"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.1" />
            <stop
              offset="50%"
              stopColor="rgb(168, 85, 247)"
              stopOpacity="0.2"
            />
            <stop
              offset="100%"
              stopColor="rgb(168, 85, 247)"
              stopOpacity="0.1"
            />
          </linearGradient>
        </defs>

        {/* Animated curved lines */}
        <motion.path
          d="M-100,200 Q200,100 500,200 T1100,200"
          stroke="url(#lineGradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.path
          d="M-100,400 Q300,300 600,400 T1100,400"
          stroke="url(#lineGradient1)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
        />

        <motion.path
          d="M1100,600 Q800,500 500,600 T-100,600"
          stroke="url(#lineGradient2)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 3.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />

        <motion.path
          d="M1100,800 Q700,700 400,800 T-100,800"
          stroke="url(#lineGradient2)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 4.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1.5,
          }}
        />

        {/* Floating dots */}
        <motion.circle
          cx="200"
          cy="200"
          r="3"
          fill="rgb(59, 130, 246)"
          opacity="0.4"
          animate={{
            cx: [200, 400, 600, 800, 200],
            cy: [200, 150, 250, 180, 200],
            opacity: [0.4, 0.8, 0.6, 0.3, 0.4],
          }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
        />

        <motion.circle
          cx="800"
          cy="600"
          r="2"
          fill="rgb(168, 85, 247)"
          opacity="0.3"
          animate={{
            cx: [800, 600, 400, 200, 800],
            cy: [600, 550, 650, 580, 600],
            opacity: [0.3, 0.7, 0.5, 0.2, 0.3],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 2,
          }}
        />

        <motion.circle
          cx="500"
          cy="400"
          r="1.5"
          fill="rgb(59, 130, 246)"
          opacity="0.5"
          animate={{
            cx: [500, 300, 700, 500],
            cy: [400, 350, 450, 400],
            opacity: [0.5, 0.8, 0.3, 0.5],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 3,
          }}
        />
      </svg>

      {/* Additional floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-60"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 20, 0],
          opacity: [0.6, 1, 0.3, 0.6],
        }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
      />

      <motion.div
        className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-40"
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 30, -50, 0],
          opacity: [0.4, 0.8, 0.2, 0.4],
        }}
        transition={{
          duration: 7,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1,
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-50"
        animate={{
          x: [0, 80, -20, 0],
          y: [0, -60, 30, 0],
          opacity: [0.5, 0.9, 0.1, 0.5],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 2.5,
        }}
      />
    </div>
  );
}
