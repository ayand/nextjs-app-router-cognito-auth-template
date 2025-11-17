'use client';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCurrentUser, signOut } from 'aws-amplify/auth';

function AuthContent() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home if already authenticated
    router.push('/');
  }, [router]);

  return (
    <div className="text-center py-4">
      <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
        <span className="sr-only">Loading...</span>
      </div>
      <p className="mt-3 text-slate-600">Redirecting to dashboard...</p>
    </div>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated on page load
    const checkExistingAuth = async () => {
      try {
        const user = await getCurrentUser();
        if (user) {
          // User is already logged in, redirect to home
          router.push('/');
        }
      } catch (error) {
        // User is not authenticated, stay on login page
      } finally {
        setIsCheckingAuth(false);
      }
    };

    checkExistingAuth();
  }, [router]);

  // Show loading while checking authentication status
  if (isCheckingAuth) {
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
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-50 py-12">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />
      </div>

      {/* Login Container */}
      <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6">
        <div className="mb-8 w-full text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-sm font-medium text-blue-700 backdrop-blur-sm shadow-sm">
            <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            Secure Authentication
          </div>
          <h1 className="mb-3 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Welcome Back
          </h1>
          <p className="text-slate-600">
            Sign in to access your account
          </p>
        </div>

        {/* Authenticator with custom styling */}
        <div className="w-full">
          <Authenticator 
            hideSignUp={false}
            loginMechanisms={['email']}
            signUpAttributes={[
              'name',
            ]}
          >
            {() => <AuthContent />}
          </Authenticator>
        </div>

        {/* Footer text */}
        <p className="mt-6 w-full text-center text-sm text-slate-600">
          Protected by AWS Cognito
        </p>
      </div>

      {/* Custom styles for Authenticator */}
      <style jsx global>{`
        /* Remove default Authenticator container styles */
        [data-amplify-authenticator] {
          --amplify-components-authenticator-router-box-shadow: none;
          --amplify-components-authenticator-router-border-width: 0;
          --amplify-components-button-primary-background-color: rgb(34 197 94);
          --amplify-components-button-primary-hover-background-color: rgb(22 163 74);
          --amplify-components-fieldcontrol-focus-border-color: rgb(34 197 94);
          --amplify-components-tabs-item-active-color: rgb(34 197 94);
          --amplify-components-tabs-item-active-border-color: rgb(34 197 94);
          --amplify-colors-background-primary: transparent;
        }

        [data-amplify-authenticator] [data-amplify-router] {
          border-radius: 1rem;
          border: 1px solid rgb(226 232 240);
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          padding: 2rem;
        }

        [data-amplify-authenticator] .amplify-button--primary {
          border-radius: 9999px;
          font-weight: 600;
          transition: all 0.2s;
          padding: 0.75rem 2rem;
        }

        [data-amplify-authenticator] .amplify-button--primary:hover {
          transform: scale(1.02);
          box-shadow: 0 10px 15px -3px rgb(34 197 94 / 0.3);
        }

        [data-amplify-authenticator] .amplify-input,
        [data-amplify-authenticator] .amplify-select {
          border-radius: 0.75rem;
          transition: all 0.2s;
          padding: 0.75rem 1rem;
        }

        [data-amplify-authenticator] .amplify-input:focus,
        [data-amplify-authenticator] .amplify-select:focus {
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);
        }

        [data-amplify-authenticator] .amplify-tabs {
          margin-bottom: 1.5rem;
        }

        [data-amplify-authenticator] .amplify-tabs-item {
          font-weight: 500;
          padding: 0.75rem 1.5rem;
        }

        [data-amplify-authenticator] .amplify-field-group__label {
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        [data-amplify-authenticator] .amplify-button--link {
          color: rgb(34 197 94);
          font-weight: 500;
        }

        [data-amplify-authenticator] .amplify-button--link:hover {
          color: rgb(22 163 74);
        }
      `}</style>
    </div>
  );
}


