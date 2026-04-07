import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
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
  linkedin: {
    type: String,
    trim: true,
  },
  github: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  additionalInfo: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true,
});

// Create singleton - only one contact document should exist
contactSchema.statics.getContact = async function() {
  const contact = await this.findOne();
  if (!contact) {
    // Create default contact if none exists
    return await this.create({
      email: 'your.email@example.com',
      phone: '+1234567890',
      location: 'Your Location',
    });
  }
  return contact;
};

export default mongoose.model('Contact', contactSchema);
