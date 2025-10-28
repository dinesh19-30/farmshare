const API_URL = 'http://localhost:5000/api';

// Test registration
fetch(`${API_URL}/auth/register`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: "Test User",
    email: "test@example.com",
    password: "password123",
    role: "farmer"
  }),
})
.then(response => response.json())
.then(data => console.log('Registration response:', data))
.catch(error => console.error('Registration error:', error));