import mongoose from 'mongoose';
import About from './src/models/About.js';
import SkillCategory from './src/models/SkillCategory.js';
import Experience from './src/models/Experience.js';
import Education from './src/models/Education.js';
import Research from './src/models/Research.js';
import Achievement from './src/models/Achievement.js';
import Contact from './src/models/Contact.js';
import 'dotenv/config';

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await About.deleteMany({});
    await SkillCategory.deleteMany({});
    await Experience.deleteMany({});
    await Education.deleteMany({});
    await Research.deleteMany({});
    await Achievement.deleteMany({});
    await Contact.deleteMany({});

    // About data
    const aboutData = {
      name: "Mulgeta Mersha Cheru",
      title: "University Lecturer & Structural Engineer",
      motto: "Challenge. Change. Impact!",
      bio: "Dedicated structural engineer and educator with 6+ years of experience in university lecturing, department leadership, and construction engineering. Passionate about advancing structural engineering education and research.",
      profileImage: "/images/mulgeta-profile.jpg",
      email: "mulgeta_mersha@slu.edu.et",
      phone: "+251 910 074 638",
      location: "Fiche, Ethiopia",
      linkedin: "https://www.linkedin.com/in/mulgeta123",
      github: "https://github.com/mulgeta123",
      description: "Experienced structural engineer and university lecturer with expertise in structural analysis, composite materials, and educational leadership. Committed to advancing engineering education through innovative teaching methods and cutting-edge research."
    };

    await About.create(aboutData);
    console.log('About data created');

    // Skills data
    const skillsData = [
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
    ];

    await SkillCategory.insertMany(skillsData);
    console.log('Skills data created');

    // Experience data
    const experienceData = [
      {
        company: "Salale University",
        role: "University Lecturer in Engineering",
        startDate: "2025-09-01",
        endDate: null,
        current: true,
        description: "Teaching structural engineering courses and conducting research",
        achievements: [
          "Course Preparation: Designing course syllabi, lesson plans, and assessment materials",
          "Lecturing: Delivering lectures in structural analysis, design, and mechanics",
          "Research: Conducting research in structural engineering and composite materials",
          "Student Supervision: Mentoring undergraduate and graduate students",
          "Academic Service: Participating in curriculum development and departmental meetings"
        ]
      },
      {
        company: "Oda Bultum University Project Office",
        role: "Construction Design Engineer", 
        startDate: "2021-09-01",
        endDate: "2025-08-31",
        current: false,
        description: "Leading construction design and project management",
        achievements: [
          "Contract administration and bid process management",
          "Construction supervision and quality control",
          "Project planning and coordination",
          "Technical specification development",
          "Budget management and cost control"
        ]
      }
    ];

    await Experience.insertMany(experienceData);
    console.log('Experience data created');

    // Education data
    const educationData = [
      {
        degree: "Master of Science in Structural Engineering",
        institution: "Jimma University",
        year: "2020",
        gpa: "3.91/4.00",
        description: "Thesis: The effects of different steel sections on the performance of encased composite columns under cyclic lateral loads"
      },
      {
        degree: "Bachelor of Science in Civil Engineering",
        institution: "Jimma University", 
        year: "2016",
        gpa: "3.74/4.00",
        description: "Thesis: Design and Analysis of basement plus ground plus six floor mixed use building"
      }
    ];

    await Education.insertMany(educationData);
    console.log('Education data created');

    // Research data
    const researchData = [
      {
        title: "The effects of different steel sections on the performance of encased composite columns under cyclic lateral loads",
        description: "Investigation of fully encased composite columns subjected to horizontal cyclic loads using finite element simulation",
        journal: "Results in Engineering (Elsevier)",
        year: "2024",
        link: "https://doi.org/10.1016/j.rineng.2024.103510",
        coAuthors: "Regasa Yadeta Sembeta, Kefiyalew Zerfu, Mulgeta Mersha, Elmer C Agon",
        status: "published"
      }
    ];

    await Research.insertMany(researchData);
    console.log('Research data created');

    // Achievements data
    const achievementsData = [
      {
        title: "Best Pre-Engineering Student Award",
        year: "2012",
        description: "Recognition for outstanding academic performance in pre-engineering program",
        type: "award",
        issuer: "Jimma University"
      }
    ];

    await Achievement.insertMany(achievementsData);
    console.log('Achievements data created');

    // Contact data
    const contactData = {
      email: "mulgeta_mersha@slu.edu.et",
      phone: "+251 910 074 638",
      linkedin: "https://www.linkedin.com/in/mulgeta123",
      github: "https://github.com/mulgeta123",
      location: "Fiche, Ethiopia",
      additionalInfo: "Available for consulting, research collaboration, and academic opportunities"
    };

    await Contact.create(contactData);
    console.log('Contact data created');

    console.log('All data seeded successfully!');

  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit(0);
  }
};

seedData();
