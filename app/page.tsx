'use client';

import withAuth from '@/utils/withAuth';
import { signOut } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';

export default withAuth(function HomePage() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-50">
      {/* Logout button */}
      <button
        onClick={handleLogout}
        className="absolute top-6 right-6 z-20 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/90 px-5 py-2.5 text-sm font-medium text-red-600 backdrop-blur-sm transition-all hover:border-red-300 hover:bg-red-50 hover:shadow-lg"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        Log Out
      </button>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-sm font-medium text-blue-700 backdrop-blur-sm shadow-sm">
          <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
          Powered by Next.js & AWS Cognito
        </div>

        <h1 className="mb-6 max-w-4xl bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl md:text-8xl">
          Welcome Home
        </h1>

        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
          A modern authentication template built with Next.js App Router and AWS Amplify.
          <br />
          <span className="text-slate-500">
            Start building your secure application today.
          </span>
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
          
          <button className="rounded-full border-2 border-slate-300 bg-white/90 px-8 py-4 text-base font-semibold text-slate-700 backdrop-blur-sm transition-all hover:border-slate-400 hover:bg-white">
            Learn More
          </button>
        </div>

        {/* Features grid */}
        <div className="mt-24 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 backdrop-blur-sm transition-all hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900">
              Secure Authentication
            </h3>
            <p className="text-sm text-slate-600">
              Enterprise-grade security powered by AWS Cognito
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 backdrop-blur-sm transition-all hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900">
              Lightning Fast
            </h3>
            <p className="text-sm text-slate-600">
              Built on Next.js 15 with App Router for optimal performance
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 backdrop-blur-sm transition-all hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900">
              Ready to Customize
            </h3>
            <p className="text-sm text-slate-600">
              Beautiful UI components styled with Tailwind CSS
            </p>
          </div>
        </div>
      </main>
    </div>
  );
});
