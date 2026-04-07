import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  bio: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  linkedin: {
    type: String,
    trim: true,
  },
  github: {
    type: String,
    trim: true,
  },
  motto: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

// Create singleton - only one about document should exist
aboutSchema.statics.getAbout = async function() {
  const about = await this.findOne();
  if (!about) {
    // Create default about if none exists
    return await this.create({
      name: 'Your Name',
      title: 'Your Title',
      bio: 'Your bio goes here...',
      profileImage: '/default-avatar.png',
      email: 'your.email@example.com',
      phone: '+1234567890',
      location: 'Your Location',
      motto: 'Your Motto',
      description: 'Your description goes here...',
    });
  }
  return about;
};

export default mongoose.model('About', aboutSchema);
