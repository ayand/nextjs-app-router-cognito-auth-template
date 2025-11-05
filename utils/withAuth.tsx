'use client';

import { useAuthenticator } from '@aws-amplify/ui-react-core';
import { getCurrentUser } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const withAuth = (WrappedComponent: any) => {
    const WrapperComponent = (props: any) => {
        const router = useRouter();
        const { user } = useAuthenticator((context) => [context.user]);

        useEffect(() => {
            const checkAuth = async () => {
                try {
                    await getCurrentUser();
                } catch (err) {
                    router.push('/login');
                }
            };

            checkAuth();
        }, [router, user]);

        return <WrappedComponent {...props} />;
    };

    return WrapperComponent;
};

export default withAuth;