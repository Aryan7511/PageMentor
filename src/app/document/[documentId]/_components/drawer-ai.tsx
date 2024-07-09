'use client';

import { useState } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer';
import { Clipboard, Loader, Check } from 'lucide-react';
import { googleGenerativeAI } from '@/utils/gemini';
import { Button } from '@/components/ui/button';

interface DrawerProps {
  description: string | null;
}

const DrawerAI = ({ description }: DrawerProps) => {
  const [open, setOpen] = useState(false);
  const [mentorSuggestion, setMentorSuggestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleMentorSuggestion = async () => {
    setIsLoading(true);
    try {
      const response = (await googleGenerativeAI(description!)) as string;
      setMentorSuggestion(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(mentorSuggestion)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Could not copy text: ', err);
      });
  };

  console.log('wizard Suggesstion', mentorSuggestion);
  return (
    <div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger
          className="flex float-right border border-1 py-2 px-4 rounded hover:opacity-80"
          onClick={handleMentorSuggestion}
        >
          Ask Your Mentor 🧑‍🏫
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="flex justify-between items-center">
            <DrawerTitle>
              🧑‍🏫 Oyyy! Mentor here! Ready to help you polish your text and make
              it shine✨
            </DrawerTitle>
            <Button
              variant="ghost"
              className="flex items-center"
              onClick={copyToClipboard}
            >
              {copied ? (
                <Check className="w-5 h-5" />
              ) : (
                <Clipboard className="w-5 h-5" />
              )}
            </Button>
          </DrawerHeader>
          {isLoading ? (
            <Loader className="flex mx-auto justify-center animate-spin" />
          ) : (
            <DrawerDescription className="whitespace-pre-wrap px-4 select-text">
              {mentorSuggestion.length > 0 && <p>{mentorSuggestion}</p>}
            </DrawerDescription>
          )}
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerAI;
