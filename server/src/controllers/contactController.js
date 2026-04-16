import Contact from '../models/Contact.js';
import nodemailer from 'nodemailer';

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

// Send contact email
export const sendContactEmail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_USER, // Send to your email
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #084A48; margin-bottom: 20px;">New Contact Form Submission</h2>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
              <p style="margin: 0; color: #333;"><strong>From:</strong> ${name}</p>
              <p style="margin: 5px 0; color: #333;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 5px 0; color: #333;"><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="background-color: #e9ecef; padding: 15px; border-radius: 5px;">
              <h3 style="color: #084A48; margin-top: 0;">Message:</h3>
              <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
              <p>This message was sent from your portfolio website contact form.</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.',
    });
  }
};
