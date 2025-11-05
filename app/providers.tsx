'use client';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import { useEffect } from 'react';

export function AuthProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Configure Amplify on the client side
        Amplify.configure({
            Auth: {
                Cognito: {
                    userPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_POOL_ID!,
                    userPoolClientId: process.env.NEXT_PUBLIC_AWS_COGNITO_APP_CLIENT_ID!,
                },
            },
        });
    }, []);

    return (
        <Authenticator.Provider>
            {children}
        </Authenticator.Provider>
    );
}

