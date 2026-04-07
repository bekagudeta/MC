import SkillCategory from '../models/SkillCategory.js';

// Get all skill categories
export const getSkills = async (req, res) => {
  try {
    const skills = await SkillCategory.find().sort({ category: 1 });
    res.json({
      success: true,
      data: skills,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Create new skill category
export const createSkillCategory = async (req, res) => {
  try {
    const skillCategory = new SkillCategory(req.body);
    await skillCategory.save();
    
    res.status(201).json({
      success: true,
      data: skillCategory,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Skill category already exists',
      });
    }
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Update skill category
export const updateSkillCategory = async (req, res) => {
  try {
    const skillCategory = await SkillCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!skillCategory) {
      return res.status(404).json({
        success: false,
        message: 'Skill category not found',
      });
    }
    
    res.json({
      success: true,
      data: skillCategory,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete skill category
export const deleteSkillCategory = async (req, res) => {
  try {
    const skillCategory = await SkillCategory.findByIdAndDelete(req.params.id);
    
    if (!skillCategory) {
      return res.status(404).json({
        success: false,
        message: 'Skill category not found',
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
