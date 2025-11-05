'use client';

import { useAuthenticator } from '@aws-amplify/ui-react-core';
import { getCurrentUser } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const withAuth = (WrappedComponent: any) => {
    const WrapperComponent = (props: any) => {
        const router = useRouter();
        const { user } = useAuthenticator((context) => [context.user]);
        const [isAuthenticated, setIsAuthenticated] = useState(false);
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const checkAuth = async () => {
                try {
                    await getCurrentUser();
                    setIsAuthenticated(true);
                } catch (err) {
                    setIsAuthenticated(false);
                    router.push('/login');
                } finally {
                    setIsLoading(false);
                }
            };

            checkAuth();
        }, [router]);

        // Show loading spinner while checking authentication
        if (isLoading) {
            return (
                <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white via-blue-50 to-indigo-50">
                    <div className="text-center">
                        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <p className="mt-4 text-slate-600">Loading...</p>
                    </div>
                </div>
            );
        }

        // Only render the protected component if authenticated
        if (!isAuthenticated) {
            return null;
        }

        return <WrappedComponent {...props} />;
    };

    return WrapperComponent;
};

export default withAuth;