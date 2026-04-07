import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    trim: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    trim: true,
  },
  current: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    required: true,
  },
  achievements: [{
    type: String,
    trim: true,
  }],
}, {
  timestamps: true,
});

// Sort by start date (descending)
experienceSchema.pre(/^find/, function() {
  this.sort({ startDate: -1 });
});

export default mongoose.model('Experience', experienceSchema);
