import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <Image
        src="/profile.jpeg"
        alt="Sudipta Swain"
        width={300}
        height={400}
        className="rounded-3xl shadow-2xl"
      />

      <h1 className="text-5xl font-bold mt-6">
        Sudipta Swain
      </h1>

      <p className="text-xl text-gray-400 mt-3">
        Computer Science Student & Aspiring Full Stack Developer
      </p>

      <p className="max-w-2xl text-center text-gray-300 mt-6">
        I enjoy building web applications, AI-powered projects,
        and learning modern technologies such as React,
        Next.js, Python, and Three.js.
      </p>

      <div className="flex gap-4 mt-8">
        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold">
          View Projects
        </button>

        <button className="border border-white px-6 py-3 rounded-lg font-semibold">
          Contact Me
        </button>
      </div>
    </main>
  );
}