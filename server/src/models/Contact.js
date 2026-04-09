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
  researchGate: {
    type: String,
    trim: true,
  },
  orcid: {
    type: String,
    trim: true,
  },
  googleScholar: {
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
      linkedin: 'https://www.linkedin.com',
      github: 'https://github.com',
      researchGate: 'https://www.researchgate.net',
      orcid: 'https://orcid.org',
      googleScholar: 'https://scholar.google.com',
      location: 'Your Location',
      additionalInfo: 'Available for consulting and research collaboration.',
    });
  }
  return contact;
};

export default mongoose.model('Contact', contactSchema);
