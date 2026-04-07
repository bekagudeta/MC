import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: true,
    trim: true,
  },
  institution: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: String,
    required: true,
    trim: true,
  },
  gpa: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true,
});

// Sort by year (descending)
educationSchema.pre(/^find/, function() {
  this.sort({ year: -1 });
});

export default mongoose.model('Education', educationSchema);
