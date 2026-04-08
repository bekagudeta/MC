import { Variants, MotionProps } from 'framer-motion';

// Staggered container animation for revealing children sequentially
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

// Fade and slide up animation for text elements
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

// Scale and blur animation for profile images or important elements
export const scaleInBlur: Variants = {
  hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut" as const
    }
  }
};

// Slide in from left animation
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

// Slide in from right animation
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

// Scale in animation for cards and interactive elements
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

// Hover animation props for interactive elements
export const hoverScale: MotionProps = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", bounce: 0.2, duration: 0.3 }
};

// Hover animation with shadow for buttons
export const hoverScaleWithShadow: MotionProps = {
  whileHover: { 
    scale: 1.05, 
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" 
  },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", bounce: 0.2, duration: 0.3 }
};

// Shimmer animation for CTA buttons
export const shimmerAnimation = {
  initial: { x: '-100%' },
  animate: { x: '100%' },
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatDelay: 3,
    ease: "linear" as const
  }
};

// Pulse animation for drawing attention
export const pulseAnimation: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

// Line drawing animation for borders and dividers
export const lineDrawing: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut" as const
    }
  }
};

// Scroll-triggered animation variants
export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const
    }
  }
};
