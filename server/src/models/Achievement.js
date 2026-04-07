import mongoose from 'mongoose';

const achievementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  type: {
    type: String,
    enum: ['award', 'certification', 'recognition'],
    required: true,
  },
  issuer: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true,
});

// Sort by year (descending)
achievementSchema.pre(/^find/, function() {
  this.sort({ year: -1 });
});

export default mongoose.model('Achievement', achievementSchema);
