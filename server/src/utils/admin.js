import bcrypt from 'bcryptjs';
import User from '../models/User.js';

export const createAdminIfMissing = async () => {
  const username = process.env.ADMIN_USERNAME?.trim() || 'admin';
  const email = process.env.ADMIN_EMAIL?.trim()?.toLowerCase() || 'admin@portfolio.com';
  const password = process.env.ADMIN_PASSWORD;

  const existingAdmin = await User.findOne({ role: 'admin' });
  if (existingAdmin) {
    let updated = false;

    if (existingAdmin.username !== username) {
      existingAdmin.username = username;
      updated = true;
    }

    if (existingAdmin.email !== email) {
      existingAdmin.email = email;
      updated = true;
    }

    if (password && !(await bcrypt.compare(password, existingAdmin.password))) {
      existingAdmin.password = password;
      updated = true;
    }

    if (updated) {
      await existingAdmin.save();
      console.log('Admin account updated from .env values.');
    }

    return;
  }

  const adminPassword = password || 'admin123';
  const adminUser = new User({
    username,
    email,
    password: adminPassword,
    role: 'admin',
  });

  await adminUser.save();
  console.log('Admin account created automatically.');
  console.log('Admin username:', username);
  console.log('Admin email:', email);

  if (adminPassword === 'admin123') {
    console.warn('WARNING: ADMIN_PASSWORD is using the default value. Set ADMIN_PASSWORD in .env before deployment.');
  }
};
