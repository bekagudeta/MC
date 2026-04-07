import Education from '../models/Education.js';

// Get all education
export const getEducation = async (req, res) => {
  try {
    const education = await Education.find().sort({ year: -1 });
    res.json({
      success: true,
      data: education,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Create new education
export const createEducation = async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    
    res.status(201).json({
      success: true,
      data: education,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Update education
export const updateEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!education) {
      return res.status(404).json({
        success: false,
        message: 'Education not found',
      });
    }
    
    res.json({
      success: true,
      data: education,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete education
export const deleteEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);
    
    if (!education) {
      return res.status(404).json({
        success: false,
        message: 'Education not found',
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
