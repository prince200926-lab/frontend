// Check auth on page load
if (!checkAuth()) {
    throw new Error('Not authenticated');
}

// Load dashboard data
async function loadDashboard() {
    try {
        const response = await fetchWithAuth(API.dashboard);
        const data = await response.json();
        
        if (data.success) {
            if (data.role === 'teacher') {
                renderTeacherDashboard(data);
            } else if (data.role === 'counselor') {
                renderCounselorDashboard(data);
            }
        } else {
            alert('Error loading dashboard');
        }
    } catch (error) {
        console.error('Dashboard error:', error);
        alert('Failed to load dashboard');
    }
}

function renderTeacherDashboard(data) {
    // Render your teacher dashboard UI
    // Use data.students, data.className, etc.
}

function renderCounselorDashboard(data) {
    // Render your counselor dashboard UI
    // Use data.students, data.classes, etc.
}

// Load on page ready
document.addEventListener('DOMContentLoaded', loadDashboard);