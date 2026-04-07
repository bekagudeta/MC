import express from 'express';
import { 
  getResearch, 
  createResearch, 
  updateResearch, 
  deleteResearch 
} from '../controllers/researchController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .get(getResearch)
  .post(protect, createResearch);

router.route('/:id')
  .put(protect, updateResearch)
  .delete(protect, deleteResearch);

export default router;
