import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-gray-200">
      <section className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-6 py-24 text-center lg:px-8">
        <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
          404
        </span>
        <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          That page is off the board.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 dark:text-slate-300">
          The route you tried doesn&apos;t exist or may have moved. Head back to the command
          center or book a discovery call with the team.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 transition-all duration-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-white"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
