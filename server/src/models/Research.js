import mongoose from 'mongoose';

const researchSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  journal: {
    type: String,
    trim: true,
  },
  year: {
    type: Number,
    required: true,
  },
  link: {
    type: String,
    trim: true,
  },
  coAuthors: [{
    type: String,
    trim: true,
  }],
  status: {
    type: String,
    enum: ['published', 'in-progress', 'submitted'],
    default: 'in-progress',
  },
}, {
  timestamps: true,
});

// Sort by year (descending)
researchSchema.pre(/^find/, function() {
  this.sort({ year: -1 });
});

export default mongoose.model('Research', researchSchema);
