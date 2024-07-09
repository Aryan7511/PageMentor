import Image from 'next/image';
import Link from 'next/link';
import { Karla } from 'next/font/google';
import { cn } from '@/lib/utils';

const karla = Karla({ subsets: ['latin'], weight: '500' });

export const Logo = () => {
  return (
    <div>
      <Link className="flex items-center" href={'/'}>
        <Image src="/logo.svg" height={40} width={40} alt="logo" />
        <h2 className={cn('text-2xl ml-2', karla.className)}>Page Mentor</h2>
      </Link>
    </div>
  );
};
