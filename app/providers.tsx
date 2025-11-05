'use client';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';

// Configure Amplify immediately when this module loads (client-side only)
if (typeof window !== 'undefined') {
    Amplify.configure({
        Auth: {
            Cognito: {
                userPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_POOL_ID!,
                userPoolClientId: process.env.NEXT_PUBLIC_AWS_COGNITO_APP_CLIENT_ID!,
            },
        },
    }, { ssr: true });
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    return (
        <Authenticator.Provider>
            {children}
        </Authenticator.Provider>
    );
}

