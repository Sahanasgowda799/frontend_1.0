import React, { useState } from 'react';
import useRegister from '../hooks/useRegister';

const Register = () => {
    const { register, loading, error } = useRegister();
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await register(name, role, email, password);
            console.log('Registered successfully');
        } catch (err) {
            console.error('Registration failed:', err);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit" disabled={loading}>
                {loading ? 'Registering...' : 'Register'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default Register;
