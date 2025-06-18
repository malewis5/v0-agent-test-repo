import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="flex flex-col items-center gap-6 max-w-xl w-full">
        <Image src="/vercel.svg" alt="Vercel Logo" width={64} height={64} className="mb-2" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">About Us</h1>
        <p className="text-gray-600 text-center mb-4">
          Welcome to our Next.js app! We build modern, performant web applications with a focus on simplicity and speed. Our team leverages the latest technologies to deliver the best user experience.
        </p>
        <div className="flex gap-6 mt-4">
          <Image src="/next.svg" alt="Next.js" width={40} height={40} />
          <Image src="/globe.svg" alt="Globe" width={40} height={40} />
          <Image src="/window.svg" alt="Window" width={40} height={40} />
        </div>
      </div>
    </main>
  );
}
