import { Button } from '@/components/ui/button';
import { ArrowRight, Bot } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <div className="absolute bottom-0 left-[-10%] top-[-20%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(99,102,241,0.8),rgba(0,0,0,0))] animate-aurora-1"></div>
        <div className="absolute bottom-[-10%] right-[-10%] top-auto h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(217,70,239,0.8),rgba(0,0,0,0))] animate-aurora-2"></div>
        <div className="absolute bottom-[20%] right-[10%] top-auto h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(56,189,248,0.7),rgba(0,0,0,0))] animate-aurora-3"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-4 text-center">
        {/* Main Heading with Gradient Text */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-400 pb-2 animate-fade-in-down">
          Generate Content
          <br />
          with{' '}
          <span className="bg-clip-text bg-gradient-to-r from-fuchsia-500 to-sky-400">
            Colorful Intelligence
          </span>
        </h1>
        <p className="mt-6 text-lg text-neutral-300 max-w-xl animate-fade-in-down [animation-delay:200ms]">
          Transform your ideas into stunning articles, social posts, and
          creative copy. Our AI brings your vision to life with vibrant
          precision.
        </p>

        {/* Call to Action Button */}
        <Link
          href="/dashboard"
          className="mt-8 animate-fade-in-up [animation-delay:400ms]"
        >
          <Button
            size="lg"
            className="group relative h-14 px-8 font-bold text-white bg-black/40 border border-white/20 rounded-full backdrop-blur-md overflow-hidden
                       transition-all duration-300 hover:border-fuchsia-500/50 hover:shadow-xl hover:shadow-fuchsia-500/20"
          >
            <span className="relative z-10 flex items-center">
              Start Creating Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
        </Link>

        {/* Glassmorphism Showcase Card */}
        <div className="mt-16 w-full max-w-2xl p-6 bg-white/5 border border-white/10 rounded-2xl shadow-2xl shadow-black/40 backdrop-blur-lg animate-fade-in-up [animation-delay:600ms]">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-fuchsia-500 to-sky-400">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-neutral-100">
                AI is generating...
              </p>
              <p className="font-mono text-sm text-neutral-400">
                &quot;Unleashing a universe of content, where every word is
                crafted by light...&quot;
                <span className="inline-block w-2 h-4 bg-sky-400 animate-pulse ml-1"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
