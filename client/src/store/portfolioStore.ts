import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { PortfolioData, About, SkillCategory, Experience, Education, Research, Achievement, Contact } from '../types/portfolio';

interface PortfolioStore extends PortfolioData {
  // State
  loading: boolean;
  error: string | null;
  
  // Actions
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  fetchPortfolioData: () => Promise<void>;
  
  // About
  setAbout: (about: About) => void;
  
  // Skills
  setSkills: (skills: SkillCategory[]) => void;
  addSkillCategory: (category: SkillCategory) => void;
  updateSkillCategory: (id: string, category: Partial<SkillCategory>) => void;
  removeSkillCategory: (id: string) => void;
  
  // Experience
  setExperience: (experience: Experience[]) => void;
  addExperience: (experience: Experience) => void;
  updateExperience: (id: string, experience: Partial<Experience>) => void;
  removeExperience: (id: string) => void;
  
  // Education
  setEducation: (education: Education[]) => void;
  addEducation: (education: Education) => void;
  updateEducation: (id: string, education: Partial<Education>) => void;
  removeEducation: (id: string) => void;
  
  // Research
  setResearch: (research: Research[]) => void;
  addResearch: (research: Research) => void;
  updateResearch: (id: string, research: Partial<Research>) => void;
  removeResearch: (id: string) => void;
  
  // Achievements
  setAchievements: (achievements: Achievement[]) => void;
  addAchievement: (achievement: Achievement) => void;
  updateAchievement: (id: string, achievement: Partial<Achievement>) => void;
  removeAchievement: (id: string) => void;
  
  // Contact
  setContact: (contact: Contact) => void;
  
  // Reset
  resetStore: () => void;
}

const initialState: PortfolioData = {
  about: {
    name: "Mulgeta Mersha Cheru",
    title: "University Lecturer & Structural Engineer",
    motto: "Challenge. Change. Impact!",
    bio: "Dedicated structural engineer and educator with 6+ years of experience in university lecturing, department leadership, and construction engineering. Passionate about advancing structural engineering education and research.",
    description: "Experienced structural engineer and university lecturer specializing in composite materials, structural analysis, and engineering education. Committed to research excellence and student mentorship.",
    profileImage: "/src/assets/b9e8e4d79f6ab232976643d9caf4297745488717.png",
    email: "mulgeta_mersha@slu.edu.et",
    phone: "+251 910 074 638",
    location: "Fiche, Ethiopia",
    linkedin: "https://www.linkedin.com/in/mulgeta123",
    github: "https://github.com/mulgeta123"
  },
  skills: [
    {
      category: "Technical Skills",
      items: [
        "AutoCAD", "Abaqus", "ETABS", "SAP2000", 
        "Building Information Modeling (BIM)", "Structural Analysis",
        "Engineering Mechanics", "Structural Design", 
        "Finite Element Analysis", "Open Source Software Operation"
      ]
    },
    {
      category: "Professional Skills", 
      items: [
        "Engineering Principles", "Project Management", "Education Administration",
        "Supervise Educational Staff", "Performance Management",
        "Curriculum Standards", "Working with Others",
        "Teaching and Training", "Assist Students in Learning"
      ]
    }
  ],
  experience: [
    {
      company: "Salale University",
      role: "University Lecturer in Engineering",
      startDate: "2025-09-01",
      endDate: undefined,
      current: true,
      description: "Teaching structural engineering courses and conducting research",
      achievements: [
        "Course Preparation: Designing course syllabi, lesson plans, and assessment materials",
        "Lecturing: Delivering lectures in structural analysis, design, and mechanics",
        "Research: Conducting research in structural engineering and composite materials",
        "Student Supervision: Mentoring undergraduate and graduate students",
        "Academic Service: Participating in curriculum development and departmental meetings"
      ]
    }
  ],
  education: [
    {
      degree: "Master of Science in Structural Engineering",
      institution: "Jimma University",
      year: "2020",
      gpa: "3.91/4.00",
      description: "Thesis: The effects of different steel sections on the performance of encased composite columns under cyclic lateral loads"
    }
  ],
  research: [
    {
      title: "The effects of different steel sections on the performance of encased composite columns under cyclic lateral loads",
      description: "Investigation of fully encased composite columns subjected to horizontal cyclic loads using finite element simulation",
      journal: "Results in Engineering (Elsevier)",
      year: 2024,
      link: "https://doi.org/10.1016/j.rineng.2024.103510",
      coAuthors: ["Regasa Yadeta Sembeta", "Kefiyalew Zerfu", "Mulgeta Mersha", "Elmer C Agon"],
      status: "published"
    }
  ],
  achievements: [
    {
      title: "Best Pre-Engineering Student Award",
      year: 2012,
      description: "Recognition for outstanding academic performance in pre-engineering program",
      type: "award",
      issuer: "Jimma University"
    }
  ],
  contact: {
    email: "mulgeta_mersha@slu.edu.et",
    phone: "+251 910 074 638",
    linkedin: "https://www.linkedin.com/in/mulgeta123",
    github: "https://github.com/mulgeta123",
    location: "Fiche, Ethiopia",
    additionalInfo: "Available for consulting, research collaboration, and academic opportunities"
  }
};

