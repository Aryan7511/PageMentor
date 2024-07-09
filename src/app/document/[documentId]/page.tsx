import { auth } from '@clerk/nextjs/server';
import { db } from '@/utils/db';
import React from 'react';
import EditorBlock from './_components/editor-block';
import { redirect } from 'next/navigation';

interface SingleDocumentProps {
  documentId: string;
}
const SingelDocumentPage = async ({
  params
}: {
  params: SingleDocumentProps;
}) => {
  const { userId } = auth();

  if (!userId) {
    redirect('/');
  }
  const getDocument = await db.document.findUnique({
    where: {
      id: params.documentId,
      userId: userId
    }
  });

  return (
    <div className="mt-6">
      <EditorBlock document={getDocument} />
    </div>
  );
};

export default SingelDocumentPage;
