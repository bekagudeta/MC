import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  DraftingCompass, 
  Building, 
  Cpu, 
  Calculator, 
  Layers, 
  Box, 
  Grid3x3,
  Wrench,
  FileText
} from 'lucide-react';

// Skill icon mapping for structural engineering skills
const skillIconMap: Record<string, React.ComponentType<any>> = {
  'AutoCAD': DraftingCompass,
  'Abaqus': Cpu,
  'ETABS': Building,
  'SAP2000': Grid3x3,
  'Building Information Modeling (BIM)': Layers,
  'Structural Analysis': Calculator,
  'Engineering Mechanics': Wrench,
  'Structural Design': FileText,
  'Finite Element Analysis': Box,
  'Open Source Software Operation': Grid3x3,
};

interface SkillIconsProps {
  skills: string[];
}

interface SkillIconProps {
  skill: string;
  IconComponent: React.ComponentType<any>;
  x: number;
  y: number;
}

function SkillIcon({ skill, IconComponent, x, y }: SkillIconProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <>
      <motion.div
        className="absolute w-10 h-10 bg-[#001722] border border-[#6BCFCB] rounded-full flex items-center justify-center shadow-lg cursor-pointer"
        style={{
          left: '50%',
          top: '50%',
          x: x - 20,
          y: y - 20,
        }}
        variants={{
          hidden: { 
            opacity: 0, 
            scale: 0,
            rotate: -180
          },
          visible: { 
            opacity: 1, 
            scale: 1,
            rotate: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut" as const,
              type: "spring" as const,
              bounce: 0.4
            }
          },
          hover: {
            scale: 1.3,
            rotate: 5,
            transition: {
              duration: 0.3,
              ease: "easeInOut" as const
            }
          }
        }}
        whileHover="hover"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <IconComponent 
          size={16} 
          className="text-[#6BCFCB]"
        />
      </motion.div>
      
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute bg-[#001722] border border-[#6BCFCB] text-white px-3 py-2 rounded-lg text-sm font-medium shadow-xl z-50 pointer-events-none"
            style={{
              left: '50%',
              top: '50%',
              x: x - 60,
              y: y - 50,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {skill}
            <div className="absolute w-2 h-2 bg-[#001722] border-r border-b border-[#6BCFCB] transform rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function SkillIcons({ skills }: SkillIconsProps) {
  // Get top 8 skills for circular arrangement
  const topSkills = skills.slice(0, 8);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.0
      }
    }
  };

  return (
    <div className="relative w-96 h-96 mx-auto">
      {/* Animated orbit ring */}
      <motion.div
        className="absolute inset-0 border-2 border-[#6BCFCB]/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear" as const
        }}
      />
      
      {/* Skill icons in circular arrangement with continuous orbit */}
      <motion.div
        className="absolute inset-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear" as const
          }}
        >
          {topSkills.map((skill, index) => {
            const IconComponent = skillIconMap[skill] || Calculator;
            const angle = (index * 360) / topSkills.length;
            const radius = 88; // Distance from center to sit on border of 176px diameter circle
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            
            return (
              <SkillIcon
                key={skill}
                skill={skill}
                IconComponent={IconComponent}
                x={x}
                y={y}
              />
            );
          })}
        </motion.div>
      </motion.div>

      {/* Connecting lines from center to icons (also rotating) */}
      <motion.svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear" as const
        }}
      >
        {topSkills.map((skill, index) => {
          const angle = (index * 360) / topSkills.length;
          const radius = 88;
          const x1 = 192; // Center x
          const y1 = 192; // Center y
          const x2 = x1 + Math.cos((angle * Math.PI) / 180) * radius;
          const y2 = y1 + Math.sin((angle * Math.PI) / 180) * radius;
          
          return (
            <motion.line
              key={`line-${skill}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#6BCFCB"
              strokeWidth="1"
              strokeDasharray="2 4"
              opacity="0.2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: 0.2,
                transition: {
                  pathLength: { duration: 1, delay: 1.2 + index * 0.1, ease: "easeOut" },
                  opacity: { duration: 0.5, delay: 1.2 + index * 0.1 }
                }
              }}
            />
          );
        })}
      </motion.svg>
    </div>
  );
}
