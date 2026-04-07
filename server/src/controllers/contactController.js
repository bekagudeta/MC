import Contact from '../models/Contact.js';

// Get contact information
export const getContact = async (req, res) => {
  try {
    const contact = await Contact.getContact();
    res.json({
      success: true,
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update contact information
export const updateContact = async (req, res) => {
  try {
    const contact = await Contact.getContact();
    const updatedContact = await Contact.findByIdAndUpdate(
      contact._id,
      req.body,
      { new: true, runValidators: true }
    );
    
    res.json({
      success: true,
      data: updatedContact,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