export const usePortfolioStore = create<PortfolioStore>()(
  devtools(
    (set) => ({
      ...initialState,
      loading: false,
      error: null,

      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),

      // Fetch all portfolio data
      fetchPortfolioData: async () => {
        set({ loading: true, error: null });
        try {
          console.log('Fetching portfolio data from: http://localhost:5001/api/portfolio');
          const response = await fetch('http://localhost:5001/api/portfolio');
          console.log('Response status:', response.status);
          console.log('Response ok:', response.ok);
          if (!response.ok) {
            throw new Error('Failed to fetch portfolio data');
          }
          const data = await response.json();
          console.log('Received data:', data);
          
          // Set all data in store
          set({
            about: data.about,
            skills: data.skills,
            experience: data.experience,
            education: data.education,
            research: data.research,
            achievements: data.achievements,
            contact: data.contact,
            loading: false,
          });
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Failed to fetch portfolio data',
            loading: false 
          });
        }
      },

      setAbout: (about) => set({ about }),

      setSkills: (skills) => set({ skills }),
      addSkillCategory: (category) => set((state) => ({
        skills: [...state.skills, category],
      })),
      updateSkillCategory: (id, updatedCategory) => set((state) => ({
        skills: state.skills.map((skill) =>
          skill._id === id ? { ...skill, ...updatedCategory } : skill
        ),
      })),
      removeSkillCategory: (id) => set((state) => ({
        skills: state.skills.filter((skill) => skill._id !== id),
      })),

      setExperience: (experience) => set({ experience }),
      addExperience: (experience) => set((state) => ({
        experience: [...state.experience, experience],
      })),
      updateExperience: (id, updatedExperience) => set((state) => ({
        experience: state.experience.map((exp) =>
          exp._id === id ? { ...exp, ...updatedExperience } : exp
        ),
      })),
      removeExperience: (id) => set((state) => ({
        experience: state.experience.filter((exp) => exp._id !== id),
      })),

      setEducation: (education) => set({ education }),
      addEducation: (education) => set((state) => ({
        education: [...state.education, education],
      })),
      updateEducation: (id, updatedEducation) => set((state) => ({
        education: state.education.map((edu) =>
          edu._id === id ? { ...edu, ...updatedEducation } : edu
        ),
      })),
      removeEducation: (id) => set((state) => ({
        education: state.education.filter((edu) => edu._id !== id),
      })),

      setResearch: (research) => set({ research }),
      addResearch: (research) => set((state) => ({
        research: [...state.research, research],
      })),
      updateResearch: (id, updatedResearch) => set((state) => ({
        research: state.research.map((res) =>
          res._id === id ? { ...res, ...updatedResearch } : res
        ),
      })),
      removeResearch: (id) => set((state) => ({
        research: state.research.filter((res) => res._id !== id),
      })),

      setAchievements: (achievements) => set({ achievements }),
      addAchievement: (achievement) => set((state) => ({
        achievements: [...state.achievements, achievement],
      })),
      updateAchievement: (id, updatedAchievement) => set((state) => ({
        achievements: state.achievements.map((ach) =>
          ach._id === id ? { ...ach, ...updatedAchievement } : ach
        ),
      })),
      removeAchievement: (id) => set((state) => ({
        achievements: state.achievements.filter((ach) => ach._id !== id),
      })),

      setContact: (contact) => set({ contact }),

      resetStore: () => set(initialState),
    }),
    {
      name: 'portfolio-store',
    }
  )
);
