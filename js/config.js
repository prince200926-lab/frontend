// js/config.js
const API_BASE_URL = 'https://your-backend.onrender.com';

const API = {
    login: `${API_BASE_URL}/api/login`,
    dashboard: `${API_BASE_URL}/api/dashboard`,
    getStudent: (cls, sec, key) => `${API_BASE_URL}/api/students/${cls}/${sec}/${key}`,
    addStudent: `${API_BASE_URL}/api/students/add`,
    updateStudent: (cls, sec, key) => `${API_BASE_URL}/api/students/${cls}/${sec}/${key}`,
    deleteStudent: (cls, sec, key) => `${API_BASE_URL}/api/students/${cls}/${sec}/${key}`
};