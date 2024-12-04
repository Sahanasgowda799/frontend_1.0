import { useState } from 'react';
import { loginUser } from '../api/authApi';

interface UseLoginReturn {
    login: (email: string, password: string) => Promise<void>;
    loading: boolean;
    error: string | null;
}

const useRegister = (): UseLoginReturn => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = async (email: string, password: string): Promise<void> => {
        setLoading(true);
        setError(null);

        try {
            const userData = await loginUser({ email, password });
            localStorage.setItem('authToken', userData.accessToken);
        } catch (error) {
            setError((error as Error).message || 'Login failed');
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return { login, loading, error };
};

export default useRegister;
