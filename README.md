<h1 align="center">PageMentor</h1>


PageMentor is an innovative platform designed to elevate your document management and writing capabilities. It harnesses cutting-edge AI technology to provide intelligent grammar corrections and writing enhancements, while also offering secure and efficient document management.

## 🌐 Deployment

⭐️ **PageMentor is now live and can be accessed at the following link: [PageMentor Deployment](https://page-mentor.vercel.app/)**

## <a name="tech-stack">⚙️ Tech Stack</a>
SpeakEase is built using the following technologies:

[![Stack Used](https://skillicons.dev/icons?i=nextjs,typescript,html,tailwind,nodejs,prisma,npm,postgres)](https://skillicons.dev)

## <a name="features">🔋 **Features**</a>

- **Grammar Enhancement with AI**: Uses the Gemini-1.5-Flash model to identify and correct grammatical errors.

- **Sophisticated Text Editor**: Offers feature-rich text-editor formatting options for document creation.

- **Writing Assistance**: Provides real-time suggestions to improve writing clarity using AI.

- **Google Sign-In Integration**: Implemented using Clerk for seamless authentication.

- **User-Friendly Interface**: Intuitive design for a smooth user experience.


## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Aryan7511/PageMentor.git
cd PageMentor
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
DATABASE_URL=your-database-url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
NEXT_PUBLIC_GEMINI_API_KEY=your-gemini-api-key
```

**Obtaining the Required Credentials**

- **Database URL**:
  - Sign up or log in to [Neon](https://neon.tech/), create a PostgreSQL database, and retrieve the connection string from your database settings.

- **Clerk Credentials**:
  - Visit [Clerk](https://clerk.dev/) and sign up or log in.
  - Create a new application to get your **Publishable Key** and **Secret Key** from the Clerk dashboard.

- **Gemini API Key**:
  - For the Gemini API key, follow the instructions on how to obtain it from the [Gemini API Key documentation](https://ai.google.dev/gemini-api/docs/api-key).


**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
