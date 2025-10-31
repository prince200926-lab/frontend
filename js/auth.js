// Check authentication
function checkAuth() {
    const token = localStorage.getItem('authToken');
    if (!token) {
        window.location.href = '/login.html';
        return false;
    }
    return true;
}

// Make authenticated request
async function fetchWithAuth(url, options = {}) {
    const token = localStorage.getItem('authToken');
    
    if (!options.headers) {
        options.headers = {};
    }
    
    options.headers['Authorization'] = `Bearer ${token}`;
    options.headers['Content-Type'] = 'application/json';
    
    const response = await fetch(url, options);
    
    // If unauthorized, redirect to login
    if (response.status === 401) {
        localStorage.clear();
        window.location.href = '/login.html';
        throw new Error('Session expired');
    }
    
    return response;
}

// Logout
function logout() {
    localStorage.clear();
    window.location.href = '/login.html';
}

// Get user info
function getUserInfo() {
    return {
        role: localStorage.getItem('userRole'),
        name: localStorage.getItem('userName'),
        email: localStorage.getItem('userEmail'),
        assignedClass: localStorage.getItem('assignedClass'),
        assignedSection: localStorage.getItem('assignedSection')
    };
}