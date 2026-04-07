import express from 'express';
import { getContact, updateContact } from '../controllers/contactController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .get(getContact)
  .put(protect, updateContact);

export default router;
