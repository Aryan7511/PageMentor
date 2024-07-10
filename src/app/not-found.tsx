import { Karla } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const karla = Karla({ subsets: ['latin'], weight: '500' });

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className={`text-4xl font-bold mb-2 ${cn(karla.className)}`}>
          Page Not Found
        </h1>
        <p className={`text-lg ${cn(karla.className)}`}>
          The page you are looking for does not exist.
        </p>
        <Link href={'/'}>
          <Button className={`text-base px-4 my-2 ${cn(karla.className)}`}>
            Go to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
