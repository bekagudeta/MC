import Research from '../models/Research.js';

// Get all research
export const getResearch = async (req, res) => {
  try {
    const research = await Research.find().sort({ year: -1 });
    res.json({
      success: true,
      data: research,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Create new research
export const createResearch = async (req, res) => {
  try {
    const research = new Research(req.body);
    await research.save();
    
    res.status(201).json({
      success: true,
      data: research,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Update research
export const updateResearch = async (req, res) => {
  try {
    const research = await Research.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!research) {
      return res.status(404).json({
        success: false,
        message: 'Research not found',
      });
    }
    
    res.json({
      success: true,
      data: research,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete research
export const deleteResearch = async (req, res) => {
  try {
    const research = await Research.findByIdAndDelete(req.params.id);
    
    if (!research) {
      return res.status(404).json({
        success: false,
        message: 'Research not found',
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
