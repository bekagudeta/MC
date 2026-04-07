import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import path from 'path';

// Import routes
import aboutRoutes from './routes/about.js';
import skillsRoutes from './routes/skills.js';
import experienceRoutes from './routes/experience.js';
import educationRoutes from './routes/education.js';
import researchRoutes from './routes/research.js';
import achievementsRoutes from './routes/achievements.js';
import contactRoutes from './routes/contact.js';
import authRoutes from './routes/auth.js';

// Import database connection
import connectDB from './config/database.js';

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100, // limit each IP to 100 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again later.',
  },
});

// Middleware
app.use(helmet());
app.use(compression());
app.use(morgan('combined'));
app.use(limiter);
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static files for uploads
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Routes
app.use('/api/about', aboutRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/research', researchRoutes);
app.use('/api/achievements', achievementsRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);

// Full portfolio endpoint
app.get('/api/portfolio', async (req, res) => {
  try {
    const About = (await import('./models/About.js')).default;
    const SkillCategory = (await import('./models/SkillCategory.js')).default;
    const Experience = (await import('./models/Experience.js')).default;
    const Education = (await import('./models/Education.js')).default;
    const Research = (await import('./models/Research.js')).default;
    const Achievement = (await import('./models/Achievement.js')).default;
    const Contact = (await import('./models/Contact.js')).default;

    const [about, skills, experience, education, research, achievements, contact] = await Promise.all([
      About.getAbout(),
      SkillCategory.find().sort({ category: 1 }),
      Experience.find().sort({ startDate: -1 }),
      Education.find().sort({ year: -1 }),
      Research.find().sort({ year: -1 }),
      Achievement.find().sort({ year: -1 }),
      Contact.getContact(),
    ]);

    res.json({
      success: true,
      data: {
        about,
        skills,
        experience,
        education,
        research,
        achievements,
        contact,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong on the server',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
