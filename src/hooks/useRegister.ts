import { useState } from 'react';
import { registerUser } from '../api/authApi';

interface UseRegisterReturn {
    register: (name: string, role: string, email: string, password: string) => Promise<void>;
    loading: boolean;
    error: string | null;
}

const useRegister = (): UseRegisterReturn => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const register = async (name: string, role: string, email: string, password: string): Promise<void> => {
        setLoading(true);
        setError(null);

        try {
            await registerUser({ name, role, email, password });
        } catch (error) {
            setError((error as Error).message || 'Registration failed');
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return { register, loading, error };
};

export default useRegister;
