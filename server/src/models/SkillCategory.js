import mongoose from 'mongoose';

const skillCategorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    trim: true,
  },
  items: [{
    type: String,
    required: true,
    trim: true,
  }],
}, {
  timestamps: true,
});

// Ensure unique categories
skillCategorySchema.index({ category: 1 }, { unique: true });

export default mongoose.model('SkillCategory', skillCategorySchema);
