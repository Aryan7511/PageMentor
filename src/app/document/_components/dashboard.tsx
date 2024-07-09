import { auth } from '@clerk/nextjs/server';
import React, { Suspense } from 'react';
import IntroPage from './intro-page';
import { NewDocument } from './new-document';
import RecentDocument from './recent-document';
import { Loader } from 'lucide-react';

export const Dashboard = () => {
  const { userId } = auth();

  if (!userId) {
    return <IntroPage />;
  }

  return (
    <div>
      {/* New Document */}
      <Suspense
        fallback={
          <div className="flex items-center justify-center">
            <Loader className="animate-spin" />
          </div>
        }
      >
        <NewDocument />
      </Suspense>

      {/* Recent Document */}
      <Suspense
        fallback={
          <div className="flex items-center justify-center">
            <Loader className="animate-spin" />
          </div>
        }
      >
        <RecentDocument />
      </Suspense>
    </div>
  );
};
