import express from 'express';
import { getContact, updateContact, sendContactEmail } from '../controllers/contactController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .get(getContact)
  .put(protect, updateContact);

router.post('/send-email', sendContactEmail);

export default router;
