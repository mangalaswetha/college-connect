import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Auth APIs
export const register = (userData) => API.post('/auth/register', userData);
export const login = (credentials) => API.post('/auth/login', credentials);

// Marketplace APIs
export const getMarketplaceItems = (params) => API.get('/marketplace', { params });
export const createMarketplaceItem = (formData) => API.post('/marketplace', formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
});

// Lost & Found APIs
export const getLostFoundItems = (params) => API.get('/lostandfound', { params });
export const createLostFoundItem = (formData) => API.post('/lostandfound', formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
});

// Study Groups APIs
export const getStudyGroups = (params) => API.get('/studygroups', { params });
export const createStudyGroup = (data) => API.post('/studygroups', data);
export const joinStudyGroup = (groupId, userId) => API.post(`/studygroups/${groupId}/join`, { userId });

// Events APIs
export const getEvents = (params) => API.get('/events', { params });
export const createEvent = (data) => API.post('/events', data);
export const registerForEvent = (eventId, userId) => API.post(`/events/${eventId}/register`, { userId });

// Notices APIs
export const getNotices = (params) => API.get('/notices', { params });
export const createNotice = (formData) => API.post('/notices', formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
});

// Notes APIs
export const getNotes = (params) => API.get('/notes', { params });
export const createNote = (formData) => API.post('/notes', formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
});
export const voteNote = (noteId, userId, voteType) => API.post(`/notes/${noteId}/vote`, { userId, voteType });

// Projects APIs
export const getProjects = (params) => API.get('/projects', { params });
export const createProject = (data) => API.post('/projects', data);
export const joinProject = (projectId, userId) => API.post(`/projects/${projectId}/join`, { userId });

// Hackathon Teams APIs
export const getHackathonTeams = (params) => API.get('/hackathonteams', { params });
export const createHackathonTeam = (data) => API.post('/hackathonteams', data);
export const joinHackathonTeam = (teamId, userId) => API.post(`/hackathonteams/${teamId}/join`, { userId });

// Feedback APIs
export const submitFeedback = (data) => API.post('/feedback', data);
export const getFeedback = (params) => API.get('/feedback', { params });

// Skill Exchange APIs
export const getSkillExchanges = (params) => API.get('/skillexchange', { params });
export const createSkillExchange = (data) => API.post('/skillexchange', data);

// Dashboard APIs
export const getDashboardStats = (userId) => API.get(`/dashboard/${userId}`);

export default API;