import About from '../models/About.js';

// Get about information
export const getAbout = async (req, res) => {
  try {
    const about = await About.getAbout();
    res.json({
      success: true,
      data: about,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update about information
export const updateAbout = async (req, res) => {
  try {
    const about = await About.getAbout();
    const updatedAbout = await About.findByIdAndUpdate(
      about._id,
      req.body,
      { new: true, runValidators: true }
    );
    
    res.json({
      success: true,
      data: updatedAbout,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
