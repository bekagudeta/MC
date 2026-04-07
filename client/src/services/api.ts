import axios from 'axios';
import { ApiResponse, About, SkillCategory, Experience, Education, Research, Achievement, Contact, LoginCredentials, AuthResponse } from '../types/portfolio';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

// Portfolio API calls
export const portfolioApi = {
  // About
  getAbout: (): Promise<ApiResponse<About>> => api.get('/about').then(res => res.data),
  updateAbout: (data: Partial<About>): Promise<ApiResponse<About>> => 
    api.put('/about', data).then(res => res.data),

  // Skills
  getSkills: (): Promise<ApiResponse<SkillCategory[]>> => api.get('/skills').then(res => res.data),
  createSkillCategory: (data: Omit<SkillCategory, '_id'>): Promise<ApiResponse<SkillCategory>> => 
    api.post('/skills', data).then(res => res.data),
  updateSkillCategory: (id: string, data: Partial<SkillCategory>): Promise<ApiResponse<SkillCategory>> => 
    api.put(`/skills/${id}`, data).then(res => res.data),
  deleteSkillCategory: (id: string): Promise<ApiResponse<void>> => 
    api.delete(`/skills/${id}`).then(res => res.data),

  // Experience
  getExperience: (): Promise<ApiResponse<Experience[]>> => api.get('/experience').then(res => res.data),
  createExperience: (data: Omit<Experience, '_id'>): Promise<ApiResponse<Experience>> => 
    api.post('/experience', data).then(res => res.data),
  updateExperience: (id: string, data: Partial<Experience>): Promise<ApiResponse<Experience>> => 
    api.put(`/experience/${id}`, data).then(res => res.data),
  deleteExperience: (id: string): Promise<ApiResponse<void>> => 
    api.delete(`/experience/${id}`).then(res => res.data),

  // Education
  getEducation: (): Promise<ApiResponse<Education[]>> => api.get('/education').then(res => res.data),
  createEducation: (data: Omit<Education, '_id'>): Promise<ApiResponse<Education>> => 
    api.post('/education', data).then(res => res.data),
  updateEducation: (id: string, data: Partial<Education>): Promise<ApiResponse<Education>> => 
    api.put(`/education/${id}`, data).then(res => res.data),
  deleteEducation: (id: string): Promise<ApiResponse<void>> => 
    api.delete(`/education/${id}`).then(res => res.data),

  // Research
  getResearch: (): Promise<ApiResponse<Research[]>> => api.get('/research').then(res => res.data),
  createResearch: (data: Omit<Research, '_id'>): Promise<ApiResponse<Research>> => 
    api.post('/research', data).then(res => res.data),
  updateResearch: (id: string, data: Partial<Research>): Promise<ApiResponse<Research>> => 
    api.put(`/research/${id}`, data).then(res => res.data),
  deleteResearch: (id: string): Promise<ApiResponse<void>> => 
    api.delete(`/research/${id}`).then(res => res.data),

  // Achievements
  getAchievements: (): Promise<ApiResponse<Achievement[]>> => api.get('/achievements').then(res => res.data),
  createAchievement: (data: Omit<Achievement, '_id'>): Promise<ApiResponse<Achievement>> => 
    api.post('/achievements', data).then(res => res.data),
  updateAchievement: (id: string, data: Partial<Achievement>): Promise<ApiResponse<Achievement>> => 
    api.put(`/achievements/${id}`, data).then(res => res.data),
  deleteAchievement: (id: string): Promise<ApiResponse<void>> => 
    api.delete(`/achievements/${id}`).then(res => res.data),

  // Contact
  getContact: (): Promise<ApiResponse<Contact>> => api.get('/contact').then(res => res.data),
  updateContact: (data: Partial<Contact>): Promise<ApiResponse<Contact>> => 
    api.put('/contact', data).then(res => res.data),

  // Full portfolio data
  getFullPortfolio: (): Promise<ApiResponse<any>> => api.get('/portfolio').then(res => res.data),
};

// Auth API calls
export const authApi = {
  login: (credentials: LoginCredentials): Promise<ApiResponse<AuthResponse>> => 
    api.post('/auth/login', credentials).then(res => res.data),
  logout: (): Promise<ApiResponse<void>> => 
    api.post('/auth/logout').then(res => res.data),
  me: (): Promise<ApiResponse<any>> => 
    api.get('/auth/me').then(res => res.data),
};

export default api;
