import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-6">AI Content Generator</h1>
        <p className="text-lg mb-8">
          Generate high-quality content in seconds using AI. Perfect for blogs,
          social media, and more!
        </p>
        <Link href="/dashboard">
          <Button className="px-8 py-3 text-lg font-semibold bg-white text-indigo-600 rounded-full hover:bg-indigo-100 transition-all duration-300">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}
