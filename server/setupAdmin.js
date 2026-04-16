import 'dotenv/config';
import connectDB from './src/config/database.js';
import { createAdminIfMissing } from './src/utils/admin.js';

const createAdminUser = async () => {
  try {
    await connectDB();
    await createAdminIfMissing();
  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  } finally {
    process.exit(0);
  }
};

createAdminUser();
