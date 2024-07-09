/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YgbSxkUfKt5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from 'next/image';
import { SignInButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

export default function IntroPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 sm:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Elevate Your Writing &nbsp;&nbsp; Skills 🪶
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Experience the future of writing with our innovative tools
                    and services that harness the power of AI to enhance your
                    creativity and productivity.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <SignInButton>
                    <Button>Get Started</Button>
                  </SignInButton>
                </div>
              </div>
              <Image
                src="/hero.gif"
                unoptimized
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
