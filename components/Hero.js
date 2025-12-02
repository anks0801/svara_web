import { useRouter } from 'next/router';

export default function Hero() {
  const { basePath } = useRouter();
  return (
    <section
      className="relative flex items-center justify-center min-h-[56vh] md:min-h-[48vh] py-16 md:py-24 text-center px-6 bg-gradient-to-b from-blue-900 to-blue-800"
      aria-label="Welcome to Svara"
    >
      {/* Decorative aircraft background (low contrast) */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={`${basePath}/airplane-with-wings-engine.jpg`}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-8"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-blue-800/60" />
      </div>

      <div className="relative z-10 max-w-4xl px-4">

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Welcome to Svara Aerotech Solutions
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-blue-100/90 max-w-2xl mx-auto">
          Modern aviation engineering, maintenance, and logistics with precision and care.
        </p>
      </div>
    </section>
  );
}
