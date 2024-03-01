import axios from 'axios';

export async function Register(formData) {
    try {
        const response = await axios.post('http://localhost:3000/users', formData, {
            headers: {'Content-Type': 'application/json'}
        });
        return response.data;
    } catch (error) {
        console.error('Error signing up:', error);
        throw error;
    }
}
export async function loginUser(email, password) {
    try {
        const response = await axios.get('http://localhost:3000/users');
        const users = response.data;
        
        for (const user of users) {
            if (user.email === email && user.password === password) {
                return true; // Login successful
            }
        }
        
        return false; // No matching user found
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
}