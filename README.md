# AWS Cognito Authentication Template

A modern, production-ready authentication template built with Next.js 15 (App Router), AWS Amplify, and AWS Cognito. Features a beautiful, responsive UI with glassmorphism design and enterprise-grade security.

## ✨ Features

- 🔐 **AWS Cognito Authentication** - Enterprise-grade user authentication and authorization
- 🎨 **Beautiful UI** - Modern glassmorphism design with Tailwind CSS
- ⚡ **Next.js 15 App Router** - Latest Next.js features with optimal performance
- 🛡️ **Protected Routes** - HOC-based route protection with `withAuth`
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🎯 **TypeScript** - Type-safe code throughout
- 🔄 **Auto-redirect** - Smart routing after authentication
- 💅 **Custom Styled Authenticator** - Branded AWS Amplify UI components

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm
- An AWS account

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd nextjs-app-router-cognito-auth-template
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set Up AWS Cognito

#### Create a Cognito User Pool

1. Go to [AWS Cognito Console](https://console.aws.amazon.com/cognito/home)
2. Click **"Create user pool"**

#### Configure Sign-in Experience
- **Sign-in options**: Email (recommended) or Username
- Click **Next**

#### Configure Security Requirements
- **Password policy**: Use defaults or customize
- **Multi-factor authentication**: Optional
- Click **Next**

#### Configure Sign-up Experience
- **Self-registration**: Enable "Allow users to sign themselves up"
- **Required attributes**: Add any optional attributes you need
- Click **Next**

#### Configure Message Delivery
- **Email provider**: Choose "Send email with Cognito" (for testing) or configure SES
- Click **Next**

#### Integrate Your App
- **User pool name**: `cognito-auth-template` (or your choice)
- **App client name**: `cognito-auth-client`
- **Client secret**: ⚠️ **DO NOT generate a client secret** (must be a public client)
- Click **Next**

#### Review and Create
- Review your settings and click **Create user pool**

#### Get Your Credentials

After creating the user pool:

1. **User Pool ID**:
   - In your user pool overview, copy the **User pool ID** (format: `us-east-1_xxxxxxxxx`)

2. **App Client ID**:
   - Go to **App integration** tab
   - Scroll to **App clients and analytics**
   - Click on your app client
   - Copy the **Client ID**

### 4. Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
# AWS Cognito Configuration
# IMPORTANT: These must be prefixed with NEXT_PUBLIC_ to work in the browser

# Your Cognito User Pool ID (format: us-east-1_xxxxxxxxx)
NEXT_PUBLIC_AWS_COGNITO_POOL_ID=us-east-1_xxxxxxxxx

# Your Cognito App Client ID (format: alphanumeric string)
NEXT_PUBLIC_AWS_COGNITO_APP_CLIENT_ID=your_client_id_here

# Optional: AWS Region (default is extracted from Pool ID)
NEXT_PUBLIC_AWS_COGNITO_REGION=us-east-1
```

⚠️ **Important**: 
- Environment variables for client-side code **must** be prefixed with `NEXT_PUBLIC_`
- Never commit `.env.local` to version control (it's in `.gitignore`)
- Replace the placeholder values with your actual Cognito credentials

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

### 6. Test the Authentication

1. Navigate to `/login`
2. Click **"Create Account"** tab
3. Sign up with an email address
4. Check your email for verification code (check spam folder)
5. Verify your email and sign in
6. You'll be redirected to the protected home page

## 📁 Project Structure

```
cognito-auth-template/
├── app/
│   ├── layout.tsx           # Root layout (Server Component)
│   ├── page.tsx             # Protected home page
│   ├── providers.tsx        # Auth provider with Amplify config
│   ├── login/
│   │   └── page.tsx         # Login/signup page
│   └── globals.css          # Global styles
├── utils/
│   ├── aws/
│   │   └── Amplify.ts       # Amplify configuration (legacy)
│   └── withAuth.tsx         # HOC for route protection
├── .env.local               # Environment variables (create this)
├── next.config.ts           # Next.js configuration
└── README.md                # You are here!
```

## 🔒 Route Protection

Use the `withAuth` HOC to protect pages:

```tsx
'use client';

import withAuth from '@/utils/withAuth';

function ProtectedPage() {
  return <div>This page requires authentication</div>;
}

export default withAuth(ProtectedPage);
```

Unauthenticated users will be automatically redirected to `/login`.

## 🎨 Customization

### Styling the Authenticator

Edit the `<style jsx global>` block in `app/login/page.tsx` to customize the Amplify Authenticator appearance:

```css
[data-amplify-authenticator] {
  --amplify-components-button-primary-background-color: rgb(37 99 235);
  /* Add more CSS variables */
}
```

### Modifying Colors

The project uses a light blue/indigo gradient theme. Update the Tailwind classes in:
- `app/page.tsx` - Home page colors
- `app/login/page.tsx` - Login page colors

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_AWS_COGNITO_POOL_ID`
   - `NEXT_PUBLIC_AWS_COGNITO_APP_CLIENT_ID`
4. Deploy!

### Other Platforms

Make sure to:
- Set the environment variables
- Configure the build command: `npm run build`
- Set the output directory: `.next`

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: AWS Cognito + AWS Amplify v6
- **UI Components**: AWS Amplify UI React
- **Icons**: Heroicons

## 📝 Environment Variables Reference

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `NEXT_PUBLIC_AWS_COGNITO_POOL_ID` | Yes | Your Cognito User Pool ID | `us-east-1_AbCdEfGhI` |
| `NEXT_PUBLIC_AWS_COGNITO_APP_CLIENT_ID` | Yes | Your Cognito App Client ID | `1a2b3c4d5e6f7g8h9i0j` |
| `NEXT_PUBLIC_AWS_COGNITO_REGION` | No | AWS Region (optional) | `us-east-1` |

## 🐛 Troubleshooting

### "Amplify has not been configured" error
- Ensure environment variables are prefixed with `NEXT_PUBLIC_`
- Restart your dev server after changing `.env.local`
- Check that variables are set correctly in your deployment platform

### Email not received
- Check your spam/junk folder
- Verify email configuration in Cognito console
- For production, configure Amazon SES for reliable email delivery

### Build errors
- Run `npm run build` locally to test
- Ensure all environment variables are set
- Check TypeScript errors with `npm run type-check`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Support

For issues related to:
- **AWS Cognito**: Check [AWS Cognito Documentation](https://docs.aws.amazon.com/cognito/)
- **AWS Amplify**: Check [AWS Amplify Documentation](https://docs.amplify.aws/)
- **Next.js**: Check [Next.js Documentation](https://nextjs.org/docs)

---

Built with ❤️ using Next.js and AWS Cognito
