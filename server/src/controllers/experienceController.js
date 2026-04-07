import Experience from '../models/Experience.js';

// Get all experience
export const getExperience = async (req, res) => {
  try {
    const experience = await Experience.find().sort({ startDate: -1 });
    res.json({
      success: true,
      data: experience,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Create new experience
export const createExperience = async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    
    res.status(201).json({
      success: true,
      data: experience,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Update experience
export const updateExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!experience) {
      return res.status(404).json({
        success: false,
        message: 'Experience not found',
      });
    }
    
    res.json({
      success: true,
      data: experience,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete experience
export const deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    
    if (!experience) {
      return res.status(404).json({
        success: false,
        message: 'Experience not found',
      });
    }
    
    res.json({
      success: true,
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
