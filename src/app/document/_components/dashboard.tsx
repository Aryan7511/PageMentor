import { auth } from '@clerk/nextjs/server';
import React, { Suspense } from 'react';
import IntroPage from './intro-page';
import { Loader } from 'lucide-react';

export const Dashboard = () => {
  const { userId } = auth();

  if (!userId) {
    return <IntroPage />;
  }

  return <div>New Document</div>;
};
